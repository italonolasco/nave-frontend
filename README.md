# Desafio de Cadastro de Vagas - Nave Frontend Challenge

Este projeto foi elaborado para servir a uma aplicação one seja possível cadastrar e administrar funcionários da empresa Nave.

### Tecnologias Utilizadas
* Rect
* React Router Dom
* Context API
* Axios
* React Modal
* Unform
* React Toastify
* Hooks
* React Icons

A aplicação foi construida utilizando Yarn. Após montar a aplicação, é necessário rodar o comando "yarn start".

### Funcionalidade Extras
* Caso não seja possível realizar login, adicionar, editar ou deletar usuários, um toast aparecerá na tela avisando ao usuário.
* Os inputs foram criados para seus respectivos tipos. Por exemplo, uma entrada de e-mail, só permite uma entrada do tipo "..."@email..."

#### Dificuldades
Comecei o projeto utilizando Redux para persistir os dados, mesmo sabendo que estava adicionando uma complexidade extra ao projeto. Ao me deparar com erros, retirei um dia para estudar Context API e notei que era bem simples resolver assim.

Em alguns momentos encontrei instbilidades ao enviar os dados para o backend, porém acredito que possa ter sido alguma instabilidade no sistema em que o mesmo está hospedado, visto que alguns minutos mais tarde tuo voltou a funcionar.

#### Observações
Por o foco do desafio ser, principalmente, no Javascript e não no CSS, não me preocupei em deixar o front tão responsivo.

#### Não utilizei o GET para buscar um naver específico, na rota naver/:id, visto que quando a página Home é carregada todos os usuários já são carregados no sistema, então apenas persisti este usuário quando foi necessário, evitando assim, chamadas adicionais à API. 
