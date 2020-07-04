import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import juju from "../../assets/juju.svg";

import { FaTrash, FaPen } from "react-icons/fa";

import { Container, Header, Content, Buttons } from "./styles";

function Home() {
  useEffect(() => {}, []);

  return (
    <Container>
      <Header>
        <h1>Navers</h1>

        <Link to="/add">
          <button type="button">Adicionar Naver</button>
        </Link>
      </Header>
      <Content>
        <li>
          <img src={juju} alt="naver" />
          <strong>Juliano Reis</strong>
          <p>Front-end Developer</p>
          <Buttons>
            <button class="remove" type="button">
              <FaTrash color="#000" size="18" />
            </button>
            <button class="edit" type="button">
              <FaPen color="#000" size="18" />
            </button>
          </Buttons>
        </li>
        <li>
          <img src={juju} alt="naver" />
          <strong>Juliano Reis</strong>
          <p>Front-end Developer</p>
          <Buttons>
            <button class="remove" type="button">
              <FaTrash color="#000" size="18" />
            </button>
            <button class="edit" type="button">
              <FaPen color="#000" size="18" />
            </button>
          </Buttons>
        </li>
        <li>
          <img src={juju} alt="naver" />
          <strong>Juliano Reis</strong>
          <p>Front-end Developer</p>
          <Buttons>
            <button class="remove" type="button">
              <FaTrash color="#000" size="18" />
            </button>
            <button class="edit" type="button">
              <FaPen color="#000" size="18" />
            </button>
          </Buttons>
        </li>
        <li>
          <img src={juju} alt="naver" />
          <strong>Juliano Reis</strong>
          <p>Front-end Developer</p>
          <Buttons>
            <button class="remove" type="button">
              <FaTrash color="#000" size="18" />
            </button>
            <button class="edit" type="button">
              <FaPen color="#000" size="18" />
            </button>
          </Buttons>
        </li>
        <li>
          <img src={juju} alt="naver" />
          <strong>Juliano Reis</strong>
          <p>Front-end Developer</p>
          <Buttons>
            <button class="remove" type="button">
              <FaTrash color="#000" size="18" />
            </button>
            <button class="edit" type="button">
              <FaPen color="#000" size="18" />
            </button>
          </Buttons>
        </li>
        <li>
          <img src={juju} alt="naver" />
          <strong>Juliano Reis</strong>
          <p>Front-end Developer</p>
          <Buttons>
            <button class="remove" type="button">
              <FaTrash color="#000" size="18" />
            </button>
            <button class="edit" type="button">
              <FaPen color="#000" size="18" />
            </button>
          </Buttons>
        </li>
      </Content>
    </Container>
  );
}

export default Home;
