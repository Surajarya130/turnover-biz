import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="mx-auto mt-10  flex min-h-screen max-w-[90%] flex-col">{children}</div>;
};

export default Layout;
