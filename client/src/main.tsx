import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const root = document.getElementById("root");

import Card from "./components/ActionToPerforms";

function App() {
  return (
    <div>
      <Card />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

const rootElement = document.getElementById("root");
if (rootElement == null) {
  if (root) {
    createRoot(root).render(
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>,
    );
  }
}
