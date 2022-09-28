<h1 align="center">
	<img alt="Logo NLW eSports" src="https://github.com/felipejesus-front/NLW-esports-web.mobile/blob/main/web/src/assets/Logo.svg" />
</h1>

<h3 align="center">
  Project developed during the Next Level Week - eSports Ignite
</h3>

<p align="center">
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#ℹ%EF%B8%8F-how-to-use">How to Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/felipejesus-front/NLW-esports-web.mobile">

  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/felipejesus-front/NLW-esports-web.mobile">

  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/felipejesus-front/NLW-esports-web.mobile">

  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/felipejesus-front/NLW-esports-web.mobile">

</p>

<br/>

## 💻 Projeto

NLW-esports é uma aplicação para encontrar companheiros de jogatina, onde você cria um anúncio com suas informações e horas disponiveis pra jogar e outra pessoa pode se interessar pelo seu perfil e iniciar uma amizade para poder jogar com você.

O frontEnd da aplicação é dividido em duas partes. A parte de cadastro é feita toda no aplicativo web. A parte de listagem de anúncios fica exclusivamente na aplicação web. essa separação foi feita para termos a oportunidade de aprender duas tecnologias numa tacada só.

O backEnd da aplicaçao foi feito em node com adição do prisma para facilitar a manipulação do banco(sqlite).

## 🚀 Tecnologias

O projeto foi desenvolvido com as seguintes tecnologias:

> Global

-   [Yarn](https://yarnpkg.com) or Npm
-   [VSCode](https://code.visualstudio.com)
-   [Git Bash](https://gitforwindows.org/)
    > Frontend Web
-   [ReactJS](https://reactjs.org)
-   [Vite](https://vitejs.dev/)
-   [Tailwindcss](https://tailwindcss.com/)
    > Frontend Mobile
-   [React Native](https://reactnative.dev/)
-   [Radix-UI](https://www.radix-ui.com/)
    > Backend
-   [NodeJS](https://nodejs.org/en/)
-   [Express](https://expressjs.com/pt-br/)
-   [Prisma](https://www.prisma.io/)

## 🔖 Layout

## ℹ️ How To Use

```bash
# Clone o repositório
$ git clone https://github.com/felipejesus-front/NLW-esports-web.mobile.git
```

### 🖥️ Web App

```bash
# navegue até a pasta web
$ cd NLW-esports-web.mobile/web

# Instale as dependencias
$ npm install

# Rode o server em modo desenvolvedor
$ npm run dev

# O app irá abrir uma tela com a aplicação. A cada modificação salva a aplicação reiniciará
```

### 📱 Mobile App

```bash
# vá até a pasta mobile
$ cd NLW-esports-web.mobile/mobile

# Instale as dependencias
$ npm install

# Caso for utilizar emulação abra o emulador antes de rodar o projeto para evitar bugs

# Rode o projeto
$ expo start

# Ao iniciar o Metro Bundler, Aparecerão as opções para utilizar o aplicativo. Apertando A ele inicia num dispositivo e Apertando R ele Atualiza a aplicação no dispositivo, por exemplo.
```

### ⚙️ Server API

```bash
# Navegue para a pasta server
$ cd NLW-esports-web.mobile/server

# Instale as dependencias
$ npm install

# Crie um arquico .env no repositório e adicione a seguinte linha a ele
DATABASE_URL="file:../src/database/db.sqlite"

# Rode o modo de desenvolvimento
$ npm run start
```

## 📝 Licença

This project is under the MIT license. See the [LICENSE](LICENSE.md) for more information.
