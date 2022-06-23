import React from "react";

// Styles
import classes from "./FAQ.module.scss";

// Components

import QuestionBox from "./Components/QuestionBox/QuestionBox";
import { Accordion } from "react-bootstrap";

// Images
import faqAdIdImage from "../../assets/faq_ad_id.png";
import faqStarImage from "../../assets/icon_star.png";
import HelpPage from "../../Components/HelpPage/HelpPage";

const FAQ = (props) => {
  return (
    <HelpPage>
      <div className={classes["faqPostAdsTitleDiv"]}>
        <span className={classes["faqPostAdsTitle"]}>Colocar anúncios</span>
      </div>

      <div className={classes["faqAccordionDiv"]}>
        <Accordion className={classes["accordion"]} defaultActiveKey="0">
          {/*First Accordion*/}
          <div className={classes["faqAccordionDivPostAds"]}>
            <QuestionBox eventKey="0" questionTitle="Como publicar um anúncio?">
              <p className={classes["accordionBody"]}>
                Pode inserir anúncios gratuitamente no CustoJusto.pt, através do
                link “
                <a href="https://www.custojusto.pt/ai/form/0">
                  Inserir anúncio grátis
                </a>
                ", disponível na página inicial do nosso site, e também no
                cabeçalho de todas as páginas do CustoJusto.pt (“
                <a href="https://www.custojusto.pt/ai/form/1">
                  insira anúncios gratuitamente
                </a>
                ”).
              </p>
              <p className={classes["accordionBody"]}>
                Basta preencher os campos relevantes e obrigatórios das etapas
                “O seu anúncio” e “Dados de Contacto”, conforme as instruções
                apresentadas, adicionar as imagens pretendidas (até doze para as
                categorias de Imobiliária e Veículos, e até três para as
                restantes categorias), se desejar.{" "}
              </p>
              <p className={classes["accordionBody"]}>
                {" "}
                Lembre-se que a clareza da informação que fornecer afectará em
                muito a recepção do seu anúncio por parte dos visitantes!
                Anúncios com <b>uma ou mais fotos</b> são, por exemplo, 7 vezes
                mais visitados do que aqueles sem fotos.
              </p>
              <p className={classes["accordionBody"]}>
                Preencha os seus dados na etapa “Dados de contacto”: caso já
                tenha conta, irá fazer login para que os dados sejam
                automaticamente preenchidos. Caso ainda não possua conta,
                ser-lhe-á pedido que crie uma conta, preenchendo os campos Nome,
                número de telefone, localização (código postal, Distrito,
                Concelho e Freguesia). Para que o anúncio seja publicado, deverá
                validar o seu email, clicando no link que consta no email de
                activação de conta.{" "}
              </p>
              <p className={classes["accordionBody"]}>
                Seleccionar a opção “Inserir anúncio”. Nesta altura o seu
                anúncio foi inserido e aguarda validação da conta (caso tenha
                criado uma conta nova) ou revisão pela nossa equipa editorial.
                Caso não pretenda aderir a nenhum serviço pago, pode inserir
                novo anúncio ou fazer uma pesquisa pelos anúncios activos no
                site.
              </p>
              <p className={classes["accordionBody"]}>
                {" "}
                Após inserir o anúncio, este será revisto pela nossa equipa de
                revisão, e se estiver de acordo com as regras de utilização do
                CustoJusto.pt, será publicado num prazo médio de 3 horas.
              </p>
            </QuestionBox>

            <QuestionBox
              eventKey="1"
              questionTitle="Quanto custa publicar um anúncio no CustoJusto.pt?"
            >
              <p className={classes["accordionBody"]}>
                {" "}
                No CustoJusto.pt os{" "}
                <a href="https://www.custojusto.pt/">anúncios são grátis</a>, ou
                seja, não precisa pagar para{" "}
                <a href="https://www.custojusto.pt/ai/form/2">
                  inserir anúncios{" "}
                </a>{" "}
                nem paga qualquer comissão pela venda do seu artigo.
              </p>
            </QuestionBox>

            <QuestionBox
              eventKey="2"
              questionTitle="Qual é a validade de um anúncio?"
            >
              {" "}
              <p className={classes["accordionBody"]}>
                Se não o apagar antes, o seu anúncio ficará publicado por um
                período de 60 dias. Findo este período, poderá ser renovado por
                um igual período de tempo.
              </p>
            </QuestionBox>

            <QuestionBox
              eventKey="3"
              questionTitle="Em que região publico o meu anúncio?"
            >
              {" "}
              <p className={classes["accordionBody"]}>
                {" "}
                Deverá publicar o seu anúncio na região em que o seu produto se
                encontra localizado.
              </p>
            </QuestionBox>

            <QuestionBox
              eventKey="4"
              questionTitle="O que devo escrever no texto do anúncio?"
            >
              <p className={classes["accordionBody"]}>
                Deve descrever detalhadamente as características principais do
                produto ou serviço, de forma a que os visitantes o encontrem com
                mais facilidade. Evite copiar e colar descrições muito longas ou
                listas de características; além de confuso para os visitantes,
                pode estar a copiar texto com copyright.{" "}
              </p>
              <p>
                <strong>Sugerimos que:</strong>{" "}
              </p>
              <ul>
                <li className={classes["accordionBody"]}>
                  Detalhe as condições do produto.
                </li>
                <li className={classes["accordionBody"]}>
                  Detalhe o modo pelo qual prefere ser contactado.
                </li>
                <li className={classes["accordionBody"]}>
                  Local onde os interessados poderão ver o produto e o estado do
                  mesmo.
                </li>
                <li className={classes["accordionBody"]}>
                  Detalhe as condições de venda ou compra.
                </li>
                <li className={classes["accordionBody"]}>
                  Não faça uso excessivo de maiúsculas.
                </li>
                <li className={classes["accordionBody"]}>
                  Não coloque links direccionados para outros websites.
                </li>
                <li className={classes["accordionBody"]}>
                  {" "}
                  Não coloque termos de pesquisa ou palavras-chave.
                </li>
              </ul>
            </QuestionBox>

            <QuestionBox
              eventKey="5"
              questionTitle="Devo colocar o meu email no texto do anúncio?"
            >
              <p className={classes["accordionBody"]}>
                Para evitar que seja alvo de Spam não colocamos o seu email no
                texto do anúncio, pelo que também não aconselhamos que o faça.
                Os visitantes do site podem contactá-lo facilmente através do
                formulário de contacto, disponível na página do anúncio. Todos
                os contactos serão enviados para a sua caixa de email sem que o
                interessado tenha conhecimento do seu endereço de email.
              </p>
            </QuestionBox>

            <QuestionBox
              eventKey="6"
              questionTitle="Como colocar fotografias nos meus anúncios?"
            >
              <p className={classes["accordionBody"]}>
                No formulário “Inserir anúncio”, junto a “Inserir Imagens”
                carregue na opção “Inserir”. Procure no seu computador a imagem
                que deseja usar e carregue em “Abrir”. Nas categorias de
                Imobiliária e de Veículos, poderá adicionar mais cinco imagens,
                podendo nas restantes categorias adicionar mais duas imagens,
                bastando para isso repetir o processo nas restantes opções
                “Inserir”.
              </p>
              <p className={classes["accordionBody"]}>
                {" "}
                As imagens deverão ser nos formatos GIF, BMP, PNG ou JPEG.
              </p>
            </QuestionBox>

            <QuestionBox
              eventKey="7"
              questionTitle="Posso colocar código HTML no meu anúncio?"
            >
              <p className={classes["accordionBody"]}>
                Não, tal não é permitido. Qualquer código HTML será apagado do
                anúncio.
              </p>
            </QuestionBox>

            <QuestionBox
              eventKey="8"
              questionTitle="Tenho de criar registo para utilizar o CustoJusto.pt?"
            >
              <p className={classes["accordionBody"]}>
                Precisa de ter uma conta activa para colocar anúncios. Os únicos
                dados pessoais que requisitamos são os que consideramos
                indispensáveis à introdução do anúncio.
              </p>{" "}
              <p className={classes["accordionBody"]}>
                Não precisa de ter conta no CustoJusto para consultar e
                responder a anúncios. No entanto, estando com o login efectuado,
                já não terá de preencher os dados (nome, email ou telefone)
                sempre que for responder a um anúncio.
              </p>
            </QuestionBox>

            <QuestionBox
              eventKey="9"
              questionTitle="Como faço para confirmar um anúncio?"
            >
              <p className={classes["accordionBody"]}>
                Já não é necessário confirmar o anúncio, mas deve assegurar-se
                de que preenche correctamente o seu endereço de email, já que
                não poderá alterá-lo posteriormente. O seu anúncio será revisto
                pela nossa equipa de revisão após ter sido inserido no nosso
                sistema.
              </p>
            </QuestionBox>

            <QuestionBox
              eventKey="10"
              questionTitle="Não recebi nenhum email! O que fazer?"
            >
              <p className={classes["accordionBody"]}>
                Algumas vezes, os programas de email podem reconhecer
                erradamente algumas mensagens como email não solicitado (Spam).
                Se não recebeu um email nosso, pedimos o favor de verificar na
                caixa de Spam (ou equivalente) do seu endereço de email.
              </p>{" "}
              <p className={classes["accordionBody"]}>
                Caso não consiga encontrar, nem na pasta de entrada nem na pasta
                de Spam, sugerimos que nos contacte de modo a que possamos
                analisar a situação. Também é possível que tenha colocado o
                endereço de email errado na introdução do anúncio. Se for este o
                caso, terá de introduzir novamente o anúncio, eliminando o
                anúncio anterior."
              </p>
            </QuestionBox>

            <QuestionBox
              eventKey="11"
              questionTitle="Por que pedem o meu NIPC?"
            >
              {" "}
              <p className={classes["accordionBody"]}>
                Nos anúncios de empresas é solicitado o número de contribuinte,
                para ajudar a <b>prevenir situações de burlas</b>. Estes dados
                servem unicamente para certificação de que é um profissional, de
                modo a que os utilizadores sintam uma maior credibilidade. Não é
                cobrado qualquer valor.
              </p>
            </QuestionBox>

            <QuestionBox
              eventKey="12"
              questionTitle="Como imprimir o meu anúncio?"
            >
              <p className={classes["accordionBody"]}>
                Pode facilmente imprimir um <i>flyer</i> do seu anúncio, ou de
                outro qualquer. Basta clicar em <b>Imprimir anúncio</b>, na
                própria página do anúncio. É necessário ter instalado o Adobe{" "}
                <a href="https://www.adobe.com/acrobat/pdf-reader.html">
                  Acrobat Reader
                </a>{" "}
                para visualizar correctamente o <i>flyer</i>.
              </p>
            </QuestionBox>
          </div>
          <div className={classes["faqManageMyAdsTitleDiv"]}>
            <span className={classes["faqManageMyAdsTitle"]}>
              Gerir os meus anúncios
            </span>
          </div>
          {/*Second Accordion*/}
          <div className={classes["faqAccordionDivManageMyAds"]}>
            <QuestionBox
              eventKey="13"
              questionTitle="Como faço para localizar o meu anúncio?"
            >
              <p className={classes["accordionBody"]}>
                Na sua área pessoal, na secção (“Meus anúncios”), encontra todos
                os seus anúncios publicados no CustoJusto.
              </p>
            </QuestionBox>

            <QuestionBox eventKey="14" questionTitle="Esqueci-me da password!">
              <p className={classes["accordionBody"]}>
                Caso não se recorde da sua password, seleccione a opção “não tem
                a password?”, insira o endereço de email através do qual o seu
                anúncio foi inserido e faça “Enviar”. Receberá na sua caixa de
                email um link através do qual poderá proceder à edição do seu
                anúncio.
              </p>
            </QuestionBox>

            <QuestionBox
              eventKey="15"
              questionTitle="Como posso alterar o meu anúncio?"
            >
              <p className={classes["accordionBody"]}>
                Para alterar o seu anúncio, clique no link Modificar na página
                de visualização do seu anúncio e insira a sua password. Efectue
                as alterações que pretende e ao finalizar as suas alterações
                serão revistas e o seu anúncio será actualizado.
              </p>
            </QuestionBox>

            <QuestionBox
              eventKey="16"
              questionTitle="Como faço para eleminar o meu anúncio?"
            >
              <p className={classes["accordionBody"]}>
                Para eliminar o seu anúncio, seleccione a opção
                “Modificar/Eliminar” situada por baixo do seu anúncio na página
                visualização do mesmo. No fim da página na secção “Gerir o seu
                anúncio”, clique na opção “Eliminar”. Seleccione o motivo,
                insira a sua password e carregue em “Continuar”.
              </p>
              <p className={classes["accordionBody"]}>
                Caso não se recorde da sua password, seleccione a opção “não tem
                a password?”, insira o endereço de email através do qual o seu
                anúncio foi inserido e faça “Enviar”. Receberá na sua caixa de
                email um link através do qual poderá proceder à eliminação do
                seu anúncio.
              </p>
            </QuestionBox>

            <QuestionBox
              eventKey="17"
              questionTitle="Como posso colocar o meu anúncio no topo da lista?"
            >
              <p className={classes["accordionBody"]}>
                Através da opção “Subir”, poderá colocar o seu anúncio
                imediatamente e de forma automática no topo da lista de
                resultados, como se tivesse acabado de ser publicado.
              </p>
              <p className={classes["accordionBody"]}>
                Para colocar o seu anúncio de novo no topo da lista, entre na
                página de visualização do seu anúncio e clique em “Subir”.
              </p>
              <p className={classes["accordionBody"]}>
                Seleccione a opção “Subir”, escolha o método de pagamento
                (multibanco, cartão de crédito, SMS ou telefone) e clique em “
                <b>Adquirir serviço</b>”.
              </p>
              <p className={classes["accordionBody"]}>
                {" "}
                Nota: O preço deste serviço varia consoante a forma de pagamento
                seleccionada, 2 € (IVA incluído) para pagamentos multibanco ou
                cartão de crédito ou 2.46 € (IVA incluído) para pagamentos por
                SMS ou telefone fixo.
              </p>
            </QuestionBox>

            <QuestionBox eventKey="18" questionTitle="Como funciona o Subir 7?">
              <p className={classes["accordionBody"]}>
                Veja as condições{" "}
                <a href="https://www.custojusto.pt/ajuda-rules?section=regra#service-weekly-bump">
                  aqui
                </a>
                .
              </p>
            </QuestionBox>

            <QuestionBox
              eventKey="19"
              questionTitle='Como colocar o anúncio na "Montra"?'
            >
              <p className={classes["accordionBody"]}>
                Veja as condições{" "}
                <a href="https://www.custojusto.pt/ajuda-rules?section=regra#service-gallery">
                  aqui
                </a>
                .
              </p>
            </QuestionBox>

            <QuestionBox
              eventKey="20"
              questionTitle='Como adicionar o serviço "Urgente" ao meu anúncio?'
            >
              <p className={classes["accordionBody"]}>
                Veja as condições{" "}
                <a href="https://www.custojusto.pt/ajuda-rules?section=regra#service-urgent">
                  aqui
                </a>
                .
              </p>
            </QuestionBox>

            <QuestionBox
              eventKey="21"
              questionTitle="Como faço para comprar os vários serviços em simultâneo para o mesmo anúncio?"
            >
              <p className={classes["accordionBody"]}>
                Enquanto o seu anúncio estiver online, pode a qualquer momento
                comprar as várias opções para destacar o seu anúncio.
              </p>

              <p className={classes["accordionBody"]}>
                Pode comprar os vários serviços em simultâneo no momento em que
                finaliza o processo de colocação do anúncio online ou acedendo à
                selecção de qualquer um dos serviços “Urgente!”, “Subir anúncio”
                ou “Montra” situada por baixo do seu anúncio na página
                visualização do mesmo. De seguida, seleccione os serviços
                pretendidos e escolha o método de pagamento.
              </p>
            </QuestionBox>

            <QuestionBox
              eventKey="22"
              questionTitle="Por que o meu anúncio continua visível após ter sido eliminado?"
            >
              <p className={classes["accordionBody"]}>
                São necessários alguns minutos para que o seu anúncio seja
                eliminado no sistema.
              </p>

              <p className={classes["accordionBody"]}>
                Se após 15 minutos continuar a ver o seu anúncio online, é
                provável que a página do seu anúncio esteja mantida na cache do
                seu browser. Sugerimos que faça refresh ao seu browser premindo
                a tecla “F5”.
              </p>
            </QuestionBox>

            <QuestionBox
              eventKey="23"
              questionTitle="O que devo escrever no texto do anúncio?"
            >
              <ul>
                <li className={classes["accordionBody"]}>
                  <b>Subir</b> - 2 € (IVA incluído)
                </li>
                <li className={classes["accordionBody"]}>
                  <b>Subir 7</b> - 6 € (IVA incluído)
                </li>
                <li className={classes["accordionBody"]}>
                  <b>Montra 7 dias</b> - 10 € (IVA incluído)
                </li>
                <li className={classes["accordionBody"]}>
                  <b>Montra 30 dias</b> - 30 € (IVA incluído)
                </li>
                <li className={classes["accordionBody"]}>
                  <b>Urgente</b> - 3 € (IVA incluído)
                </li>
              </ul>
            </QuestionBox>
          </div>
          <div className={classes["faqManageMyAdsTitleDiv"]}>
            <span className={classes["faqManageMyAdsTitle"]}>
              Consultar anúncios
            </span>
          </div>
          {/*Third Accordion*/}
          <div className={classes["faqAccordionDivConsultMyAds"]}>
            <QuestionBox
              eventKey="24"
              questionTitle="Como pesquisar um anúncio?"
            >
              <p className={classes["accordionBody"]}>
                É muito simples pesquisar no CustoJusto.pt! Deverá começar por
                escolher a região onde pretende fazer a pesquisa. Se assim o
                pretender, pode filtrar por uma determinada categoria de produto
                ou serviço.
              </p>
              <p className={classes["accordionBody"]}>
                Por exemplo: “
                <a href="https://www.custojusto.pt/lisboa/lisboa/imobiliario/apartamentos-venda">
                  Apartamentos à venda em Lisboa
                </a>
                ": escolha a região de{" "}
                <a href="https://www.custojusto.pt/lisboa">Lisboa</a> na{" "}
                <a href="https://www.custojusto.pt">página principal</a>, e
                posteriormente a categoria “Apartamentos, Quartos & Garagens” e
                clique “Ok”.
              </p>

              <p className={classes["accordionBody"]}>
                Pode ainda definir algumas palavras-chave para limitar a
                pesquisa a essas palavras, como por exemplo: “
                <a href="https://www.custojusto.pt/lisboa/imobiliario/apartamentos-venda?ros=5">
                  T2 em Lisboa
                </a>
                ”, “
                <a href=" https://www.custojusto.pt/lisboa/lisboa/imobiliario/moradias/q/piscina">
                  casa com piscina
                </a>
                ” (seleccionando categoria Moradias) ou “
                <a href="https://www.custojusto.pt/lisboa/lisboa/imobiliario/apartamentos-venda/q/terra%e7o">
                  apartamento com terraço
                </a>
                ”.
              </p>
              <p className={classes["accordionBody"]}>
                Poderá optar por diversas opções de filtros na sua pesquisa
                mediante a categoria. Para uma informação mais pormenorizada
                consulte a{" "}
                <a href="https://www.custojusto.pt/ajuda?section=tutorial&subsection=avancada">
                  ajuda para pesquisa
                </a>
                .
              </p>
            </QuestionBox>

            <QuestionBox
              eventKey="25"
              questionTitle="Como responder a um anúncio?"
            >
              <p className={classes["accordionBody"]}>
                Clique no botão “Enviar um email” situado por baixo de
                “Contactar o anunciante” localizado do lado direito de cada
                anúncio. Preencha o formulário com o seu nome e email,
                assegurando-se que o mesmo foi introduzido correctamente (caso
                contrário o anunciante não poderá entrar em contacto consigo), e
                se pretender, o seu contacto telefónico.
              </p>
              <p className={classes["accordionBody"]}>
                Pode também contactar o anunciante por telefone desde que esteja
                disponível no anúncio.
              </p>
            </QuestionBox>

            <QuestionBox
              eventKey="26"
              questionTitle="Posso enviar publicidade?"
            >
              <p className={classes["accordionBody"]}>
                Agradecemos que não use os formulários de contacto para envio de
                mensagens não solicitadas, com fins publicitários ou oferta de
                serviços, para um grande número de utilizadores. Além de
                explicitamente proibido pelo nosso regulamento, é um grande
                incómodo para os nossos utilizadores. Este tipo de mensagens é
                filtrado de modo automático pelo nosso sistema, pelo que os
                destinatários não as recebem.
              </p>
            </QuestionBox>

            <QuestionBox
              eventKey="27"
              questionTitle="Onde encontro o identificador do anúncio?"
            >
              <img src={faqAdIdImage} alt="faqAdIdImage" />
              <p className={classes["accordionBody"]}>
                Pode encontrar o identificador do anúncio na URL do anúncio, ou
                no fim da página de cada anúncio. Sempre que nos contactar,
                pedimos que indique o identificador numérico ao mencionar um
                anúncio, de modo a podermos identificá-lo mais facilmente. Pode
                encontrá-lo na URL do anúncio, ou no fim da página de cada
                anúncio.
              </p>
            </QuestionBox>
          </div>
          <div className={classes["faqManageMyAdsTitleDiv"]}>
            <span className={classes["faqManageMyAdsTitle"]}>
              Guardar anúncios e pesquisas
            </span>
          </div>
          {/*Fourth Accordion*/}
          <div className={classes["faqAccordionDivSaveAdsAndSearchers"]}>
            <QuestionBox eventKey="28" questionTitle="Como guardo um anúncio?">
              <p className={classes["accordionBody"]}>
                Para adicionar um anúncio à sua lista de anúncios, seleccione a
                opção “Guardar anúncio” disponível do lado direito do anúncio.
                Para consultar os anúncios guardados na sua lista, entre na
                página “Anúncios guardados” disponível no menú superior de
                qualquer página do nosso site.
              </p>
            </QuestionBox>

            <QuestionBox
              eventKey="29"
              questionTitle="Como guardo uma pesquisa?"
            >
              <p className={classes["accordionBody"]}>
                Para adicionar uma pesquisa à sua conta basta clicar em “
                <b>Guardar</b> <img src={faqStarImage} alt="icon_star" />
                ”, por baixo da barra de pesquisa em qualquer página de
                pesquisa. Pode guardar até 20 pesquisas nesta página.
              </p>
            </QuestionBox>

            <QuestionBox
              eventKey="30"
              questionTitle="Como visualizo os anúncios e pesquisas guardados?"
            >
              <p className={classes["accordionBody"]}>
                Para visualizar os seus anúncios e pesquisas, seleccione a opção
                respectiva disponível no canto superior de qualquer página do
                CustoJusto.pt.
              </p>
            </QuestionBox>

            <QuestionBox
              eventKey="31"
              questionTitle="Como removo os anúncios e pesquisas guardados?"
            >
              <p className={classes["accordionBody"]}>
                Para remover anúncios guardados, deverá ir à respectiva secção e
                clicar em “Remover” no anúncio que pretende apagar. O mesmo
                procedimento é aplicado para remover as “Pesquisas guardadas”.
              </p>
            </QuestionBox>
          </div>
          <div className={classes["faqManageMyAdsTitleDiv"]}>
            <span className={classes["faqManageMyAdsTitle"]}>
              O nosso serviço de chat do CustoJusto
            </span>
          </div>
          {/*Fifth Accordion*/}
          <div className={classes["faqAccordionDivChat"]}>
            <QuestionBox
              eventKey="32"
              questionTitle="Para que serve o chat do CustoJusto?"
            >
              <p className={classes["accordionBody"]}>
                Com o chat do CustoJusto poderá contactar de forma muito mais
                rápida com as pessoas interessadas no seu anúncio! Tem, entre
                outras, as seguintes vantagens:
              </p>
              <ul className={classes["accordionBody"]}>
                <li>
                  A comunicação entre o comprador e vendedor tem lugar de forma
                  rápida e segura.
                </li>
                <li>
                  Não perde qualquer conversa, já que poderá aceder desde o seu
                  computador ou telefone (disponível na app iOS, por enquanto) e
                  poderá consultar sempre que queira.
                </li>
                <li>
                  Poderá bloquear ou desbloquear com quem não lhe interessa
                  conversar.
                </li>
                <li>
                  Nas aplicações (iOS por enquanto) enviamos notificações para
                  o/a mantermos informado.
                </li>
                <li>
                  Continuaremos a enviar o email com as conversas que tenha, de
                  forma a que possa consultar na sua caixa de email.
                </li>
                <li>
                  As suas transacções ganharão mais segurança e agilidade,
                  tratando de tudo através do nosso chat.
                </li>
              </ul>
            </QuestionBox>

            <QuestionBox eventKey="33" questionTitle="Como funciona o chat?">
              <p className={classes["accordionBody"]}>
                O chat permite aos utilizadores conversar sobre um determinado
                anúncio e está disponível somente em algumas categorias. <br />
                Novas categorias serão adicionadas em breve.
              </p>
              <p className={classes["accordionBody"]}>
                Os utilizadores devem possuir uma conta no CustoJusto para usar
                o serviço de Chat.
              </p>
              <p className={classes["accordionBody"]}>
                Para preservar os seus dados pessoais e evitar spam, os
                endereços de e-mail de utilizadores e anunciantes não estarão
                visíveis durante a conversa.
              </p>
              <p className={classes["accordionBody"]}>
                Somente o nome inserido durante a criação da conta pelo
                utilizador e / ou pelo anunciante é que ficará visível.
              </p>
              <p className={classes["accordionBody"]}>
                O CustoJusto irá notificá-lo de qualquer nova mensagem
                (utilizadores com app iOS) e / ou notificá-lo por e-mail para o
                endereço de e-mail inserido ao criar a conta pessoal.
              </p>
              <p className={classes["accordionBody"]}>
                O Chat também permite enviar e receber anexos.
              </p>
              <p className={classes["accordionBody"]}>
                Para entrar em contato com um anunciante nas restantes
                categorias em que o serviço ainda não esteja disponível, aceda à
                página do anúncio e clique em "Enviar uma mensagem". Será
                enviado um email ao anunciante e o processo segue através de
                e-mail.
              </p>
            </QuestionBox>

            <QuestionBox
              eventKey="34"
              questionTitle="Como responder a uma mensagem?"
            >
              <p className={classes["accordionBody"]}>
                Para responder a uma mensagem e encontrar toda a troca de
                mensagens em todos os seus dispositivos:
              </p>
              <ul className={classes["accordionBody"]}>
                <li>
                  Faça login na sua conta pessoal digitando seu e-mail e senha.
                </li>
                <li>Clique em "Chat".</li>
                <li>
                  Selecione o anúncio desejado para continuar as suas conversas
                  com as pessoas interessadas no seu anúncio.
                </li>
                <li>
                  Continuará a receber uma cópia de suas trocas de mensagens por
                  e-mail e será notificado no seu telemóvel (iOS por enquanto).
                </li>
              </ul>
              <p className={classes["accordionBody"]}>
                O sistema de Chat também permite enviar e receber anexos.
              </p>
              <p className={classes["accordionBody"]}>
                Nota: O envio de mensagens só está disponível para um número
                limitado de categorias de anúncios (iremos adicionar,
                gradualmente, mais categorias)
              </p>
            </QuestionBox>

            <QuestionBox
              eventKey="35"
              questionTitle="Como entrar em contacto com um determinado anunciante por email?"
            >
              <p className={classes["accordionBody"]}>
                Para entrar em contato com um anunciante:
              </p>
              <ul className={classes["accordionBody"]}>
                <li>
                  Faça login na sua conta pessoal digitando seu e-mail e senha.
                </li>
                <li>Clique em "Chat".</li>
                <li>Escreva a sua mensagem para o anunciante.</li>
                <li>Clique em "Enviar mensagem".</li>
              </ul>
              <p className={classes["accordionBody"]}>
                Para encontrar todas as mensagens trocadas em todos os seus
                dispositivos:
              </p>
              <ul className={classes["accordionBody"]}>
                <li>
                  Faça login na sua conta pessoal digitando seu e-mail e senha.
                </li>
                <li>Clique em "Chat".</li>
                <li>
                  Selecione o anúncio desejado para continuar as suas conversas
                  com o seu contacto.
                </li>
                <li>
                  Continuará a receber uma cópia de suas trocas por e-mail e
                  será notificado no seu telemóvel.
                </li>
              </ul>
              <p className={classes["accordionBody"]}>
                O sistema de Chat também permite enviar e receber anexos.
              </p>
              <p className={classes["accordionBody"]}>
                Nota: o envio de mensagens só está disponível para um número
                limitado de categorias de anúncios (iremos adicionar,
                gradualmente, mais categorias)
              </p>
              <p className={classes["accordionBody"]}>
                Para entrar em contato com um anunciante nas categorias onde
                ainda não está disponível o serviço de Chat, aceda à página do
                anúncio e clique em "Enviar um e-mail".
              </p>
            </QuestionBox>

            <QuestionBox
              eventKey="36"
              questionTitle="Como excluir uma conversa?"
            >
              <p className={classes["accordionBody"]}>
                Para excluir uma conversa da sua interface de Chat:
              </p>
              <ul className={classes["accordionBody"]}>
                <li>
                  Faça login na sua conta pessoal digitando seu e-mail e senha.
                </li>
                <li>Clique em "Chat".</li>
                <li>Selecione o anúncio referente à conversa.</li>
                <li>
                  Clique em "Apagar conversa" no canto superior direito da
                  conversa ou diretamente no icon do caixote de lixo cinza no
                  lado direito do anúncio na sua lista de conversas.
                </li>
              </ul>
            </QuestionBox>

            <QuestionBox
              eventKey="37"
              questionTitle="Como bloquear um utilizador?"
            >
              <p className={classes["accordionBody"]}>
                Se receber uma mensagem suspeita, a interface de Chat
                permite-lhe bloquear esse utilizador.
              </p>
              <p className={classes["accordionBody"]}>
                Para bloquear um utilizador:
              </p>
              <ul className={classes["accordionBody"]}>
                <li>
                  Faça login na sua conta pessoal digitando seu e-mail e senha.
                </li>
                <li>Clique em "Chat".</li>
                <li>Selecione o anúncio desejado.</li>
                <li>
                  Clique em "Bloquear utilizador" no canto superior direito da
                  conversa.
                </li>
              </ul>
            </QuestionBox>

            <QuestionBox
              eventKey="38"
              questionTitle="Em que categorias de anúncios é que o serviço de chat está activo?"
            >
              <p className={classes["accordionBody"]}>
                De momento, o serviço de chat está limitado a algumas categorias
                de anúncios. Esta informação será actualizada sempre que se
                adicione novas categorias ao serviço de chat. Por enquanto, está
                activo nas seguintes categorias-mãe:
              </p>

              <ul className={classes["accordionBody"]}>
                <li>Para Casa e Vestuário</li>
              </ul>
            </QuestionBox>

            <QuestionBox
              eventKey="39"
              questionTitle="E como vai funcionar nas restantes categorias em que ainda não está activo o serviço de chat?"
            >
              <p className={classes["accordionBody"]}>
                Nas categorias onde não há serviço de chat activo, continuará a
                funcionar o sistema de resposta a anúncios por e-mail. Estas
                respostas não ficarão disponíveis na nova área de chat e
                continuarão a ser enviadas para a conta de e-mail do anunciante.
                A partir daí, a gestão das respostas será feita exclusivamente
                através de email.
              </p>
            </QuestionBox>
          </div>

          <div className={classes["faqManageMyAdsTitleDiv"]}>
            <span className={classes["faqManageMyAdsTitle"]}>
              Revisão/anúncios rejeitados
            </span>
          </div>
          {/*Sixth Accordion*/}
          <div className={classes["faqAccordionDivRejectedAds"]}>
            <QuestionBox eventKey="40" questionTitle="Título ou texto">
              <h2>O título</h2>
              <p className={classes["accordionBody"]}>
                Deve resumir o conteúdo do anúncio, para que seja mais fácil ao
                público-alvo encontrar o seu anúncio. O título deve conter pelo
                menos duas palavras. Não é permitida a inserção de caracteres
                especiais no título. Não deve conter endereços web, palavras
                como "vendo", "alugo" ou "oportunidade", que estão implícitas na
                secção ou simplesmente não acrescentam informação, ou preços dos
                artigos, que deverão estar inseridos na caixa de preço.
              </p>
              <p className={classes["accordionBody"]}>
                A CustoJusto reserva-se o direito de alterar o título do
                anúncio, de acordo com as regras de publicação estabelecidas.
              </p>
              <p className={classes["accordionBody"]}>Sugerimos especificar:</p>
              <ul className={classes["accordionBody"]}>
                <li>
                  <a href="https://www.custojusto.pt/portugal/animais/animais-domesticos">
                    Animais
                  </a>
                  : raça, sexo.
                </li>
                <li>
                  <a href="https://www.custojusto.pt/portugal/veiculos/carros-usados">
                    Veículos
                  </a>
                  : marca e modelo, extras.
                </li>
                <li>
                  <a href="https://www.custojusto.pt/portugal/emprego-servicos/emprego-oferta">
                    Ofertas de emprego
                  </a>
                  : cargo oferecido.
                </li>
                <li>
                  <a href="https://www.custojusto.pt/portugal/imobiliario/apartamentos">
                    Imóveis
                  </a>
                  : Número de assoalhadas, zona, extras.
                </li>
              </ul>
              <h2>O texto</h2>

              <p className={classes["accordionBody"]}>
                Deve descrever detalhadamente as características principais do
                bem ou serviço, de forma a que os visitantes o encontrem com
                mais facilidade. Evite copiar e colar descrições muito longas ou
                listas de características; além de confuso para os visitantes,
                pode estar a copiar texto com copyright. Não é permitido copiar
                os textos dos anúncios de outros anunciantes; estes textos estão
                ao abrigo da lei de direito de autor e direitos conexos.
              </p>
              <p className={classes["accordionBody"]}>Sugerimos que:</p>

              <ul className={classes["accordionBody"]}>
                <li>Detalhe as condições do produto.</li>
                <li>Detalhe o modo pelo qual prefere ser contactado.</li>
                <li>
                  Local onde os interessados poderão ver o produto e o estado do
                  mesmo.
                </li>
                <li>Detalhe as condições de venda ou compra.</li>
                <li>Não faça uso excessivo de maiúsculas.</li>
                <li>Não coloque links direccionados para outros websites.</li>
                <li>Não coloque termos de pesquisa ou palavras-chave.</li>
              </ul>
              <p className={classes["accordionBody"]}>
                O artigo ou serviço no seu anúncio deverá ser objectivo e
                descrito de forma explícita, e o mais detalhado possível, sem o
                uso excessivo de maiúsculas, links direccionados para outros
                sites e sempre em Português.
              </p>
              <p className={classes["accordionBody"]}>
                Sugerimos também a indicação do local onde os interessados
                poderão ver o produto e o estado do mesmo.
              </p>
              <p className={classes["accordionBody"]}>
                Finalmente, não é permitida a utilização de termos de pesquisa
                ou de palavras-chave no texto do anúncio.
              </p>
            </QuestionBox>

            <QuestionBox eventKey="41" questionTitle="Duplicados">
              <p className={classes["accordionBody"]}>
                Não é permitida a publicação de mais de um anúncio com o mesmo
                artigo, serviço ou emprego, mesmo quando oferecido em mais de
                uma região ou categoria. Se desejar alterar um anúncio já
                publicado, seleccione a opção “Modificar/Eliminar” situada por
                baixo do seu anúncio na página visualização do mesmo. No fim da
                página na secção “Gerir o seu anúncio”, seleccione a opção
                “Modificar”, insira a sua password e clique em “Continuar”.
                Efectue as alterações que pretende e ao finalizar, as suas
                alterações serão revistas e o seu anúncio será actualizado.
              </p>
              <p className={classes["accordionBody"]}>
                Caso não se recorde da sua password, seleccione a opção “não tem
                a password?”, insira o endereço de email através do qual o seu
                anúncio foi inserido e clique “Enviar”. Receberá na sua caixa de
                email um link através do qual poderá proceder à edição do seu
                anúncio.
              </p>
            </QuestionBox>

            <QuestionBox eventKey="42" questionTitle="Duplicados">
              <p className={classes["accordionBody"]}>
                O CustoJusto.pt reserva para si o direito de não publicar certas
                categorias de artigos e serviços, mesmo que não sejam
                declaradamente ilegais, como especificado no{" "}
                <a href="https://www.custojusto.pt/ajuda-rules?section=regras">
                  Regulamento de Utilização
                </a>
                , e na lista de produtos e serviços não autorizados em "
                <a href="https://www.custojusto.pt/ajuda-rules?section=regras">
                  Conteúdo e regras para inserção de Anúncios
                </a>
                ".
              </p>
            </QuestionBox>

            <QuestionBox eventKey="43" questionTitle="Separar anúncios">
              <p className={classes["accordionBody"]}>
                Não é permitido anunciar artigos ou serviços de categorias
                diferentes num só anúncio, visto dificultar a procura dos
                artigos individuais.
              </p>
              <p className={classes["accordionBody"]}>
                Cada artigo de categorias diferentes deverá ser colocado num
                anúncio separado, para que tenha mais destaque e seja encontrado
                com mais facilidade.
              </p>
            </QuestionBox>
          </div>

          <div className={classes["faqManageMyAdsTitleDiv"]}>
            <span className={classes["faqManageMyAdsTitle"]}>
              Métodos de pagamento
            </span>
          </div>

          {/*Seventh Accordion*/}

          <div className={classes["faqAccordionDivPaymentMethods"]}>
            <QuestionBox eventKey="44" questionTitle="Multibanco/Homebanking">
              <p className={classes["accordionBody"]}>
                Seleccione a opção pagamento por multibanco e clique em
                continuar. Em seguida, guarde a referência multibanco que foi
                gerada e dirija-se ao multibanco mais próximo de si ou aceda à
                sua conta online e efectue o pagamento na opção Pagamento de
                Serviços.
              </p>
              <p className={classes["accordionBody"]}>
                O serviço será efectuado após o nosso sistema ter confirmado o
                pagamento.
              </p>
              <p className={classes["accordionBody"]}>
                Receberá uma mensagem de email com a confirmação.
              </p>
            </QuestionBox>
            <QuestionBox eventKey="45" questionTitle="MB WAY">
              <p className={classes["accordionBody"]}>
                Seleccione a opção pagamento por MB Way e clique em continuar.
              </p>
              <p className={classes["accordionBody"]}>
                Em seguida, indique nome e introduza o número de telemóvei
                associado à sua conta no MB Way.
              </p>
              <p className={classes["accordionBody"]}>
                Irá receber uma notificação do MB Way para aprovar o pagamento.
              </p>
              <p className={classes["accordionBody"]}>
                Assim que este seja aceite, o serviço será activado e uma
                factura enviada para o seu endereço de email.
              </p>
              <p className={classes["accordionBody"]}>
                Receberá uma mensagem de email com a confirmação.
              </p>
            </QuestionBox>

            <QuestionBox eventKey="46" questionTitle="Moedas">
              <p className={classes["accordionBody"]}>
                O CustoJusto permite aos anunciantes a possibilidade de adquirir
                destaques através de uma carteira de moedas disponível no perfil
                da conta. Esta carteira pode ser carregada com moedas, sendo que
                cada moeda é equivalente a 1€ para efeitos de compra de
                destaques no site.
              </p>
              <p className={classes["accordionBody"]}>
                Como comprar o serviço? Pode comprar moedas na sua conta
                pessoal. Após o carregamento da carteira, o utilizador pode
                gastar essas moedas comprando destaques para os seus anúncios.
                Estas moedas são pessoais, intransmissíveis e não convertíveis
                em dinheiro. No caso de apagar a conta, as moedas não utilizadas
                serão canceladas e não poderão ser convertidas em dinheiro.
              </p>
              <p className={classes["accordionBody"]}>
                Pacotes de moedas disponíveis:
              </p>
              <p className={classes["accordionBody"]}>10 € - 10 moedas</p>
              <p className={classes["accordionBody"]}>
                25 € - 27 moedas (+ 8% em moedas)
              </p>
              <p className={classes["accordionBody"]}>
                50 € - 60 moedas (+ 20% em moedas)
              </p>
              <p className={classes["accordionBody"]}>
                100 € - 130 moedas (+ 30% em moedas)
              </p>
            </QuestionBox>
          </div>
        </Accordion>
      </div>
    </HelpPage>
  );
};

export default FAQ;
