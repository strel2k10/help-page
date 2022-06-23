import React from "react";
import { useRouteMatch } from "react-router-dom";

// Styles
import classes from "./sideMenu.module.scss";
import SideMenuComponent from "./SideMenuComponent/SideMenuComponent";

function SideMenu() {
  let { path, url } = useRouteMatch();

  return (
    <div className={classes["wrapper"]}>
      <SideMenuComponent
        destination_url="/help"
        boxTitle="Ajuda"
        options={[
          { url: "/help", listItem: "Ajuda" },
          { url: "/help/aboutus", listItem: "Quem somos" },
        ]}
      />

      <SideMenuComponent
        external_url="https://blog.custojusto.pt/"
        boxTitle="Blog"
      />

      <SideMenuComponent
        destination_url={"/howtosection"}
        boxTitle="Compra Segura"
        options={[{ url: "/howtosection", listItem: "Envio de produtos" }]}
      />

      <SideMenuComponent
        destination_url="/contact"
        boxTitle="Contacto"
        options={[
          { url: "/contact", listItem: "Problemas com anúncios" },
          { url: "/help", listItem: "Ajuda" },
        ]}
      />

      <SideMenuComponent
        destination_url="/rules"
        boxTitle="Regras e Privacidade"
        options={[{ url: "/rules", listItem: ["Regras", "Privacidade"] }]}
      />

      <SideMenuComponent
        destination_url="/testimonies"
        boxTitle="Testemunhos"
        options={[{ url: "/testimonies", listItem: "isto devia estar vazio" }]}
      />

      {/* <Switch>
      <Route exact path={`${url}`} render={() => <HelpV2 />} />
      <Route exact path={`${url}/faq`} render={() => <FAQ />} />
      <Route exact path={`${url}/aboutus`} render={() => <AboutUs />} />
      <Route
        exact
        path={`${url}/howtosection`}
        render={() => <HowToSection />}
      />
    </Switch> */}
    </div>
  );
}

export default SideMenu;
