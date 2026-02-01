import { Toaster } from "@/components/ui/toaster"
import { TooltipProvider } from "@/components/ui/tooltip"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "@/hooks/useTheme"
import { Navigation } from "@/components/Navigation"
import { ScrollToTop } from "@/components/ScrollToTop"
import { FloatingHearts } from "@/components/FloatingHearts"

import Index from "./pages/Index"
import GreetingCard from "./pages/GreetingCard"
import LoveStory from "./pages/LoveStory"
import Gallery from "./pages/Gallery"
import Messages from "./pages/Messages"
import Surprise from "./pages/Surprise"
import NotFound from "./pages/NotFound"

const App = () => (
  <ThemeProvider>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <ScrollToTop />
        <FloatingHearts />
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/greeting" element={<GreetingCard />} />
          <Route path="/love-story" element={<LoveStory />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/surprise" element={<Surprise />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </ThemeProvider>
)

export default App
