
import { AdminDashboard } from "@/components/AdminDashboard";
import { MainNavigation } from "@/components/MainNavigation";
import { SpaceBackground } from "@/components/SpaceBackground";

const Admin = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <SpaceBackground />
      <MainNavigation />
      <AdminDashboard />
    </div>
  );
};

export default Admin;
