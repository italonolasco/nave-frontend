import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";

import { FaTrash, FaPen } from "react-icons/fa";

import { Container, Header, Content, Buttons } from "./styles";

function Home() {
  const [navers, setNavers] = useState([]);

  useEffect(() => {
    async function getNavers() {
      const response = await api.get("/navers");

      setNavers(response.data);
      console.log(response.data);
    }

    getNavers();
  }, []);

  return (
    <Container>
      <Header>
        <h1>Navers</h1>

        <Link to="/add">
          <button type="button">Adicionar Naver</button>
        </Link>
      </Header>
      <Content>
        {navers.map((naver) => (
          <li key={naver.id}>
            <img src={naver.url} alt="naver" />
            <strong>{naver.name}</strong>
            <p>{naver.job_role}</p>
            <Buttons>
              <button className="remove" type="button">
                <FaTrash color="#000" size="18" />
              </button>
              <Link to="/edit">
                <button className="edit" type="button">
                  <FaPen color="#000" size="18" />
                </button>
              </Link>
            </Buttons>
          </li>
        ))}
      </Content>
    </Container>
  );
}

export default Home;
