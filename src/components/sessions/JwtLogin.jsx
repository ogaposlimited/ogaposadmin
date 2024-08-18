import { useNavigate } from "react-router-dom";
import { Field, Formik } from "formik";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import useAuth from "../hooks/useAuth";

import * as Yup from "yup";
// inital login credentials
const initialValues = {
  identifier: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password must be 6 character length")
    .required("Password is required!"),
  // email: Yup.string()
  //   .email("Invalid Email address")
  //   .required("Email is required!"),
  // username: Yup.string()
  //   .email("Invalid Username")
  //   .required("Username is required!"),
});
const JwtLogin = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  const apiUrl = process.env.REACT_APP_API_URL;
  const handleFormSubmit = async (values) => {
    console.log("handleFormSubmit is triggered");

    try {
      // Assuming your login function returns a JWT token upon successful login
      const response = await login(values.identifier, values.password);

      if (response.status === 200) {
        // Successful login
        // Redirect the user after successful login
        checkUserRoleAndRedirect();
      } else {
        // Handle other status codes (e.g., 401 for unauthorized)
        console.error("Login failed with status:", response.status);
      }
    } catch (error) {
      console.error("Incorrect Username/Email or Password:", error);
    }
  };

  const getUserRoleFromToken = () => {
    // Implement this function to extract the user's role from the JWT token.
    const jwtToken = localStorage.getItem("jwtToken");
    if (jwtToken) {
      const decodedToken = jwtDecode(jwtToken);
      return decodedToken.role;
    }
    return "guest"; // Return a default role for unauthenticated users
  };

  const checkUserRoleAndRedirect = () => {
    const userRole = getUserRoleFromToken();

    if (userRole === "admin") {
      navigate("/admin-dashboard");
    } else if (userRole === "manager") {
      navigate("/dashboard/manager-dashboard");
    } else if (userRole === "sales") {
      navigate("/dashboard/sales-dashboard");
    } else {
      navigate("/session/signin"); // Redirect unauthenticated users to sign-in page
    }
  };
  return (
    <>
      <body
        class="account-page"
        style={{ width: "100%", margin: "0", padding: "0" }}
      >
        <div class="main-wrapper">
          <div class="account-content">
            <div class="login-wrapper bg-img">
              <div class="login-content">
                <Formik
                  onSubmit={handleFormSubmit}
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <div class="login-userset">
                        <div class="login-userheading">
                          <h3>Sign In - OGAPOS Dashboard</h3>
                          <h4>
                            Login to your dashboard using your email and
                            password
                          </h4>
                        </div>
                        <div class="form-login mb-3">
                          <label class="form-label">
                            Email Address/Username
                          </label>
                          <div class="form-addons">
                            <input
                              type="text"
                              value={values.identifier}
                              name="identifier"
                              onChange={handleChange}
                              class="form- control"
                            />
                            <img
                              src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/mail.svg"
                              alt="img"
                            />
                          </div>
                        </div>
                        <div class="form-login mb-3">
                          <label class="form-label">Password</label>
                          <div class="pass-group">
                            <input
                              value={values.password}
                              onChange={handleChange}
                              name="password"
                              type="password"
                              class="pass-input form-control"
                            />
                            <span class="fas toggle-password fa-eye-slash"></span>
                          </div>
                        </div>
                        <div class="form-login authentication-check">
                          <div class="row">
                            <div class="col-12 d-flex align-items-center justify-content-between">
                              <div class="custom-control custom-checkbox">
                                <label class="checkboxs ps-4 mb-0 pb-0 line-height-1">
                                  <input type="checkbox" class="form-control" />
                                  <span class="checkmarks"></span>Remember me
                                </label>
                              </div>
                              <div class="text-end">
                                <a
                                  class="forgot-link"
                                  href="/session/forgot-password"
                                >
                                  Forgot Password?
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="form-login" style={{ width: "100%" }}>
                          <button
                            loading={loading}
                            type="submit"
                            class="btn btn-login"
                            style={{ width: "100%" }}
                          >
                            Sign In
                          </button>
                        </div>
                        {/*} <div class="signinform">
                      <h4>
                        New on our platform?
                        <a
                          href="https://dreamspos.dreamstechnologies.com/html/template/register.html"
                          class="hover-a"
                        >
                          {" "}
                          Create an account
                        </a>
                      </h4>
                    </div>*/}
                        {/*}   <div class="form-setlogin or-text">
                      <h4>OR</h4>
                    </div>
                    <div class="form-sociallink">
                      <ul class="d-flex">
                        <li>
                          <a href="javascript:void(0);" class="facebook-logo">
                            <img
                              src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/facebook-logo.svg"
                              alt="Facebook"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <img
                              src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/google.png"
                              alt="Google"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);" class="apple-logo">
                            <img
                              src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/apple-logo.svg"
                              alt="Apple"
                            />
                          </a>
                        </li>
                      </ul>
                      <div class="my-4 d-flex justify-content-center align-items-center copyright-text">
                        <p>
                          Copyright &copy; 2023 DreamsPOS. All rights reserved
                        </p>
                      </div>
                    </div>*/}
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default JwtLogin;
