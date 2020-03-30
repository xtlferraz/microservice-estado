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
    client: 'postgresql',
    connection: {
      database: 'ec2-23-22-156-110.compute-1.amazonaws.com',
      user:     'zonfaemufusuum',
      password: '836cb320b31e68ce07da92bcea611f590a91e5c0a33bb5be16bd40e017878c43'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
