/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useAuth } from "../../context/AuthContext";
import Avatar from "../../assets/img/user-logo.png";
import DFLogo from "../../assets/img/df-logo.png";
import { useHistory } from "react-router-dom";
import { useSnackbar } from "notistack";
import "./index.css";

const NavBar = () => {

  const { user, signOutFromAsgardeo } = useAuth();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const logout = async () => {
    try {
      const logoutResponse = await signOutFromAsgardeo();
      if (logoutResponse) {
        history.replace("/");
      }
    } catch (err) {
      enqueueSnackbar("Logout Failed", {
        variant: 'error',
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },

      });
    }
  }

  return (
    <nav
      className="navbar top-navbar"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="#">
          <img
            src={DFLogo}
            width="112"
            height="28"
            alt="DevFest"
          />
        </a>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">Home</a>
          <a className="navbar-item">Dev Fest Sri Lanka</a>
          <a className="navbar-item">Asgardeo</a>
        </div>

        {user && <div className="navbar-end">
          <a className="navbar-item">Hi {user ? user.displayName.split(" ")[0] : "There"}!</a>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              <span className="is-hidden-tablet is-hidden-desktop">User Preferences</span>
              <figure className="image is-hidden-mobile">
                <img
                  className="is-rounded"
                  src={user ? user.photoURL : Avatar}
                  alt="DevFest"
                />
              </figure>
            </a>
            <div className="navbar-dropdown is-right">
              <a className="navbar-item">
                Profile
              </a>
              <button className="navbar-item sign-out-button" onClick={logout}>
                Sign Out
              </button>
            </div>
          </div>
        </div>}
      </div>
    </nav>
  );
};

export default NavBar;
