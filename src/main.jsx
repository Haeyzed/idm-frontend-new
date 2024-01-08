import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import ThemeProvider from "./components/Theme/ThemeProvider.jsx";
import { ContextProvider } from "./components/context/ContextProvider.jsx";
import { ToastContextProvider } from "./components/context/ToastContext.jsx";
import router from "./router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ErrorBoundary> */}
      <ToastContextProvider>
        <ThemeProvider>
          <ContextProvider>
            <RouterProvider
              router={router}
            />
          </ContextProvider>
        </ThemeProvider>
      </ToastContextProvider>
    {/* </ErrorBoundary> */}
  </React.StrictMode>
);
