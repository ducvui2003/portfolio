import React from "react";
import Header from "../section/Header";
import Footer from "../section/Footer";
import { Outlet } from "react-router-dom";
import MetaTags from "../component/MetaTags";

const env = import.meta.env;

const MainLayout: React.FC = () => {
  return (
    <>
      <MetaTags
        author={env.VITE_META_AUTHOR || ""}
        image={env.VITE_META_IMAGE || ""}
        siteName={env.VITE_META_SITE_NAME || ""}
        title={env.VITE_META_TITLE || ""}
        url={env.VITE_META_URL || ""}
        description={env.VITE_META_DESCRIPTION || ""}
      />
      <div className="bg-background dark:bg-background-dark">
        <div className="container mx-auto xs:px-6">
          <Header />
          <main className="min-h-screen">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
