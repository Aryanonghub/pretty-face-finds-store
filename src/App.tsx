
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Get the repository name from the URL for GitHub Pages
const getBasename = () => {
  // Extract repo name from GitHub Pages URL pattern (username.github.io/repo-name)
  const { pathname } = window.location;
  // Check if we're on a GitHub Pages domain
  const isGitHubPages = /github\.io/i.test(window.location.hostname);
  
  if (isGitHubPages) {
    // Extract the repository name (first segment after the domain)
    const segments = pathname.split('/');
    if (segments.length > 1) {
      return '/' + segments[1]; // Return the repo name with leading slash
    }
  }
  
  return '/'; // Default for local development or custom domains
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={getBasename()}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
