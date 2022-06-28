import React, { useState } from "react";
import { Link } from "react-router-dom";

// Styles
import classes from "./contactForm.module.scss";

// Components

const ContactForm = (props) => {
  const [enteredMessage, setEnteredMessage] = useState("");
  const [enteredSubject, setEnteredSubject] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const isLoggedIn = false;

  const subjectChangeHandler = (event) => {
    setEnteredSubject(event.target.value);
  };

  const messageChangeHandler = (event) => {
    setEnteredMessage(event.target.value);
  };

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const formData = {
      subject: enteredSubject,
      message: enteredMessage,
    };
    console.log(formData);
  };
  return (
    <>
      <h2 className={classes["contactFormMainTitle"]}>{props.mainTitle}</h2>
      <form>
        <fieldset>
          <legend className={classes["contactFormTitle"]}>
            {props.firstTitle}
          </legend>
          <div className={classes["contactFormSubjectDiv"]}>
            <label className={classes["contactFormLabel"]}>Assunto</label>

            <div className={classes["contactFormOptionsDiv"]}>
              {props.choices && (
                <select
                  className={classes["contactFormSelect"]}
                  onChange={subjectChangeHandler}
                >
                  {props.choices.map((choice, i) => {
                    return (
                      <option key={i} value={props.optionValue}>
                        {choice.optionItem}
                      </option>
                    );
                  })}
                </select>
              )}
            </div>
          </div>
        </fieldset>
      </form>
      <form onSubmit={submitHandler}>
        <fieldset>
          <legend className={classes["contactFormTitle"]}>
            Dados de contacto.
          </legend>
          <div>
            {!isLoggedIn && (
              <>
                <div className={classes["contactFormNameDiv"]}>
                  <label
                    className={
                      enteredName.trim().length !== 0
                        ? classes["contactFormLabel"]
                        : classes["contactFormLabelError"]
                    }
                  >
                    Nome
                  </label>

                  <div className={classes["contactFormName"]}>
                    <input
                      className={
                        enteredName.trim().length !== 0
                          ? classes["contactFormInput"]
                          : classes["contactFormInputError"]
                      }
                      name="name"
                      type="text"
                      minLength={2}
                      maxLength={50}
                      onChange={nameChangeHandler}
                    ></input>
                    <span
                      className={
                        enteredName.trim().length !== 0
                          ? classes["errorMessageOk"]
                          : classes["errorMessage"]
                      }
                    >
                      Este campo é obrigatório
                    </span>
                  </div>
                </div>
                <div className={classes["contactFormEmailDiv"]}>
                  <label
                    className={
                      enteredEmail.trim().length !== 0
                        ? classes["contactFormLabel"]
                        : classes["contactFormLabelError"]
                    }
                  >
                    Email
                  </label>
                  <div className={classes["contactFormEmail"]}>
                    <input
                      className={
                        enteredEmail.trim().length !== 0
                          ? classes["contactFormInputSuccess"]
                          : classes["contactFormInputError"]
                      }
                      name="email"
                      type="email"
                      onChange={emailChangeHandler}
                    ></input>
                    <span
                      className={
                        enteredEmail.trim().length !== 0
                          ? classes["errorMessageOk"]
                          : classes["errorMessage"]
                      }
                    >
                      Este campo é obrigatório
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className={classes["contactFormMessagePlusLabelDiv"]}>
            <label className={classes["contactFormLabel"]}>Mensagem</label>
            <div className={classes["contactFormMessageDiv"]}>
              <textarea
                className={classes["contactFormMessage"]}
                rows="6"
                minLength={35}
                maxLength={3000}
                onChange={messageChangeHandler}
              ></textarea>
              <div className={classes["contactFormPrivacyDiv"]}>
                <strong>
                  Os dados recolhidos serão tratados de acordo com a nossa{" "}
                  <Link to="/FAQ">Política de privacidade</Link>.
                </strong>
              </div>
            </div>
          </div>

          <div className={classes["contactFormButtonDiv"]}>
            <button className={classes["contactFormButton"]} type="submit">
              Enviar mensagem
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default ContactForm;
