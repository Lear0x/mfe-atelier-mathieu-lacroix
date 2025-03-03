import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

const Header = React.lazy(() => import("header/Header"));

const MainApp = () => ( 
  <div>
    <Suspense fallback={<div>Loading Header...</div>}>
      <Header />
    </Suspense>
    <h2>Bienvenue sur l'application Shell</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainApp />);
