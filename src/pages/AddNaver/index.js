import React from "react";

import { FaChevronLeft } from "react-icons/fa";
import { Form } from "@unform/web";
import Input from "../../components/Input";

import { useAuth } from "../../contexts/auth";

import { Container } from "./styles";

function AddNaver() {
  const { addNaver } = useAuth();

  function handleSubmit(data) {
    addNaver(data);
  }

  return (
    <Container>
      <div>
        <FaChevronLeft color="#000" size="18" />
        <h2>Adicionar Naver</h2>
      </div>

      <Form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="name">Nome</label>
          <Input type="text" name="name" id="name" placeholder="Nome" />
        </p>

        <p>
          <label htmlFor="job_role">Cargo</label>
          <Input
            type="text"
            name="job_role"
            id="job_role"
            placeholder="Cargo"
          />
        </p>

        <p>
          <label htmlFor="birthdate">Idade</label>
          <Input
            type="date"
            name="birthdate"
            id="birthdate"
            placeholder="Idade"
          />
        </p>

        <p>
          <label htmlFor="admission_date">Tempo de Empresa</label>
          <Input
            type="date"
            name="admission_date"
            id="admission_date"
            placeholder="Tempo de Empresa"
          />
        </p>

        <p>
          <label htmlFor="project">Projetos que participou</label>
          <Input
            type="text"
            name="project"
            id="project"
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

export default AddNaver;
