# express-knex
A basic back-end boilerplate with Express and Knex SQL query builder.

# Installing and running

```sh
git clone git@github.com:mathieu-anderson/express-knex.git myProject
cd myProject
npm install
npm start
```

The server will be started at [http://localhost:3001/](http://localhost:3001/). You can then go to [http://localhost:3001/api/v1/users](http://localhost:3000/api/v1/users) to see your users list.

# Initializing the SQLite3 db

You might need to install Knex globally to access the command line tools (`npm install -g knex`)

```sh
knex migrate:latest
knex seed:run
```

