import React from "react";

// Styles
import classes from "./aboutUs.module.scss";
import aboutUsPic from "../../assets/about-us.png";

// Components

function AboutUs() {
  return (
    <div className={classes["wrapper"]}>
      <div className={classes["row"]}>
        <div className={classes["sideMenuAndPageContentFlex"]}>
          <div className={classes["sideMenuDiv"]}>
            <p>Boas</p>
          </div>
          <div className={classes["pageContentDiv"]}>
            <div className={classes["aboutUsTextDiv"]}>
              <p className={classes["aboutUsText"]}>
                O CustoJusto.pt é um projecto da CustoJusto, Lda, lançado em
                Dezembro de 2008 pelo grupo de media escandinavo Schibsted, e
                que resulta da conversão para o mercado português do site de
                classificados sueco, Blocket.se. Graças ao enorme sucesso do
                Blocket na Suécia, a Schibsted decidiu internacionalizar este
                conceito, lançando sites de classificados em vários mercados,
                como em <a href="www.espanha.pt">Espanha</a> (2005),{" "}
                <a href="www.franca.pt">França</a> (2006),{" "}
                <a href="www.italia.pt">Itália</a> (2007) ou Portugal (2008).
              </p>
              <p className={classes["aboutUsText"]}>
                A partir de 2018, a CustoJusto, Lda passou a ter capital
                maioritariamente nacional mantendo, no entanto, a{" "}
                <a href="www.adevinta.pt">Adevinta</a> (empresa resultante do
                spin-off da Schibsted em Abril de 2019) como sócia e parceira
                estratégica.
              </p>

              <p className={classes["aboutUsText"]}>
                O CustoJusto.pt tem como Missão criar "ligações perfeitas" entre
                compradores e vendedores, num espaço de confiança e seguro e é
                com essa missão em mente que a nossa equipa trabalha, desde o
                Porto, todos os dias.
              </p>
            </div>
            <div className={classes["infoPlusImageDiv"]}>
              <div className={classes["infoDiv"]}>
                <ul className={classes["statsList"]}>
                  <li>
                    <h3 className={classes["statsNumbers"]}> 1 326 052 </h3>
                    <p className={classes["statsText"]}>
                      Anúncios <b>perto de si</b>
                    </p>
                  </li>
                  <li>
                    <h3 className={classes["statsNumbers"]}> 3 931 </h3>
                    <p className={classes["statsText"]}>
                      <b>Contactos</b> efectuados ontem
                    </p>
                  </li>
                  <li>
                    <h3 className={classes["statsNumbers"]}> 294</h3>
                    <p className={classes["statsText"]}>
                      <b>Artigos vendidos </b>ontem
                    </p>
                  </li>
                </ul>
              </div>
              <div className={classes["imageDiv"]}>
                <img
                  className={classes["image"]}
                  src={aboutUsPic}
                  alt="AboutUs"
                ></img>
              </div>
            </div>
            <div className={classes["aboutUsTextDiv"]}>
              <p className={classes["aboutUsText"]}>
                O CustoJusto.pt é um espaço onde pode{" "}
                <a href="custojusto.pt">comprar e vender</a> uma grande
                variedade de coisas. Aqui poderá conseguir um custo justo para o
                que quer comprar, e obter preços justos para o que quer vender.
              </p>

              <p className={classes["aboutUsText"]}>
                O CustoJusto.pt proporciona-lhe uma forma simples, rápida e
                fácil de vender, em qualquer dia da semana, a qualquer hora,
                esteja onde estiver. Nunca antes foi tão fácil comprar ou vender{" "}
                <a href="https://www.custojusto.pt/portugal/imobiliario">
                  casas
                </a>
                ,{" "}
                <a href="https://www.custojusto.pt/portugal/veiculos">carros</a>
                ,{" "}
                <a href="https://www.custojusto.pt/portugal/informatica/telefones-acessorios">
                  telemóveis
                </a>
                ,{" "}
                <a href="https://www.custojusto.pt/portugal/informatica/informatica-acessorios">
                  computadores
                </a>{" "}
                ou qualquer outra coisa. E porque é fácil vender, encontrará
                certamente boas oportunidades para comprar tudo o que precisa.
                No CustoJusto.pt encontra tambêm ofertas de emprego ou serviços.{" "}
              </p>
              <p className={classes["aboutUsText"]}>
                O CustoJusto.pt é um espaço de encontro de vendedores e
                compradores, sem qualquer interferência no processo de
                negociação entre ambas as partes - o negócio é realizado
                directamente entre o comprador e o vendedor, sem comissões ou
                pagamento de valores pela introdução de anúncios: CustoJusto.pt
                - Justamente o que procurava!
              </p>
            </div>
            <div className={`${classes["contactUsDiv"]} ${classes["row"]}`}>
              <div className={classes["moreInfoDiv"]}>
                <hr className={classes["hrcss"]}></hr>

                <h4 className={classes["moreInfo"]}>Mais informações</h4>
              </div>
              <div className={classes["contactUsAll"]}>
                <div className={classes["contactUsLeft"]}>
                  <p className={classes["contactUsText"]}>Custojusto, Lda.</p>
                  <p className={classes["contactUsText"]}>
                    Email: geral@custojusto.pt
                  </p>
                  <p className={classes["contactUsText"]}>NIF: PT 508 791 162</p>
                </div>
                <div className={classes["contactUsRight"]}>
                  <p className={classes["contactUsText"]}>
                    Av. da Boavista, nº3477, 6º sala 602
                  </p>
                  <p className={classes["contactUsText"]}>4100-139 Porto</p>
                  <p className={classes["contactUsText"]}>Portugal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
