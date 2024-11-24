Versão do Node.js:
	mode -v

Criar o packet.json do projeto:
	npm init es6 -y

Instalar o Express e suas dependências:
	npm install express
	

Subir o servidor:
	node server.js

Subir o servidor e reiniciar sempre que o arquivo js for salvo:
	node --watch server.js

Explicação lúdica sobre requisições http:
	https://http.cat/


Instalar Driver MongoDB:
	npm install mongodb


Testar se as variáveis de ambiente estão carregando (inserir dentro de server.js)
    console.log(process.env.STRING_CONEXAO_MONGODB);

Subir o servidor utilizando o script dev criado dentro do packet.json:
	npm run dev

Extensão do VSCode para trabalhar com API:
	Thunder Client

Instalar no Node.js interface para gerenciamento de arquivos e pastas
	npm install multer

Instalar dependência do Gemini
	npm i @google/generative-ai

Instalar dependência para permitir ao servidor receber requisições externas
	npm i cors