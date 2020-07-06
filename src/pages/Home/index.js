import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaTrash, FaPen, FaTimes } from "react-icons/fa";

import api from "../../services/api";
import { useAuth } from "../../contexts/auth";

import { ModalStyle, ModalContent } from "../../styles/confirmation";
import { ModalStyleDelete, ModalContentDelete } from "../../styles/delete";

import {
  ModalStyleProfile,
  ModalContainer,
  ModalButtons,
  Profile,
  CloseButton,
} from "../../styles/profileNaver";
import { Container, Header, Content, Buttons } from "./styles";

function Home() {
  const [alert, setAlert] = useState(false);
  const [deleteAlert, setDeleteAlert] = useState(false);
  const [wishDeleteAlert, setWishDeleteAlert] = useState(false);

  const [navers, setNavers] = useState([]);
  const [selectedNaver, setSelectedNaver] = useState([]);

  const { removeNaver } = useAuth();

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

  function setSelectedNaverToDelete(naver) {
    setSelectedNaver(naver);
    setWishDeleteAlert(true);
  }

  function handleRemove(id) {
    setWishDeleteAlert(false);
    removeNaver(id).then((naverRemoved) => {
      if (naverRemoved) {
        setDeleteAlert(true);
      }
    });
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
              <button
                className="remove"
                type="button"
                onClick={() => setSelectedNaverToDelete(naver)}
              >
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

      <ModalStyleProfile isOpen={alert}>
        <ModalContainer>
          <div>
            <img src={selectedNaver.url} alt="naver" />
          </div>

          <Profile>
            <h2>{selectedNaver.name}</h2>

            <p>{selectedNaver.job_role}</p>

            <h3>Idade</h3>
            <p>{selectedNaver.birthdate}</p>

            <h3>Tempo de Empresa</h3>
            <p>{selectedNaver.admission_date}</p>

            <h3>Projetos que participou</h3>
            <p>{selectedNaver.project}</p>

            <ModalButtons>
              <button
                className="remove"
                type="button"
                onClick={() => setWishDeleteAlert(true)}
              >
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
          <CloseButton>
            <button onClick={() => setAlert(false)}>
              <FaTimes color="#000" size="24" />
            </button>
          </CloseButton>
        </ModalContainer>
      </ModalStyleProfile>

      <ModalStyle isOpen={deleteAlert}>
        <ModalContent>
          <div>
            <h1>Naver excluído</h1>
            <button onClick={() => setDeleteAlert(false)}>
              <FaTimes color="#000" size="24" />
            </button>
          </div>

          <p>Naver excluido com sucesso</p>
        </ModalContent>
      </ModalStyle>

      <ModalStyleDelete isOpen={wishDeleteAlert}>
        <ModalContentDelete>
          <h1>Excluir Naver</h1>

          <p>Tem certeza que deseja excluir este Naver?</p>
          <button className="cancel" onClick={() => setWishDeleteAlert(false)}>
            Cancelar
          </button>
          <button
            className="confirm"
            onClick={() => handleRemove(selectedNaver.id)}
          >
            Excluir
          </button>
        </ModalContentDelete>
      </ModalStyleDelete>
    </Container>
  );
}

export default Home;
