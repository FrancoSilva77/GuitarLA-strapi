module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cdjufq4gqg433feioolg-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_vja6'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'x83k7j4LG4uGKPSAZ4UnzDmvFo6TrItf'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
