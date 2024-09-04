import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import AppRoutes from "./AppRoute";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
