
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
import NotFound from "./pages/NotFound";

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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
