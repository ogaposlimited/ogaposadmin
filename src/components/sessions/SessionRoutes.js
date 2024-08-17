import { lazy } from "react";

// import Login2 from "./Login2";
// import Register from "./Register";

// const NotFound = Loadable(lazy(() => import("./NotFound")));
// const ForgotPassword = Loadable(lazy(() => import("./ForgotPassword")));
const JwtLogin = lazy(() => import("./JwtLogin"));
// const JwtRegister = Loadable(lazy(() => import("./JwtRegister")));

const sessionRoutes = [
  // { path: "/signup", element: <JwtRegister /> },
  { path: "/login", element: <JwtLogin /> },

  // { path: "/forgot-password", element: <ForgotPassword /> },
  // { path: "/logins", element: <Login2 /> },
  // { path: "/register", element: <Register /> },
  // { path: "/404", element: <NotFound /> },
];

export default sessionRoutes;
