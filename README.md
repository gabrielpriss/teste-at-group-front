# Teste Front-At-Group!

Projeto Front-end para At Group.

<details>
  <summary><strong>💻 O que está sendo desenvolvido</strong></summary><br />
  Uma interface front-end com React que consome a PokéAPI, renderiza a lista de Pokémons e e atributos de cada um deles. 

</details>

<details>
  <summary><strong>Rodando o projeto</strong></summary><br />

  1. Clone o repositório
      * `git clone https://github.com/gabrielpriss/teste-at-group-front.git`.
    * Entre na pasta do repositório:
      * `cd teste-at-group-front`

  2. Instale as dependências (na raiz do projeto)
    * `npm install`
  
  3. Para iniciar a aplicação utilizando Docker, inicie o serviço, e na pasta raiz do projeto, rode os scripts responsáveis por buildar e iniciar o React:
  * ex: `sudo service docker start`
  * `docker build -t test-front-atgroup .`
  * `docker run -p 3000:3000 test-front-atgroup`

  4. Para iniciar a aplicação localmente sem Docker, no diretório raiz do projeto, rode o script responsável por iniciar o React:
  * `npm start`

  Se você não tiver nenhuma outra aplicação rodando nessa porta, o React iniciará na url `http://localhost:3000/`.
</details>
