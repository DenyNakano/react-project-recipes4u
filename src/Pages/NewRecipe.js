import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { FaRegImage } from "react-icons/fa";
import { MdTimer } from "react-icons/md";
import Api from "../utils/api.utils";

export const NewRecipe = () => {
  const [Autor, setAutor] = useState("");
  const [Receita, setReceita] = useState("");
  const [Descrição, setDescrição] = useState("");
  const [Ingredientes, setIngredientes] = useState("");
  const [Preparo, setPreparo] = useState("");
  const [Imagem, setImagem] = useState("");
  const [Categoria, setCategoria] = useState("Prato Principal");
  const [Tempo, setTempo] = useState("");
  const [Dificuldade, setDificuldade] = useState("😄 Fácil");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let NewRecipe = {
      category: Categoria.toLowerCase(),
      title: Receita,
      description: Descrição.trim(),
      ingredients: Ingredientes.split(";").map((step) => step.trim()),
      preparation: Preparo.split(";").map((step) => step.trim()),
      time: Tempo,
      level: Dificuldade,
      rate: 0,
      image: Imagem,
    };
    try {
      await Api.postRecipe(NewRecipe);
      setCategoria("Prato Principal");
      setReceita("");
      setDescrição("");
      setIngredientes("");
      setPreparo("");
      setTempo("");
      setDificuldade("😄 Fácil");
      setImagem("");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div style={{ display: "flex", justifyContent: "center",/*backgroundColor:"#d9d9db"*/ }}>
      <div
        style={{
          display: "flex",
          width: "90%",
          justifyContent: "center",
          margin: "15px 0",
        }}
      >
        <Form style={{ width: "80%" }} onSubmit={handleSubmit}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h1>Adicionar Receita</h1>
          </div>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label>Autor</Label>
                <Input
                  type="text"
                  value={Autor}
                  placeholder="Autor da postagem receita"
                  onChange={(e) => {
                    setAutor(e.target.value);
                  }}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>Receita</Label>
                <Input
                  type="text"
                  value={Receita}
                  placeholder="Nome da receita"
                  onChange={(e) => {
                    setReceita(e.target.value);
                  }}
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label>Descrição</Label>
            <Input
              style={{ height: 150 }}
              type="textarea"
              value={Descrição}
              placeholder="Decrição da receita"
              onChange={(e) => {
                setDescrição(e.target.value);
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label>Ingredientes</Label>
            <Input
              style={{ height: 200 }}
              type="textarea"
              value={Ingredientes}
              placeholder="Separe os ingredientes por ';'"
              onChange={(e) => {
                setIngredientes(e.target.value);
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label>Preparo</Label>
            <Input
              style={{ height: 200 }}
              type="textarea"
              value={Preparo}
              placeholder="Separe o passo a passo por ';'"
              onChange={(e) => {
                setPreparo(e.target.value);
              }}
            />
          </FormGroup>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label>
                  Imagem <FaRegImage />
                </Label>
                <Input
                  type="text"
                  value={Imagem}
                  placeholder="http://image.png"
                  onChange={(e) => {
                    setImagem(e.target.value);
                  }}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label>Categoria</Label>
                <Input
                  type="select"
                  value={Categoria}
                  onChange={(e) => {
                    setCategoria(e.target.value);
                  }}
                >
                  <option>Prato Principal</option>
                  <option>Drinks</option>
                  <option>Acompanhamentos</option>
                  <option>Massas</option>
                  <option>Sobremesa</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <FormGroup>
                <Label>
                  Tempo <MdTimer />
                </Label>
                <Input
                  type="text"
                  value={Tempo}
                  placeholder="0h 0min"
                  onChange={(e) => {
                    setTempo(e.target.value);
                  }}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label>Dificuldade</Label>
                <Input
                  type="select"
                  value={Dificuldade}
                  onChange={(e) => {
                    setDificuldade(e.target.value);
                  }}
                >
                  <option>😄 Fácil</option>
                  <option>😅 Moderado</option>
                  <option>😓 Difícil</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItem: "center",
            }}
          >
            <Button style={{ width: "50%" }} color="warning">
              Salvar
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
