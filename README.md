# jdev-restaurant-rating-backend

## Prerequisites

Before running this project, you must have the following installed on your machine:

-   [Docker](https://www.docker.com/)
-   [Docker Compose](https://docs.docker.com/compose/)

## Getting Started

To get started, follow these steps:

1.  Clone this repository to your local machine.
2.  Open a terminal and navigate to the root directory of the project.
3.  Run the following command to start the services:

```
docker-compose up -d
``` 
**-d** to run in detach mode

After running the you should be able to call this url http://localhost:5000/health

## Creating DB on your docker container

```
docker-compose exec server npm run db:create
```

to drop delete the database in your docker container
```
docker-compose exec server npm run db:drop
```
### Tips: in case if you want to reset the whole database
After dropping the db you will be able to see the following output
```
Sequelize CLI [Node: 18.15.0, CLI: 6.6.0, ORM: 6.30.0]

Loaded configuration file "sequalizeconfig.js".
Using environment "development".
Database db_restaurant dropped.
```


## Database Migrations

To create table in your local development 
```
docker-compose exec server npm run db:migrate
```
## Migrations
### Reverting Migrations
to revert all migrations in your development database 
```
 docker-compose exec server npm run db:migrate:revert:all
```

### Generating seed data
Inorder to generate seed(dummy) data in your local development 
```
docker-compose exec server npm run db:seed:all
```

### Reverting Seed Data
Inorder to revert seed(dummy) data in your local development 

```
docker-compose exec server npm run db:seed:undo:all
```


## Rebuilding the docker-compose 
In case if the new codes has pull from repository , you will need to rebuild the docker container
```
docker-compose build
```


## Stopping the docker-compose after your development

```
docker-compose down --remove-orphans 
```

