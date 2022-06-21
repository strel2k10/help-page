import React from "react";
import { NavLink } from "react-router-dom";

// Styles
import classes from "./sideMenuComponent.module.scss";

const SideMenuComponent = (props) => {
  return (
    <div className={classes["wrapper"]}>
      <div className={classes["sideMenuAndPageContentFlex"]}>
        <div className={classes["sideMenuDiv"]}>
          <NavLink
            to={props.destination_url}
            style={{ textDecoration: "none" }}
          >
            <div className={classes["sideMenuTitleDiv"]}>
              <p className={classes["sideMenuTitle"]}>{props.boxTitle}</p>
            </div>
          </NavLink>

          <div className={classes["sideMenuItemsDiv"]}>
            <ul className={classes["sideMenuItemsList"]}>
              {props.options.map((option, i) => {
                return (
                  <li key={i}>
                    <a className={classes["sideMenuItem"]} href={option.url}>
                      {option.listItem}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenuComponent;
