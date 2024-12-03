import React from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* Common Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
