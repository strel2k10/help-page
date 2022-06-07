import React from "react";

// Styles
import classes from "./FAQ.module.scss";

// Components

import QuestionBox from "./Components/QuestionBox/QuestionBox";

const FAQ = (props) => {
  return (
    <div className={classes["wrapper"]}>
      <div className={classes["faqPostAdsTitleDiv"]}>
        <span className={classes["faqPostAdsTitle"]}>Colocar anúncios</span>
      </div>

      <div className={classes["faqPostAdsAccordionDiv"]}>
        
        <QuestionBox
          eventKey="0"
          questionTitle="Como publicar um anúncio?"
          questionBody="Pode inserir anúncios gratuitamente no CustoJusto.pt, através do link “Inserir anúncio grátis”, disponível na página inicial do nosso site, e também no cabeçalho de todas as páginas do CustoJusto.pt (“insira anúncios gratuitamente”).

        Basta preencher os campos relevantes e obrigatórios das etapas “O seu anúncio” e “Dados de Contacto”, conforme as instruções apresentadas, adicionar as imagens pretendidas (até doze para as categorias de Imobiliária e Veículos, e até três para as restantes categorias), se desejar.
        
        Lembre-se que a clareza da informação que fornecer afectará em muito a recepção do seu anúncio por parte dos visitantes! Anúncios com uma ou mais fotos são, por exemplo, 7 vezes mais visitados do que aqueles sem fotos.
        
        Preencha os seus dados na etapa “Dados de contacto”: caso já tenha conta, irá fazer login para que os dados sejam automaticamente preenchidos. Caso ainda não possua conta, ser-lhe-á pedido que crie uma conta, preenchendo os campos Nome, número de telefone, localização (código postal, Distrito, Concelho e Freguesia). Para que o anúncio seja publicado, deverá validar o seu email, clicando no link que consta no email de activação de conta.
        
        Seleccionar a opção “Inserir anúncio”. Nesta altura o seu anúncio foi inserido e aguarda validação da conta (caso tenha criado uma conta nova) ou revisão pela nossa equipa editorial. Caso não pretenda aderir a nenhum serviço pago, pode inserir novo anúncio ou fazer uma pesquisa pelos anúncios activos no site.
        
        Após inserir o anúncio, este será revisto pela nossa equipa de revisão, e se estiver de acordo com as regras de utilização do CustoJusto.pt, será publicado num prazo médio de 3 horas."
        ></QuestionBox>

        <QuestionBox
          eventKey="1"
          questionTitle="Quanto custa publicar um anúncio no CustoJusto.pt?"
          questionBody="No CustoJusto.pt os anúncios são grátis, ou seja, não precisa pagar para inserir anúncios nem paga qualquer comissão pela venda do seu artigo."
        ></QuestionBox>

        <QuestionBox
          eventKey="2"
          questionTitle="Qual é a validade de um anúncio?"
          questionBody="Se não o apagar antes, o seu anúncio ficará publicado por um período de 60 dias. Findo este período, poderá ser renovado por um igual período de tempo."
        ></QuestionBox>

        <QuestionBox
          eventKey="3"
          questionTitle="Em que região publico o meu anúncio?"
          questionBody="Deverá publicar o seu anúncio na região em que o seu produto se encontra localizado."
        ></QuestionBox>

        <QuestionBox
          eventKey="4"
          questionTitle="O que devo escrever no texto do anúncio?"
          questionBody="Deve descrever detalhadamente as características principais do produto ou serviço, de forma a que os visitantes o encontrem com mais facilidade. Evite copiar e colar descrições muito longas ou listas de características; além de confuso para os visitantes, pode estar a copiar texto com copyright.

        Sugerimos que: 
        
        Detalhe as condições do produto.
        Detalhe o modo pelo qual prefere ser contactado.
        Local onde os interessados poderão ver o produto e o estado do mesmo.
        Detalhe as condições de venda ou compra.
        Não faça uso excessivo de maiúsculas.
        Não coloque links direccionados para outros websites.
        Não coloque termos de pesquisa ou palavras-chave."
        ></QuestionBox>

        <QuestionBox
          eventKey="5"
          questionTitle="Como colocar fotografias nos meus anúncios?"
          questionBody="No formulário “Inserir anúncio”, junto a “Inserir Imagens” carregue na opção “Inserir”. Procure no seu computador a imagem que deseja usar e carregue em “Abrir”. Nas categorias de Imobiliária e de Veículos, poderá adicionar mais cinco imagens, podendo nas restantes categorias adicionar mais duas imagens, bastando para isso repetir o processo nas restantes opções “Inserir”.

        As imagens deverão ser nos formatos GIF, BMP, PNG ou JPEG."
        ></QuestionBox>

        <QuestionBox
          eventKey="6"
          questionTitle="Posso colocar código HTML no meu anúncio?"
          questionBody="Não, tal não é permitido. Qualquer código HTML será apagado do anúncio."
        ></QuestionBox>

        <QuestionBox
          eventKey="7"
          questionTitle="Tenho de criar registo para utilizar o CustoJusto.pt?"
          questionBody="Precisa de ter uma conta activa para colocar anúncios. Os únicos dados pessoais que requisitamos são os que consideramos indispensáveis à introdução do anúncio.

        Não precisa de ter conta no CustoJusto para consultar e responder a anúncios. No entanto, estando com o login efectuado, já não terá de preencher os dados (nome, email ou telefone) sempre que for responder a um anúncio."
        ></QuestionBox>

        <QuestionBox
          eventKey="8"
          questionTitle="Como faço para confirmar um anúncio?"
          questionBody="Já não é necessário confirmar o anúncio, mas deve assegurar-se de que preenche correctamente o seu endereço de email, já que não poderá alterá-lo posteriormente. O seu anúncio será revisto pela nossa equipa de revisão após ter sido inserido no nosso sistema."
        ></QuestionBox>

        <QuestionBox
          eventKey="9"
          questionTitle="Não recebi nenhum email! O que fazer?"
          questionBody="Algumas vezes, os programas de email podem reconhecer erradamente algumas mensagens como email não solicitado (Spam). Se não recebeu um email nosso, pedimos o favor de verificar na caixa de Spam (ou equivalente) do seu endereço de email.

        Caso não consiga encontrar, nem na pasta de entrada nem na pasta de Spam, sugerimos que nos contacte de modo a que possamos analisar a situação. Também é possível que tenha colocado o endereço de email errado na introdução do anúncio. Se for este o caso, terá de introduzir novamente o anúncio, eliminando o anúncio anterior."
        ></QuestionBox>

        <QuestionBox
          eventKey="10"
          questionTitle="Por que pedem o meu NIPC?"
          questionBody="Nos anúncios de empresas é solicitado o número de contribuinte, para ajudar a prevenir situações de burlas. Estes dados servem unicamente para certificação de que é um profissional, de modo a que os utilizadores sintam uma maior credibilidade. Não é cobrado qualquer valor."
        ></QuestionBox>

        <QuestionBox
          eventKey="11"
          questionTitle="Como imprimir o meu anúncio?"
          questionBody="Pode facilmente imprimir um flyer do seu anúncio, ou de outro qualquer. Basta clicar em Imprimir anúncio, na própria página do anúncio. É necessário ter instalado o Adobe Acrobat Reader para visualizar correctamente o flyer."
        ></QuestionBox>
      </div>

      <div className={classes["faqManageMyAdsTitleDiv"]}>
        <span className={classes["faqManageMyAdsTitle"]}>
          Gerir os meus anúncios
        </span>
      </div>
    </div>
  );
};

export default FAQ;
