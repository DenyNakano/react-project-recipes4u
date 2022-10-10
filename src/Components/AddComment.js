import React from "react";
import { StarRating } from "./StarRating";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import "./AddComment.css";
import { CgProfile } from "react-icons/cg";
export const AddComment = ({
  handleSubmit,
  changeInputAuthor,
  changeInputComments,
  authorInput,
  commentsInput,
  changeInputRating,
  rating,
}) => {
  return (
    <Form onSubmit={(e) => handleSubmit(e)} id="form-comment">
      <Label tag="h3">Adicione um comentário</Label>
      <FormGroup>
        <CgProfile size={70} />
        <Input
          type="text"
          value={authorInput}
          placeholder="Nome"
          onChange={(e) => {
            changeInputAuthor(e);
          }}
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="textarea"
          id="textarea-comment"
          value={commentsInput}
          placeholder="Comentário"
          onChange={(e) => {
            changeInputComments(e);
          }}
        />
      </FormGroup>
      <StarRating changeInputRating={changeInputRating} rating={rating} />
      <FormGroup>
        <Button>Enviar comentário</Button>
      </FormGroup>
    </Form>
  );
};
