require('dotenv').config(); 
const axios = require('axios');
const readline = require('readline'); 

const OMDB_API_KEY = process.env.OMDB_API_KEY;

// Para caso alguem baixe o projeto e esqueça de configurar a chave na .env
if (!OMDB_API_KEY) {
    console.error("Erro: A variável de ambiente OMDB_API_KEY não está configurada.");
    console.error("Por favor, crie um arquivo .env na raiz do projeto com OMDB_API_KEY='SUA_CHAVE_OMDB_AQUI'.");
    process.exit(1); 
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function searchMovie(title) {
    /**
     * Busca filmes pelo título.
     *
     * @param {string} title - O título do filme a ser buscado.
     * @returns {Promise<Array|null>} Uma lista de filmes encontrados ou null em caso de erro.
     */
    const baseUrl = "http://www.omdbapi.com/";
    const params = {
        s: title, // 's' para busca (search)
        apikey: OMDB_API_KEY
    };

    console.log(`\nBuscando filmes com o título: "${title}"...`);

    try {
        const response = await axios.get(baseUrl, { params: params });
        const data = response.data;

        if (data.Response === "True") {
            return data.Search; // Retorna a lista de filmes
        } else {
            console.log(`Nenhum filme encontrado para "${title}".`);
            console.log(`Mensagem da API: ${data.Error}`);
            return null;
        }

    } catch (error) {
        if (error.response) {
            console.error(`Erro HTTP ao buscar filmes: ${error.response.status}`);
            console.error(`Resposta da API: ${JSON.stringify(error.response.data)}`);
        } else if (error.request) {
            console.error("Erro de Conexão: Nenhuma resposta recebida. Verifique sua conexão com a internet.");
        } else {
            console.error(`Erro inesperado na requisição: ${error.message}`);
        }
        return null;
    }
}

async function main() {
    rl.question('Digite o título de um filme para buscar (ou "sair" para encerrar): ', async (answer) => {
        if (answer.toLowerCase() === 'sair') {
            console.log("Encerrando o buscador de filmes. Até mais!");
            rl.close(); 
            return;
        }

        const movies = await searchMovie(answer);

        if (movies) {
            console.log("\n--- Filmes Encontrados ---");
            movies.forEach((movie, index) => {
                console.log(`${index + 1}. Título: ${movie.Title}`);
                console.log(`   Ano: ${movie.Year}`);
                console.log(`   Tipo: ${movie.Type}`);
                console.log(`   IMDb ID: ${movie.imdbID}`);
                console.log("--------------------------");
            });
        }

        main();
    });
}

main();