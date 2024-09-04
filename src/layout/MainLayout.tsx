import React from "react";
import Header from "../section/Header";
import Footer from "../section/Footer";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <div className="bg-background dark:bg-background-dark">
      <div className="xs:px-6 container mx-auto">
        <Header />
        <main className="min-h-screen">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
