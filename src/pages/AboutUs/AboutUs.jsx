import React, { Fragment } from "react";

// Styles
import classes from "./aboutUs.module.scss";
import aboutUsPic from "../../assets/about-us.png";

// Components

function AboutUs() {
  return (
    <Fragment>
      <div className={classes["wrapper"]}>
        <p className={classes["aboutUsText"]}>
          O CustoJusto.pt é um projecto da CustoJusto, Lda, lançado em Dezembro
          de 2008 pelo grupo de media escandinavo Schibsted, e que resulta da
          conversão para o mercado português do site de classificados sueco,
          Blocket.se. Graças ao enorme sucesso do Blocket na Suécia, a Schibsted
          decidiu internacionalizar este conceito, lançando sites de
          classificados em vários mercados, como em{" "}
          <a href="www.espanha.pt">Espanha</a> (2005),{" "}
          <a href="www.franca.pt">França</a> (2006),{" "}
          <a href="www.italia.pt">Itália</a> (2007) ou Portugal (2008).
        </p>
        <p className={classes["aboutUsText"]}>
          A partir de 2018, a CustoJusto, Lda passou a ter capital
          maioritariamente nacional mantendo, no entanto, a{" "}
          <a href="www.adevinta.pt">Adevinta</a>
          (empresa resultante do spin-off da Schibsted em Abril de 2019) como
          sócia e parceira estratégica.
        </p>

        <p className={classes["aboutUsText"]}>
          O CustoJusto.pt tem como Missão criar "ligações perfeitas" entre
          compradores e vendedores, num espaço de confiança e seguro e é com
          essa missão em mente que a nossa equipa trabalha, desde o Porto, todos
          os dias.
        </p>
        <div className={classes["infoPlusImageDiv"]}>
          <div className={classes["infoDiv"]}>
            <h3> 1 332 627 </h3>
            <p>
              Anúncios <b>perto de si</b>
            </p>
            <h3> 3 825 </h3>
            <p>
              <b>Contactos</b> efectuados ontem
            </p>
            <h3> 3 825</h3>
            <p>
              {" "}
              <b>Artigos vendidos </b>ontem
            </p>
          </div>
          <div className={classes["imageDiv"]}>
            <img src={aboutUsPic} alt="AboutUs"></img>
          </div>
        </div>
        <p className={classes["aboutUsText"]}>
          O CustoJusto.pt é um espaço onde pode{" "}
          <a href="custojusto.pt">comprar e vender</a> uma grande variedade de
          coisas. Aqui poderá conseguir um custo justo para o que quer comprar,
          e obter preços justos para o que quer vender.
        </p>

        <p className={classes["aboutUsText"]}>
          O CustoJusto.pt proporciona-lhe uma forma simples, rápida e fácil de
          vender, em qualquer dia da semana, a qualquer hora, esteja onde
          estiver. Nunca antes foi tão fácil comprar ou vender{" "}
          <a href="https://www.custojusto.pt/portugal/imobiliario">casas</a>,{" "}
          <a href="https://www.custojusto.pt/portugal/veiculos">carros</a>,{" "}
          <a href="https://www.custojusto.pt/portugal/informatica/telefones-acessorios">
            telemóveis
          </a>
          ,{" "}
          <a href="https://www.custojusto.pt/portugal/informatica/informatica-acessorios">
            computadores
          </a>{" "}
          ou qualquer outra coisa. E porque é fácil vender, encontrará
          certamente boas oportunidades para comprar tudo o que precisa. No
          CustoJusto.pt encontra tambêm ofertas de emprego ou serviços.{" "}
        </p>
        <p className={classes["aboutUsText"]}>
          O CustoJusto.pt é um espaço de encontro de vendedores e compradores,
          sem qualquer interferência no processo de negociação entre ambas as
          partes - o negócio é realizado directamente entre o comprador e o
          vendedor, sem comissões ou pagamento de valores pela introdução de
          anúncios: CustoJusto.pt - Justamente o que procurava!
        </p>

        <div>
          <hr className={classes["hrcss"]}></hr>

          <h4 className={classes["moreInfo"]}>Mais informações</h4>
          <div className={classes["contactUsAll"]}>
            <div className={classes["contactUsLeft"]}>
              <p className={classes["aboutUsText"]}>Custojusto, Lda.</p>
              <p className={classes["aboutUsText"]}>
                Email: geral@custojusto.pt
              </p>
              <p className={classes["aboutUsText"]}>NIF: PT 508 791 162</p>
            </div>
            <div className={classes["contactUsRight"]}>
              <p className={classes["aboutUsText"]}>
                Av. da Boavista, nº3477, 6º sala 602
              </p>
              <p className={classes["aboutUsText"]}>4100-139 Porto</p>
              <p className={classes["aboutUsText"]}>Portugal</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default AboutUs;
