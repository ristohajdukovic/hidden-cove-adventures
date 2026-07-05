import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
  localizedRouteEntries,
  type LocalizedRouteEntry,
  type TourPageId,
} from "@/i18n/routes";
import Index from "./pages/Index.tsx";
import TourDetail from "./pages/TourDetail.tsx";
import ToursOverview from "./pages/ToursOverview.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

function PageForRoute({ entry }: { entry: LocalizedRouteEntry }) {
  if (entry.pageId === "home") {
    return <Index key={`${entry.locale}-${entry.pageId}`} initialLocale={entry.locale} />;
  }

  if (entry.pageId === "tours") {
    return (
      <ToursOverview
        key={`${entry.locale}-${entry.pageId}`}
        initialLocale={entry.locale}
      />
    );
  }

  return (
    <TourDetail
      key={`${entry.locale}-${entry.pageId}`}
      initialLocale={entry.locale}
      pageId={entry.pageId as TourPageId}
    />
  );
}

function routePathVariants(pathname: string): string[] {
  if (pathname === "/") {
    return ["/"];
  }

  const trimmed = pathname.replace(/\/+$/g, "");

  return [pathname, trimmed];
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/en/" element={<Navigate to="/" replace />} />
          <Route path="/en" element={<Navigate to="/" replace />} />
          <Route path="/en/*" element={<Navigate to="/" replace />} />
          {localizedRouteEntries.flatMap((entry) =>
            routePathVariants(entry.path).map((path) => (
              <Route
                key={`${entry.locale}-${entry.pageId}-${path}`}
                path={path}
                element={<PageForRoute entry={entry} />}
              />
            )),
          )}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
