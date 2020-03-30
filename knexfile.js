// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/infra/database/sqlite/db.sqlite3'
    },
    migrations:{
      directory:'./src/infra/database/migrations'
    },
    seeds: {
      directory: './src/infra/database/seeds'
    },
    useNullAsDefault:true
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'sqlite3',
    connection: {
      filename: './src/infra/database/sqlite/db.sqlite3'
    },
    migrations:{
      directory:'./src/infra/database/migrations'
    },
    useNullAsDefault:true
  }

};
