import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { GlobalErrorHandler } from "lib/components";
import { theme, GlobalStyle } from "lib/styles";

import AppRoutes from "routes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Router>
          {/* <GlobalErrorHandler> */}
          <AppRoutes />
          {/* </GlobalErrorHandler> */}
        </Router>
      </QueryClientProvider>
    </ThemeProvider>
  );
};
