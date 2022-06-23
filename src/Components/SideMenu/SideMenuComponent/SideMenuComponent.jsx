import React from "react";
import { Link, NavLink } from "react-router-dom";

// Styles
import classes from "./sideMenuComponent.module.scss";

const SideMenuComponent = (props) => {
  return (
    <div className={classes["sideMenuDiv"]}>
      {props.destination_url ? (
        <NavLink
          to={props.destination_url}
          style={{ textDecoration: "none" }}
          activeClassName={classes["active"]}
          className={classes["navLink"]}
        >
          <div className={classes["sideMenuTitleDiv"]}>
            <p className={classes["sideMenuTitle"]}>{props.boxTitle}</p>
          </div>
        </NavLink>
      ) : (
        <a
          href={props.external_url}
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <div className={classes["sideMenuTitleDiv"]}>
            <p className={classes["sideMenuTitle"]}>{props.boxTitle}</p>
          </div>
        </a>
      )}

      <div className={classes["sideMenuItemsDiv"]}>
        {props.options && (
          <ul className={classes["sideMenuItemsList"]}>
            {props.options.map((option, i) => {
              return (
                <li key={i}>
                  <Link className={classes["sideMenuItem"]} to={option.url}>
                    {option.listItem}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SideMenuComponent;
