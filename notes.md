steps

-git status
-mkdir <folder name>
-cd <folder name>
-git init
-npm init -y
-code .
-npm i nodemon -D <- install nodemon as a development time dependency
-npx gitignore node
-



endpoint( url + heep method ) === function

POST /api/movies (body: movie) === postApiMovies(movie)

|non REST| REST |
|:--|:--|
|/createMovie| Post /api/movies |
|/removeMove/:id | DELETE /api/movies/:id |

Other Approaches to building Web API:
-GraphQL
-gRPC
-RPC
-SOAP