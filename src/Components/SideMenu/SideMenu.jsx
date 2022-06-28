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
          { url: "/guide", listItem: "Como utilizar" },
          { url: "/FAQ", listItem: "Perguntas frequentes" },
          { url: "/aboutus", listItem: "Quem somos" },
        ]}
      />

      <SideMenuComponent
        external_url="https://blog.custojusto.pt/"
        boxTitle="Blog"
      />

      <SideMenuComponent
        destination_url={"/howtosection"}
        boxTitle="Compra Segura"
        options={[
          { url: "/howtosendproducts", listItem: "Envio de produtos" },
          { url: "/howtostolenarticles", listItem: "Artigos Roubados" },
          { url: "/howtovehicles", listItem: "Veículos" },
          { url: "/howtobrands", listItem: "Artigos de marca" },
          { url: "/howtosendabroad", listItem: "Envio para o exterior" },
          { url: "/howtotransfermoneyonline", listItem: "Transferências online" },
          { url: "/howtoprotectyourself", listItem: "Para se proteger" },
          { url: "/howtoSMSs", listItem: "SMSs recebidos" },
          { url: "/howtoATMpayments", listItem: "Pagamentos por Multibanco" },
          { url: "/howtoMBWaypayments", listItem: "Pagamentos por MBWay" },
        ]}
      />

      <SideMenuComponent
        destination_url="/contact"
        boxTitle="Contacto"
        options={[
          { url: "/contactformads", listItem: "Problemas com anúncios" },
          { url: "/help", listItem: "Problemas com os serviços" },
          { url: "/contact", listItem: "Contactos a anúncios" },
          { url: "/help", listItem: "Problemas técnicos" },
          { url: "/contact", listItem: "Sugestões" },
          { url: "/help", listItem: "Outros" },
          { url: "/contact", listItem: "Imprensa e Publicidade" },
          { url: "/help", listItem: "Versão mobile" },
          { url: "/help", listItem: "Dificuldade de acesso aos telefones" },
          { url: "/contact", listItem: "Problemas com a conta de utilizador" },
        ]}
      />

      <SideMenuComponent
        destination_url="/rules"
        boxTitle="Regras e Privacidade"
        options={[
          { url: "/rules", listItem: "Regras" },
          { url: "/contact", listItem: "Privacidade" },
          { url: "/contact", listItem: "Copyright" },
        ]}
      />

      <SideMenuComponent
        destination_url="/testimonies"
        boxTitle="Testemunhos"
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
