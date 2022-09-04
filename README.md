# Backend Dev Test

#### By Lahcene Dergham

NodeJs + ExpressJs application based server that exposes a RESTful API

#### > The tools used

1- Development : - Node js - Express js
2- Deployment : - Heruko : [Link](https://nodejs-test-lahcene.herokuapp.com/) - Docker : to deploy the app with docker thes is two file : Dockerfile & docker compose file , just follow this steps
. in the project path :
`docker-compose build docker-compose up `
. the app will deployed on port 4000
3- Other tools: - Swagger : Simplify API development for users => /api-docs

#### The API Endpoints

- you will find all the routes in swagger endpoint - for heruko ([Swagger URI](https://nodejs-test-lahcene.herokuapp.com/api-docs)) & local server ([Swagger URI](http://localhost:4000/api-docs))

* Product Routes

  . GET /api/products return products

  . POST /api/products used to insert data to mongodb

  . GET /api/products/{categoryId} Returns products bycategory ID.

  . GET /api/products/{Id} Returns a product by ID.

  . DELETE /api/products/{Id} Delete a product by ID.

- Category Routes

  . GET /api/categories return categories

  . POST /api/categories used to insert data to mongodb

  . GET /api/categories/{Id} Returns a category by ID.

  . DELETE /api/categories/{Id} Delete a category by ID.
