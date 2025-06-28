# **Buscador de Filmes (JavaScript/Node.js)**

Este projeto é um simples buscador de filmes via linha de comando (CLI) que permite consultar informações sobre filmes utilizando a **OMDB API (The Open Movie Database)**. Desenvolvido em **JavaScript** com **Node.js** e a biblioteca **Axios**, ele demonstra a integração com APIs externas e a interação básica com o usuário no terminal.

-----

## **Funcionalidades**

  * **Busca por Título:** Permite ao usuário digitar o título de um filme para buscar informações.
  * **Exibição de Resultados:** Apresenta uma lista de filmes encontrados com detalhes como título, ano, tipo e IMDb ID.
  * **Tratamento de Erros:** Gerencia diversos cenários de erro, como falhas na conexão, respostas inválidas da API e filmes não encontrados.
  * **Variáveis de Ambiente:** Utiliza o arquivo `.env` para armazenar de forma segura a chave da API.

-----

## **Tecnologias Utilizadas**

  * **JavaScript:** Linguagem de programação principal.
  * **Node.js:** Ambiente de execução JavaScript no lado do servidor.
  * **Axios:** Cliente HTTP baseado em Promises para fazer requisições a APIs.
  * **Dotenv:** Biblioteca para carregar variáveis de ambiente de um arquivo `.env`.
  * **Readline (Módulo Nativo do Node.js):** Para interação com o usuário via linha de comando.
  * **OMDB API:** API externa utilizada para buscar dados dos filmes.

-----

## **Como Rodar o Projeto**

Siga os passos abaixo para configurar e executar este buscador de filmes na sua máquina.

### **1. Pré-requisitos**

Certifique-se de ter o [Node.js](https://nodejs.org/en/download/) e o `npm` (gerenciador de pacotes do Node.js, que vem junto com o Node.js) instalados em seu sistema.

### **2. Obtenha Sua Chave de API da OMDB**

Este projeto requer uma chave de API gratuita da OMDB.

1.  Acesse [**OMDBAPI**](http://www.omdbapi.com/).
2.  Clique em "API Key" e preencha o formulário para receber sua chave por e-mail.

### **3. Configuração do Projeto**

1.  **Clone este repositório:**

    ```bash
    git clone https://github.com/jvictorpdl/buscador-filmes.git
    cd buscador-filmes # Navegue até a pasta do projeto
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    ```

3.  **Crie o arquivo `.env`:**
    Na raiz do projeto (`buscador-filmes-js`), crie um arquivo chamado `.env` e adicione sua chave de API nele:

    ```env
    OMDB_API_KEY="SUA_CHAVE_OMDB_AQUI"
    ```

    *(Substitua `"SUA_CHAVE_OMDB_AQUI"` pela chave que você obteve no passo 2.)*

4.  **Verifique o `.gitignore`:**
    Certifique-se de que seu arquivo `.gitignore` (também na raiz do projeto) contenha as seguintes linhas para evitar que arquivos desnecessários ou sensíveis sejam versionados:

    ```
    node_modules/
    .env
    ```

### **4. Executando o Buscador**

Com todas as configurações feitas, você pode iniciar o projeto:

```bash
node index.js
```

O programa irá iniciar e pedir que você digite o título de um filme. Digite um título (ex: `Inception`, `Matrix`, `Interstellar`) e pressione `Enter`. Para sair do programa, digite `sair`.

-----

## **Próximos Passos (Possíveis Melhorias)**

  * Adicionar validação de entrada do usuário.
  * Permitir a busca por outros critérios (ex: ano, diretor).
  * Exibir detalhes mais aprofundados do filme selecionado.
  * Integrar com outras APIs para informações adicionais (ex: trailers, elenco).

-----
