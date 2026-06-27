
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Admin from "./pages/Admin";
import ExamPreparation from "./pages/ExamPreparation";
import LearningResources from "./pages/LearningResources";
import InternshipGallery from "./pages/InternshipGallery";
import BranchwiseMentors from "./pages/BranchwiseMentors";
import MechanicalEngineering from "./pages/MechanicalEngineering";
import About from "./pages/About";
import SeniorWisdom from "./pages/SeniorWisdom";
import BranchSurvivalMaps from "./pages/BranchSurvivalMaps";
import BranchResourceSection from "./pages/BranchResourceSection";
import Auth from "./pages/Auth";
import Chat from "./pages/Chat";
import AcademicCalendar from "./pages/AcademicCalendar";
import NotFound from "./pages/NotFound";
import { ZapierChatbot } from "./components/ZapierChatbot";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/exam-preparation" element={<ExamPreparation />} />
          <Route path="/learning-resources" element={<LearningResources />} />
          <Route path="/internship-gallery" element={<InternshipGallery />} />
          <Route path="/branchwise-mentors" element={<BranchwiseMentors />} />
          <Route path="/mechanical-engineering" element={<MechanicalEngineering />} />
          <Route path="/about" element={<About />} />
          <Route path="/senior-wisdom" element={<SeniorWisdom />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/branch-survival" element={<BranchSurvivalMaps />} />
          <Route path="/branch-guides/:branch/:section" element={<BranchResourceSection />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/academic-calendar" element={<AcademicCalendar />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <ZapierChatbot />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
