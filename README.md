- [Prerequisites for Frontend & client Developers](#prerequisites-for-frontend---client-developers)
  * [Getting Started](#getting-started)
  * [Creating DB on your docker container](#creating-db-on-your-docker-container)
  * [Tips: in case if you want to reset the whole database](#tips--in-case-if-you-want-to-reset-the-whole-database)
  * [Database Migrations](#database-migrations)
  * [Migrations](#migrations)
    + [Reverting Migrations](#reverting-migrations)
    + [Generating seed data](#generating-seed-data)
    + [Reverting Seed Data](#reverting-seed-data)
  * [Rebuilding the docker-compose](#rebuilding-the-docker-compose)
  * [Stopping the docker-compose after your development](#stopping-the-docker-compose-after-your-development)
- [Prerequisites for backend Developers](#prerequisites-for-backend-developers)
  * [Getting Started](#getting-started-1)
  * [Creating DB on your docker container](#creating-db-on-your-docker-container-1)
  * [Tips: in case if you want to reset the whole database](#tips--in-case-if-you-want-to-reset-the-whole-database-1)
  * [Database Migrations](#database-migrations-1)
  * [Migrations](#migrations-1)
    + [Reverting Migrations](#reverting-migrations-1)
    + [Generating seed data](#generating-seed-data-1)
    + [Reverting Seed Data](#reverting-seed-data-1)
  * [Starting the application for local development](#starting-the-application-for-local-development)


## Prerequisites for Frontend & client Developers

Before running this project, you must have the following installed on your machine:

-   [Docker](https://www.docker.com/)
-   [Docker Compose](https://docs.docker.com/compose/)

### Getting Started

To get started, follow these steps:

1.  Clone this repository to your local machine.
2.  Open a terminal and navigate to the root directory of the project.
3.  Run the following commands to start the services:

```
docker-compose up -d
``` 
**-d** to run in detach mode

After running the you should be able to call this url http://localhost:5000/health

### Creating DB on your docker container

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


### Database Migrations

To create table in your local development 
```
docker-compose exec server npm run db:migrate
```
### Migrations
#### Reverting Migrations
to revert all migrations in your development database 
```
 docker-compose exec server npm run db:migrate:revert:all
```

#### Generating seed data
Inorder to generate seed(dummy) data in your local development 
```
docker-compose exec server npm run db:seed:all
```

#### Reverting Seed Data
Inorder to revert seed(dummy) data in your local development 

```
docker-compose exec server npm run db:seed:undo:all
```


### Rebuilding the docker-compose 
In case if the new codes has pull from repository , you will need to rebuild the docker container
```
docker-compose build
```


### Stopping the docker-compose after your development

```
docker-compose down --remove-orphans 
```

## Prerequisites for backend Developers
Before running this project, you must have the following installed on your machine:

-   [Docker](https://www.docker.com/)
-   [Docker Compose](https://docs.docker.com/compose/)

### Getting Started

Open VScode and Run in devContainer

Afte the devContainer spin up 
1.  Run the following commands for database migrations

### Creating DB on your docker container

```
npm run db:create
```

to drop delete the database in your docker container
```
npm run db:drop
```
### Tips: in case if you want to reset the whole database
After dropping the db you will be able to see the following output
```
Sequelize CLI [Node: 18.15.0, CLI: 6.6.0, ORM: 6.30.0]

Loaded configuration file "sequalizeconfig.js".
Using environment "development".
Database db_restaurant dropped.
```


### Database Migrations

To create table in your local development 
```
npm run db:migrate
```
### Migrations
#### Reverting Migrations
to revert all migrations in your development database 
```
 npm run db:migrate:revert:all
```

#### Generating seed data
Inorder to generate seed(dummy) data in your local development 
```
npm run db:seed:all
```

#### Reverting Seed Data
Inorder to revert seed(dummy) data in your local development 

```
npm run db:seed:undo:all
```
### Starting the application for local development

```
npm run dev
```

then open url in http://localhost:5000/health