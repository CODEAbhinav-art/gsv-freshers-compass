import { AdminDashboard } from "@/components/AdminDashboard";
import { MainNavigation } from "@/components/MainNavigation";
import { SpaceBackground } from "@/components/SpaceBackground";
import { WisdomModeration } from "@/components/wisdom/WisdomModeration";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Admin = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <SpaceBackground />
      <MainNavigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Tabs defaultValue="questions">
          <TabsList>
            <TabsTrigger value="questions">Questions</TabsTrigger>
            <TabsTrigger value="insights">Senior Insights</TabsTrigger>
          </TabsList>
          <TabsContent value="questions" className="mt-6">
            <AdminDashboard />
          </TabsContent>
          <TabsContent value="insights" className="mt-6">
            <WisdomModeration />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
