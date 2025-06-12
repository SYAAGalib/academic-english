
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Class6To8 from "./pages/Class6To8";
import SSC from "./pages/SSC";
import HSC from "./pages/HSC";
import Admission from "./pages/Admission";
import Teachers from "./pages/Teachers";
import Resources from "./pages/Resources";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/bn" element={<Index />} />
              <Route path="/class-6-8" element={<Class6To8 />} />
              <Route path="/bn/class-6-8" element={<Class6To8 />} />
              <Route path="/ssc" element={<SSC />} />
              <Route path="/bn/ssc" element={<SSC />} />
              <Route path="/hsc" element={<HSC />} />
              <Route path="/bn/hsc" element={<HSC />} />
              <Route path="/admission" element={<Admission />} />
              <Route path="/bn/admission" element={<Admission />} />
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/bn/teachers" element={<Teachers />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/bn/resources" element={<Resources />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/bn/blog" element={<Blog />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
