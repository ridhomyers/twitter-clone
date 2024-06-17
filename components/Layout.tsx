import React from "react";

import FollowBar from "@/components/layout/FollowBar";
import Sidebar from "@/components/layout/Sidebar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="h-screen bg-black w-full">
      <div className="container h-full w-full mx-auto">
        <div className="grid grid-cols-4 h-full">
          <Sidebar />
          <div
            className="
              w-full
              mx-0
              col-span-4 
              lg:col-span-2
              border-x-[1px] 
              border-neutral-800
          "
          >
            {children}
          </div>
          <FollowBar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
