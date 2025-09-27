import React from "react";
import Header from "../section/Header";
import Footer from "../section/Footer";
import { Outlet } from "react-router-dom";
import MetaTags from "../component/MetaTags";
import { BgDot } from "../component/BgDot";

const env = import.meta.env;

const MainLayout: React.FC = () => {
  return (
    <main className="bg-[#f7f2f2]">
      <MetaTags
        author={env.VITE_META_AUTHOR || ""}
        image={env.VITE_META_IMAGE || ""}
        siteName={env.VITE_META_SITE_NAME || ""}
        title={env.VITE_META_TITLE || ""}
        url={env.VITE_META_URL || ""}
        description={env.VITE_META_DESCRIPTION || ""}
      />
      <BgDot>
        <Header />

        <div className="container">
          <Outlet />
        </div>
      </BgDot>
    </main>
  );
};

export default MainLayout;
