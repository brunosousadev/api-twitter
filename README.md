# Adonis API application (Twitter)

Padrão para a criação de um servidor API no [Adonisjs](https://adonisjs.com), vem pré-configurado com.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds


A CLI do AdonisJs é uma ferramenta de linha de comando para ajudá-lo a instalar o AdonisJs.

Instale-o globalmente via npm da seguinte maneira:
```
npm i -g @adonisjs/cli
```
Depois de instalado, você pode usar o comando adonis new para criar novas instalações do AdonisJs.

Por exemplo, para criar um novo aplicativo chamado `yardstick`, basta:
```
adonis new yardstick
```
Após a conclusão do processo de instalação, você pode entrar no novo diretório de aplicativos e executar o seguinte comando para iniciar o Servidor.

```
cd yardstick
adonis serve --dev
```

Use o comando adonis para instalar o blueprint

```bash
adonis new yardstick --api-only
```

ou clone manualmente o repositório e execute `npm install`.


Rotas

```
┌───────────────┬──────────┬─────────────────────────────┬────────────┬───────────────┐
│ Route         │ Verb(s)  │ Handler                     │ Middleware │ Name          │
├───────────────┼──────────┼─────────────────────────────┼────────────┼───────────────┤
│ /register     │ POST     │ AuthController.register     │            │ /register     │
├───────────────┼──────────┼─────────────────────────────┼────────────┼───────────────┤
│ /authenticate │ POST     │ AuthController.authenticate │            │ /authenticate │
├───────────────┼──────────┼─────────────────────────────┼────────────┼───────────────|
│ /tweets       │ HEAD,GET │ TweetController.index       │ auth       │ tweets.index  │
├───────────────┼──────────┼─────────────────────────────┼────────────┼───────────────|
│ /tweets       │ POST     │ TweetController.store       │ auth       │ tweets.store  |
├───────────────┼──────────┼─────────────────────────────┼────────────┼───────────────┤
│ /tweets/:id   │ HEAD,GET │ TweetController.show        │ auth       │ tweets.show   │
├───────────────┼──────────┼─────────────────────────────┼────────────┼───────────────┤
│ /tweets/:id   │ DELETE   │ TweetController.destroy     │ auth       │ tweets.destroy│
└───────────────┴──────────┴─────────────────────────────┴────────────┴───────────────┘
```

