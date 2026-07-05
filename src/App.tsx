import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes, useParams } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getLocaleFromRouteSlug } from "@/i18n/locales";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

function LocalizedIndex() {
  const { localeSlug } = useParams();
  const locale = getLocaleFromRouteSlug(localeSlug);

  if (!locale) {
    return <NotFound />;
  }

  return <Index key={locale.key} initialLocale={locale.key} />;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/en/" replace />} />
          <Route path="/:localeSlug/" element={<LocalizedIndex />} />
          <Route path="/:localeSlug" element={<LocalizedIndex />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
