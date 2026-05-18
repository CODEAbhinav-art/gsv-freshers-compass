import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminDashboard } from "@/components/AdminDashboard";
import { MainNavigation } from "@/components/MainNavigation";
import { SpaceBackground } from "@/components/SpaceBackground";
import { WisdomModeration } from "@/components/wisdom/WisdomModeration";
import { SurvivalModeration } from "@/components/survival/SurvivalModeration";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Shield, ShieldAlert, Lock, Loader2, LogIn, LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

type AuthState = "loading" | "unauthenticated" | "unauthorized" | "authorized";

const Admin = () => {
  const navigate = useNavigate();
  const [authState, setAuthState] = useState<AuthState>("loading");
  const [userId, setUserId] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  // Sign-in form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signingIn, setSigningIn] = useState(false);

  // ── Check auth + role on mount and auth changes ──────────────────────────
  const checkAccess = async () => {
    setAuthState("loading");
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      setUserId(null);
      setUserEmail(null);
      setAuthState("unauthenticated");
      return;
    }

    setUserId(user.id);
    setUserEmail(user.email ?? null);

    const [{ data: isAdmin }, { data: isMod }] = await Promise.all([
      supabase.rpc("has_role", { _user_id: user.id, _role: "admin" }),
      supabase.rpc("has_role", { _user_id: user.id, _role: "moderator" }),
    ]);

    setAuthState(isAdmin || isMod ? "authorized" : "unauthorized");
  };

  useEffect(() => {
    checkAccess();
    const { data: sub } = supabase.auth.onAuthStateChange(() => checkAccess());
    return () => sub.subscription.unsubscribe();
  }, []);

  // ── Sign in handler ───────────────────────────────────────────────────────
  const handleSignIn = async () => {
    if (!email.trim() || !password) return toast.error("Enter your email and password.");
    setSigningIn(true);
    const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
    setSigningIn(false);
    if (error) return toast.error(error.message);
    // checkAccess will fire automatically via onAuthStateChange
  };

  // ── Sign out ──────────────────────────────────────────────────────────────
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast.success("Signed out");
  };

  // ── Loading ───────────────────────────────────────────────────────────────
  if (authState === "loading") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <SpaceBackground />
        <div className="flex flex-col items-center gap-3 text-muted-foreground z-10">
          <Loader2 className="h-8 w-8 animate-spin" />
          <p className="text-sm">Checking permissions…</p>
        </div>
      </div>
    );
  }

  // ── Not signed in — show inline login ────────────────────────────────────
  if (authState === "unauthenticated") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4 relative">
        <SpaceBackground />
        <div className="w-full max-w-sm z-10 space-y-6">
          {/* Logo mark */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20">
              <Shield className="h-7 w-7 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">Admin Portal</h1>
            <p className="text-sm text-muted-foreground">
              Sign in with your moderator or admin account to continue.
            </p>
          </div>

          <Card className="border-border/60 shadow-xl">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <Lock className="h-4 w-4 text-primary" /> Sign in
              </CardTitle>
              <CardDescription>Access is restricted to admins and moderators only.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="admin-email">Email</Label>
                <Input
                  id="admin-email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSignIn()}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="admin-password">Password</Label>
                <Input
                  id="admin-password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSignIn()}
                />
              </div>
              <Button
                id="admin-signin-btn"
                className="w-full gap-2"
                onClick={handleSignIn}
                disabled={signingIn}
              >
                {signingIn ? (
                  <><Loader2 className="h-4 w-4 animate-spin" /> Signing in…</>
                ) : (
                  <><LogIn className="h-4 w-4" /> Sign in</>
                )}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full text-muted-foreground"
                onClick={() => navigate("/")}
              >
                ← Back to site
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // ── Signed in but lacks role ──────────────────────────────────────────────
  if (authState === "unauthorized") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4 relative">
        <SpaceBackground />
        <div className="w-full max-w-sm z-10 space-y-6 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-destructive/10 border border-destructive/20">
            <ShieldAlert className="h-7 w-7 text-destructive" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Access Denied</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Your account (<span className="font-medium text-foreground/80">{userEmail}</span>) doesn't
              have admin or moderator privileges.
            </p>
          </div>

          <Card className="text-left border-border/60">
            <CardContent className="pt-4 space-y-2">
              <p className="text-xs text-muted-foreground">
                Share your user ID with an admin to request access:
              </p>
              <code className="block bg-muted rounded-md px-3 py-2 text-xs break-all select-all text-foreground">
                {userId}
              </code>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-2">
            <Button variant="outline" className="gap-2" onClick={handleSignOut}>
              <LogOut className="h-4 w-4" /> Sign out & try another account
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground" onClick={() => navigate("/")}>
              ← Back to site
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // ── Authorized — render full dashboard ───────────────────────────────────
  return (
    <div className="min-h-screen bg-background relative">
      <SpaceBackground />
      <MainNavigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Page header with sign-out */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground leading-none">Admin Dashboard</h1>
              <p className="text-sm text-muted-foreground mt-0.5">Signed in as {userEmail}</p>
            </div>
          </div>
          <Button variant="outline" size="sm" className="gap-2" onClick={handleSignOut}>
            <LogOut className="h-4 w-4" /> Sign out
          </Button>
        </div>

        <Tabs defaultValue="insights">
          <TabsList>
            <TabsTrigger value="questions">Questions</TabsTrigger>
            <TabsTrigger value="insights">Senior Insights</TabsTrigger>
            <TabsTrigger value="survival">Survival Maps</TabsTrigger>
          </TabsList>
          <TabsContent value="questions" className="mt-6">
            <AdminDashboard />
          </TabsContent>
          <TabsContent value="insights" className="mt-6">
            <WisdomModeration />
          </TabsContent>
          <TabsContent value="survival" className="mt-6">
            <SurvivalModeration />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
