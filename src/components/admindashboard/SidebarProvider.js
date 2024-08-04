// import React, { createContext, useContext, useState } from "react";

// // Create a context for sidebar state
// const SidebarContext = createContext();

// export const useSidebar = () => useContext(SidebarContext);

// export const SidebarProvider = ({ children }) => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen((prev) => !prev);
//     localStorage.setItem("isSidebarOpen", JSON.stringify(!isSidebarOpen));
//   };

//   return (
//     <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
//       {children}
//     </SidebarContext.Provider>
//   );
// };

// // Wrap your App component with SidebarProvider
import React, { createContext, useContext, useState, useEffect } from "react";

// Create a context for sidebar state
const SidebarContext = createContext();

export const useSidebar = () => useContext(SidebarContext);

export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    // Initialize state from local storage
    const savedSidebarState = localStorage.getItem("isSidebarOpen");
    return savedSidebarState ? JSON.parse(savedSidebarState) : false;
  });

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => {
      const newState = !prev;
      localStorage.setItem("isSidebarOpen", JSON.stringify(newState));
      return newState;
    });
  };

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
