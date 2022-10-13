import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import aboutpage from "../images/aboutpage.jpg";

export const CardAbout = () => {
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "flex-start", height: 800, paddingTop:10}}>
      <Card  style={{display: "flex", justifyContent: "center", alignItems: "center", border: 0, backgroundColor: "#d9d9db"}}>
        <CardImg
          alt="Card image cap"
          src={aboutpage}
          style={{
            height: 220,
            width: 900,
          }}
          top
          width="100%"
          
        />
        <CardBody style={{textAlign: "center", width: 900}}>
          <CardTitle tag="h1" >
            Sobre a Recipes 4 U
          </CardTitle>
          <CardText tag="h5">
            <b>
              Conhecida como a “arte de cozinhar”, a culinária é o ato de criar
              pratos e receitas, e vai da escolha dos ingredientes até a hora de
              servir no prato. Tem com foco nos fatores regionais e culturais
              que marcam a maneira que cada sociedade se alimenta. A Recipe 4U
              tem como objetivo quebrar as barreiras regionais e levar para sua
              casa experiências gastronomicas do mundo todo. Nosso intuito é
              criar a conexão com outros usuários através da culinária para
              haver trocas de receitas, experiências, culturas e histórias.
            </b>
          </CardText>

        </CardBody>
      </Card>
    </div>
  );
};
