import React, { Component } from "react";

import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import login from "../assets/login.svg";

import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import lingua from "../assets/lingua.svg";

import "./Header.css";

export default class components extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-left">
          <img className="logo-image" src={Logo} />
          <ul>
            <li>
              <a href="#">Baixar</a>
            </li>
            <li>
              <a href="#">Nitro</a>
            </li>
            <li>
              <a href="#">Empregos</a>
            </li>
            <li className="dropdown">
              <a className="dev-button" href="#">
                Desenvolvedores
              </a>
              <div className="dropdown-menu">
                <ul>
                  <li>
                    <a href="#">Link 1</a>
                  </li>
                  <li>
                    <a href="#">Link 2</a>
                  </li>
                  <li>
                    <a href="#">Link 3</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">Comunidade</a>
            </li>
            <li>
              <a href="#">Suporte</a>
            </li>
          </ul>
        </div>
        <div className="header-right">
          <ul>
            <li>
              <a href="#">
                <img src={twitter} />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={facebook} />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={instagram} />{" "}
              </a>
            </li>
            <li className="login-button">
              <a href="#"> Entrar </a>
            </li>

            <li>
              <a href="#">
                <img src={lingua} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
