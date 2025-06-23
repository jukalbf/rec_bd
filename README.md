# Como rodar o código
1. Clone o repositorio e baixe as dependencias
```bash
# Clonar
git clone https://github.com/jukalbf/rec_bd.git

# Baixar as dependencias
npm install
```
2. Configurar .env
    * Crie um arquivo .env e adicione o link do mongodb
```.env
    # Exemplo
    MONGO_URI=mongodb+srv://<db_username>:<db_password>@clustergeral.rznqc.mongodb.net/?retryWrites=true&w=majority&appName=ClusterGeral=
    # Colocar as credenciais no lugar de <db_username> e <db_password>
```
3. Rode o projeto
```bash
node app.js
```


## Como visualizar as requisições
Como não foi desenvolvido um frontend para esse projeto, as formas de visualizar os resultados são:
1. Colocando as rotas diretamente no navegador
    * http://localhost:3030/
    * http://localhost:3030/genero
    * http://localhost:3030/ano
    * http://localhost:3030/listtenplus
    * http://localhost:3030/listtenless
    * http://localhost:3030/isbn
2. Utilizando o Postman ou Insomnia  
