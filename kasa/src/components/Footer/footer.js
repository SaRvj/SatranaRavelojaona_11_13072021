import React, { Component } from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import "./Footer.css";

//Ce composant affiche le "footer" de chaque page
export default class Header extends Component {
  render() {
    return (
      <div className="footer">
        <NavLink to="/">
          <Logo fill="white" className="footer_logo" />
        </NavLink>
        <p className="copyright">© 2020 Kasa. All rights reserved</p>
      </div>
    );
  }
}
