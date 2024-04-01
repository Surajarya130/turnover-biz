import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <main className="mt-10">{children}</main>;
};

export default Layout;
