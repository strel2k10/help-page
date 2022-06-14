import React from "react";

// Styles
import classes from "./advancedSearch.module.scss";

// Components

const AdvancedSearch = (props) => {
  return (
    <div className={classes["wrapper"]}>
      <div className={classes["searchAdsTitle"]}>
        <h2>Pesquisa avançada</h2>
      </div>

      <h4 className={classes["otherTitles"]}>
        Encontre mais artigos utilizando o caracter *
      </h4>

      <p className={classes["searchAdsText"]}>
        Escreva{" "}
        <a href="https://www.custojusto.pt/portugal/q/%2Acadeira%2A">
          *cadeira*
        </a>{" "}
        em vez de cadeira, para visualizar todos os artigos que contêm a palavra
        cadeira. Utilize o caracter * se não tem a certeza de como se escreve a
        palavra. Não pode utilizar o caracter * no meio de uma palavra.
      </p>

      <h4 className={classes["otherTitles"]}>
        Encontre ainda mais artigos, como o operador OR
      </h4>

      <div className={classes["fillFormDiv"]}>
        <div className={classes["fillFormDivText"]}>
          <p className={classes["searchAdsText"]}>
            Escreva{" "}
            <a href="https://www.custojusto.pt/portugal/q/honda+or+suzuki">
              Honda OR Suzuki
            </a>{" "}
            para visualizar todos os anúncios referentes a estas duas marcas (ou
            quaisquer outras).
          </p>
        </div>
      </div>

      <h4 className={classes["otherTitles"]}>
        Evite listas desnecessárias, utilizando o operador NOT
      </h4>

      <div className={classes["fillFormDiv"]}>
        <div className={classes["fillFormDivText"]}>
          <p className={classes["searchAdsText"]}>
            Escreva{" "}
            <a href="https://www.custojusto.pt/portugal/q/ford+not+focus">
              Ford NOT Focus
            </a>{" "}
            para visualizar todos os anúncios de Ford excluindo os modelos
            Focus.
          </p>
        </div>
      </div>

      <h4 className={classes["otherTitles"]}>
        Encontre os termos exactos com o caracter "
      </h4>

      <div className={classes["fillFormDiv"]}>
        <div className={classes["fillFormDivText"]}>
          <p className={classes["searchAdsText"]}>
            Escreva{" "}
            <a href="https://www.custojusto.pt/portugal/q/%22ford+focus%22">
              "Ford Focus"
            </a>{" "}
            para ver unicamente anúncios de Ford Focus e não os anúncios que
            contenham Ford e Focus, como por exemplo em anúncios de pneus e
            jantes.
          </p>
        </div>
      </div>

      <h4 className={classes["otherTitles"]}>Combinar</h4>

      <div className={classes["fillFormDiv"]}>
        <div className={classes["fillFormDivText"]}>
          <p className={classes["searchAdsText"]}>
            Escreva{" "}
            <a href="https://www.custojusto.pt/portugal/q/yamaha+xt%2a+250+or+535+not+1400+not+125">
              Yamaha XT* 250 OR 535 NOT 1400 NOT 125
            </a>{" "}
            para ver todos os anúncios de Yamaha XT 250 ou 535, mas não os
            anúncios de 1400 e 125.
          </p>
        </div>
      </div>

      <h4 className={classes["otherTitles"]}>Observações</h4>

      <div className={classes["fillFormDiv"]}>
        <div className={classes["fillFormDivText"]}>
          <ul>
            <li className={classes["searchAdsText"]}>
              A utilização de letras maiúsculas ou minúsculas (excluindo os
              operadores) não tem influência no resultado da pesquisa.
            </li>
            <li className={classes["searchAdsText"]}>
              Qualquer termo de pesquisa deve incluir pelo menos dois
              caracteres; se utilizar o caracter *, deverá utilizar pelo menos
              três caracteres.
            </li>
            <li className={classes["searchAdsText"]}>
              Qualquer termo de pesquisa pode incluir os caracteres de A-Z, 0-9,
              o caracter & , e o caracter / . Qualquer outro caracter será
              interpretado como um espaço.
            </li>
            <li className={classes["searchAdsText"]}>
              Alguns apóstrofes e caracteres similares são automaticamente
              excluídos; no entanto, o motor de pesquisa interpreta "ã" como
              "a", e "ê" como "e", por exemplo.
            </li>
            <li className={classes["searchAdsText"]}>
              Algumas palavras comuns são ignoradas pelo motor de pesquisa. Se,
              por exemplo, procurar a palavra 'com', não obterá nenhum resultado
              para a sua pesquisa.
            </li>
            <li className={classes["searchAdsText"]}>
              Termos de pesquisa que não constem dos títulos dos anúncios ou dos
              textos dos anúncios, não obterão quaisquer resultados de pesquisa.
            </li>
            <li className={classes["searchAdsText"]}>
              Não pode substituir o operador NOT por um sinal de subtracção ( -
              ) antes do termo que procura, como por exemplo,{" "}
              <a href="https://www.custojusto.pt/portugal/q/yamaha+xt+250+-1400">
                Yamaha XT 250 -1400
              </a>
              .
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSearch;
