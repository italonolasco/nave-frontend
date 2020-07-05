import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaTrash, FaPen, FaTimes } from "react-icons/fa";

import api from "../../services/api";

import {
  ModalStyle,
  ModalContainer,
  ModalButtons,
  Profile,
} from "../../styles/profileNaver";
import { Container, Header, Content, Buttons } from "./styles";

function Home() {
  const [alert, setAlert] = useState(false);

  const [navers, setNavers] = useState([]);
  const [selectedNaver, setSelectedNaver] = useState([]);

  useEffect(() => {
    async function getNavers() {
      const response = await api.get("/navers");

      setNavers(response.data);
    }

    getNavers();
  }, []);

  function handleClick(naver) {
    setSelectedNaver(naver);
    setAlert(true);
  }

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
            <img
              src={naver.url}
              alt="naver"
              onClick={() => handleClick(naver)}
            />
            <strong onClick={() => handleClick(naver)}>{naver.name}</strong>
            <p onClick={() => handleClick(naver)}>{naver.job_role}</p>
            <Buttons>
              <button className="remove" type="button">
                <FaTrash color="#000" size="18" />
              </button>
              <Link
                to={{
                  pathname: "/edit",
                  state: { id: naver.id },
                }}
              >
                <button className="edit" type="button">
                  <FaPen color="#000" size="18" />
                </button>
              </Link>
            </Buttons>
          </li>
        ))}
      </Content>

      <ModalStyle isOpen={alert}>
        <ModalContainer>
          <div>
            <img src={selectedNaver.url} alt="naver" />
          </div>

          <Profile>
            <div className="header">
              <h2>{selectedNaver.name}</h2>
              <button onClick={() => setAlert(false)}>
                <FaTimes color="#000" size="24" />
              </button>
            </div>

            <p>{selectedNaver.job_role}</p>

            <h3>Idade</h3>
            <p>{selectedNaver.birthdate}</p>

            <h3>Tempo de Empresa</h3>
            <p>{selectedNaver.admission_date}</p>

            <h3>Projetos que participou</h3>
            <p>{selectedNaver.project}</p>

            <ModalButtons>
              <button className="remove" type="button">
                <FaTrash color="#000" size="18" />
              </button>
              <Link
                to={{
                  pathname: "/edit",
                  state: { id: selectedNaver.id },
                }}
              >
                <button className="edit" type="button">
                  <FaPen color="#000" size="18" />
                </button>
              </Link>
            </ModalButtons>
          </Profile>
        </ModalContainer>
      </ModalStyle>
    </Container>
  );
}

export default Home;
