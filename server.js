import express from "express";
import routes from "./src/routes/postsRoutes.js"

const app = express();
app.use(express.static('uploads'));
routes(app)

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

/*
const postagens = [
    {
        id: 1,
        descricao: 'Gato brincando com bola de lã',
        imagem: 'https://placekitten.com/400/200'
    },
    {
        id: 2,
        descricao: 'Paisagem montanhosa',
        imagem: 'https://picsum.photos/seed/picsum/600/400'
    },
    {
        id: 3,
        descricao: 'Cachorro correndo na praia',
        imagem: 'https://random.dog/woof.jpg'
    },
    {
        id: 4,
        descricao: 'Comida caseira deliciosa',
        imagem: 'https://source.unsplash.com/random/food'
    },
    {
        id: 5,
        descricao: 'Desenho animado divertido',
        imagem: 'https://picsum.photos/200/300'
    }
];

// Orienta o servidor a trafegar as informações em json
app.use(express.json()); 


// Retornar todas postagens
app.get("/postagens", (req, res) => {
    res.status(200).json(postagens);
});

function buscar_postagem_por_id(id) {
    return postagens.findIndex((postagens) => {
        return postagens.id === Number(id)
    })
};

// Retornar postagem por id
app.get("/postagens/:id", (req, res) => {
    const index = buscar_postagem_por_id(req.params.id)
    
    res.status(200).json(postagens[index]);
});
*/
