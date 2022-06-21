import React from "react";
import { useRouteMatch } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

// Styles
import classes from "./sideMenu.module.scss";

function SideMenu() {
  let { path, url } = useRouteMatch();

  return (
    <div className={classes["wrapper"]}>
      <div className={classes["sideMenuAndPageContentFlex"]}>
        <div className={classes["sideMenuDiv"]}>
          <NavLink
            to="/sidemenutemp/ajuda"
            style={{ textDecoration: "none" }}
            activeStyle= {{ fontSize: "30px" }}
          >
            <div className={classes["sideMenuTitleDiv"]}>
              <p className={classes["sideMenuTitle"]}>Ajuda</p>
            </div>
          </NavLink>
          <div className={classes["sideMenuItemsDiv"]}>
            <ul className={classes["sideMenuItemsList"]}>
              <li>
                <a className={classes["sideMenuItem"]} href="/help">
                  Ajuda
                </a>
              </li>
              <li>
                <a className={classes["sideMenuItem"]} href="/help">
                  Como utilizar
                </a>
              </li>
              <li>
                <a className={classes["sideMenuItem"]} href="/help">
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a className={classes["sideMenuItem"]} href="/help">
                  Quem somos
                </a>
              </li>
            </ul>
          </div>

          <Link to="/Blog" style={{ textDecoration: "none" }}>
            <div className={classes["sideMenuTitleDiv"]}>
              <p className={classes["sideMenuTitle"]}>Blog</p>
            </div>
          </Link>

          <Link to="/ajuda-compra" style={{ textDecoration: "none" }}>
            <div className={classes["sideMenuTitleDiv"]}>
              <p className={classes["sideMenuTitle"]}>Compra Segura</p>
            </div>
          </Link>

          <div className={classes["sideMenuItemsDiv"]}>
            <ul>
              <li>
                <a className={classes["sideMenuItem"]} href="/help">
                  Envio de produtos
                </a>
              </li>
              <li>
                <a className={classes["sideMenuItem"]} href="/help">
                  Artigos roubados
                </a>
              </li>
              <li>
                <a className={classes["sideMenuItem"]} href="/help">
                  Veículos
                </a>
              </li>
              <li>
                <a className={classes["sideMenuItem"]} href="/help">
                  Artigos de marca
                </a>
              </li>
              <li>
                <a className={classes["sideMenuItem"]} href="/help">
                  Envio para o exterior
                </a>
              </li>
              <li>
                <a className={classes["sideMenuItem"]} href="/help">
                  Transferências online
                </a>
              </li>
              <li>
                <a className={classes["sideMenuItem"]} href="/help">
                  Para se proteger
                </a>
              </li>
              <li>
                <a className={classes["sideMenuItem"]} href="/help">
                  SMSs recebidos
                </a>
              </li>
              <li>
                <a className={classes["sideMenuItem"]} href="/help">
                  Pagamentos por Multibanco
                </a>
              </li>
              <li>
                <a className={classes["sideMenuItem"]} href="/help">
                  Pagamentos por MBWay
                </a>
              </li>
            </ul>
          </div>

          <Link to="/Blog" style={{ textDecoration: "none" }}>
            <div className={classes["sideMenuTitleDiv"]}>
              <p className={classes["sideMenuTitle"]}>Contacto</p>
            </div>
          </Link>

          <Link to="/Blog" style={{ textDecoration: "none" }}>
            <div className={classes["sideMenuTitleDiv"]}>
              <p className={classes["sideMenuTitle"]}>Regras e privacidade</p>
            </div>
          </Link>

          <Link to="/Blog" style={{ textDecoration: "none" }}>
            <div className={classes["sideMenuTitleDiv"]}>
              <p className={classes["sideMenuTitle"]}>Testemunhos</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
