import React from "react";

import { FaChevronLeft } from "react-icons/fa";

import { Form } from "@unform/web";
import Input from "../../components/Input";

import { Container } from "./styles";

function EditNaver() {
  /*const { addNaver } = useAuth();

  function handleSubmit(data) {
    addNaver(data);
  }*/

  return (
    <Container>
      <div>
        <FaChevronLeft color="#000" size="18" />
        <h2>Editar Naver</h2>
      </div>

      <Form>
        <p>
          <label htmlFor="name">Nome</label>
          <Input type="text" name="name" id="name" placeholder="Nome" />
        </p>

        <p>
          <label htmlFor="job">Cargo</label>
          <Input type="text" name="job" id="job" placeholder="Cargo" />
        </p>

        <p>
          <label htmlFor="age">Idade</label>
          <Input type="number" name="age" id="age" placeholder="Idade" />
        </p>

        <p>
          <label htmlFor="time">Tempo de Empresa</label>
          <Input
            type="number"
            name="time"
            id="time"
            placeholder="Tempo de Empresa"
          />
        </p>

        <p>
          <label htmlFor="projects">Projetos que participou</label>
          <Input
            type="text"
            name="projects"
            id="projects"
            placeholder="Projetos que participou"
          />
        </p>

        <p>
          <label htmlFor="url">URL da foto do Naver</label>
          <Input
            type="url"
            name="url"
            id="url"
            placeholder="URL da foto do Naver"
          />
        </p>
        <button type="submit">Salvar</button>
      </Form>
    </Container>
  );
}

export default EditNaver;
