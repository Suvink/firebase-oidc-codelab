import React from "react";
import GDGLogo from "../../assets/img/gdg-srilanka.png";
import AsgardeoLogo from "../../assets/img/asgardeo-logo.png";
import { useAuth } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import { useSnackbar } from "notistack";
import "./index.css";

const LoginPage = () => {

  const { signInWithAsgardeo } = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory()

  const initiateOIDCLogin = async (e) => {
    e.preventDefault();
    try {
      const asgardeoResponse = await signInWithAsgardeo();
      if (asgardeoResponse) {
        history.replace("/");
      }
    } catch (err) {
      console.log(err);
      enqueueSnackbar("Login Failed", {
        variant: 'error',
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },

      });
    }
  }

  return (
    <section className="login-page">
      <div className="login-container">
        <div className="columns is-centered">
          <div className="column is-5 login-column">

            <div className="box login-box has-text-centered">
              <div className="gdg-logo-hoder has-text-centered">
                <img src={GDGLogo} alt="GDG" />
              </div>
              <h1 className="subtitle is-1 has-text-black mb-0">
                DevFest 2022
              </h1>
              <h1 className="subtitle is-3 has-text-black mb-5">
                Sri Lanka 🇱🇰
              </h1>
              <img className="login-image" src={AsgardeoLogo} alt="DevFest" />
              <div className="login-button-holder mt-4">
                <button className="button login-button mt-3" onClick={initiateOIDCLogin}>
                  <span className="icon">
                    <i className="fas fa-sign-in-alt"></i>
                  </span>
                  <span>Sign in with Asgardeo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
