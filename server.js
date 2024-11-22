import express from "express";
import routes from "./src/routes/postsRoutes.js";
// Importa o framework Express.js para criar a aplicação web.

const app = express();
// Cria uma instância do Express.js, que será o núcleo da aplicação.

app.use(express.static("uploads")); // Permite que os usuarios acessem a pasta de uploads

routes(app);


app.listen(3000, () => {
    console.log("Server listening...");
});
// Inicia o servidor Express.js na porta 3000 e exibe uma mensagem no console quando o servidor estiver ouvindo por requisições.


// Status Http: http.cat
