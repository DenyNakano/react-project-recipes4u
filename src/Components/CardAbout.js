import React from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle, CardText } from 'reactstrap'
import aboutpage from "../images/aboutpage.jpg"

export const CardAbout = () => {
  return (

    <div>
      <Card inverse>
        <CardImg
          alt="Card image cap"
          src={aboutpage}
          style={{
            height: 800
          }}
          width="100%"
        />

        <CardImgOverlay style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <CardTitle tag="h1">
            Sobre Recipes 4 U
          </CardTitle>
          <CardText style={{fontSize: 23, color: 'black' }}>
            <b>Conhecida como a “arte de cozinhar”, a culinária é o ato de criar pratos e receitas, e vai da escolha dos ingredientes até a hora de servir no prato. Tem com foco nos fatores regionais e culturais que marcam a maneira que cada sociedade se alimenta.
            A Recipe 4U tem como objetivo quebrar as barreiras regionais e levar para sua casa experiências gastronomicas do mundo todo.
            Nosso intuito é criar a conexão com outros usuários através da culinária para haver trocas de receitas, experiências, culturas e histórias.</b>
          </CardText>
         
        </CardImgOverlay>
      </Card>
    </div>
    /*<Card className="my-2">
    <CardImg
      alt="Card image cap"
      src= {aboutpage}
      style={{
      height: 500,
      width: 700
      }
    }
    />
    <CardBody>
      <CardTitle tag="h5">
        Sobre Recipes 4 U
      </CardTitle>
      <CardText>
      Conhecida como a “arte de cozinhar”, a culinária é o ato de criar pratos e receitas, e vai da escolha dos ingredientes até a hora de servir no prato. Tem com foco nos fatores regionais e culturais que marcam a maneira que cada sociedade se alimenta.      
      A Recipe 4U tem como objetivo quebrar as barreiras regionais e levar para sua casa experiências gastronomicas do mundo todo.
      Nosso intuito é criar a conexão com outros usuários através da culinária para haver trocas de receitas, experiências, culturas e histórias. 
      </CardText>
     
    </CardBody>
  </Card>*/

  )
}
