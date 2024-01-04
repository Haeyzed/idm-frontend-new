import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import ThemeProvider from "./components/Theme/ThemeProvider.jsx";
import LoadingSpinner from "./components/common/LoadingSpinner.jsx";
import { ContextProvider } from "./components/context/ContextProvider.jsx";
import { ToastContextProvider } from "./components/context/ToastContext.jsx";
import router from "./router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ToastContextProvider>
        <ThemeProvider>
          <ContextProvider>
            <RouterProvider
              router={router}
              fallbackElement={<LoadingSpinner />}
            />
          </ContextProvider>
        </ThemeProvider>
      </ToastContextProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
