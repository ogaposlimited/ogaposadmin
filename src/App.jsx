// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import About from "./pages/About";
// import Home from "./pages/Home";
// import Login from "./pages/Login";

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route exact path="/" element={<Login />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { AuthProvider } from "./components/contexts/JWTAuthContext";
import { SidebarProvider } from "./components/admindashboard/SidebarProvider";

function App() {
  const content = useRoutes(routes);
  return (
    <div>
      <AuthProvider>
        <SidebarProvider>
          <Suspense fallback={<div>Loading...</div>}>{content}</Suspense>
        </SidebarProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
