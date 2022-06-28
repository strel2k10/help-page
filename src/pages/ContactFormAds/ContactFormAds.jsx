import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "../../Components/ContactForm/ContactFormComponent/ContactForm";
import HelpPage from "../../Components/HelpPage/HelpPage";

// Styles
import classes from "./contactFormAds.module.scss";

// Components

function ContactFormAds() {
  return (
    <HelpPage>
      <ContactForm
        mainTitle="Problemas com anúncios"
        firstTitle="Por favor não use este formulário para inserir anúncios."
        choices={[
          { optionValue: "", optionItem: "Escolha o assunto" },
          { optionValue: "1", optionItem: "Não consigo inserir o meu anúncio" },
          {
            optionValue: "2",
            optionItem: "O meu anúncio foi recusado por duplicado",
          },
          { optionValue: "3", optionItem: "O meu anúncio foi recusado" },
        ]}
      />
    </HelpPage>
  );
}

export default ContactFormAds;
