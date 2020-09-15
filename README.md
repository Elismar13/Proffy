<h1 align="center">
  Proffy
</h1>
<p align="center">
  <img src="./.github/landing.png">
</p>

> Uma plataforma para conectar profesores e estudantes.

Proffy é um sistema que busca conectar estudantes do ensino médio com professores disposto a ensina-los. O intuito da aplicação é ajudar os estudantes no processo de formação e pré-vestibular. Desenvolvido ao longo da NLW2 :rocket:!

![](../header.png)

## :heavy_plus_sign: Extras deste repositório

 - back-end
    - Autenticação JWT (em desenvolvimento);
    - Cadrasto usando e-mail (em desenvolvimento);
    - Criptografia da senha do usuário;

  - front-end e mobile:
    - Styled components;
    - Animações (em desenvolvimento)
## :package: Pré-requisitos

- [Node.js](https://nodejs.org/en/) v12.06 ou superior;
- CLI do [Expo](https://docs.expo.io/)
- Um gerenciador de pacotes de sua preferência (npm/yarn);

## :rocket: Instalação
#### Backend 

```sh
cd backend/
#instala as dependências de terceiros
yarn install 
```

Agora você precisa das migrations (versionamento) do banco de dados. 
Para isto, rode:
```sh
# Criando as migrations
yarn knex:migrate
```

Inicie o servidor do projeto:
```sh
# Criando as migrations
yarn start
```
#### Web

```sh
cd web/
#instala as dependências de terceiros
yarn install
yarn start
```

#### Mobile

```sh
cd mobile/
#instala as dependências de terceiros
yarn install
expo start ou yarn start
```


## :chart: Desafios


- [ ] Tela de Splash
- [ ] Update do layout
    - [ ] Login
        - [ ] Lembrar de mim
    - [ ] Entrar
    - [ ] Sucesso
- [ ] Autenticação
    - [ ] Web
    - [ ] Mobile
- [ ] Logout
- [ ] Professores favoritos
- [ ] Sistema de avaliação
- [ ] Esqueci minha senha
- [ ] Tela do professor
- [ ] Paginação dos resultados
- [ ] Horários de atendimento
- [ ] Deploy


## :tada: Histórico de lançamentos

* 0.1.0
    * backend, mobile e web integrados
* 0.0.1
    * Trabalho em andamento

## Meta

Elismar13 – [@thushima](https://twitter.com/)

Distribuído sob a licença XYZ. Veja `LICENSE` para mais informações.


## :rocket: Contributing

1. Faça o _fork_ do projeto (<https://github.com/Elismar13/proffy/fork>)
2. Crie uma _branch_ para sua modificação (`git checkout -b feature/fooBar`)
3. Faça o _commit_ (`git commit -am 'Add some fooBar'`)
4. _Push_ (`git push origin feature/fooBar`)
5. Crie um novo _Pull Request_
