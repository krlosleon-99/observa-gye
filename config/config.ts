const config = {
  database: {
    host: process.env.HOST_DB,
    port: parseInt(process.env.PORT_DB || "5432"), // Cambia el puerto predeterminado a 5432
    database: process.env.NAME_DB,
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    ssl: {
      rejectUnauthorized: false, // Permite conexiones SSL sin verificar el certificado
    },
  },
  server: {
    port: 2500, // Puerto del servidor
  },
  retryConfig: {
    maxRetries: 5,        // Número máximo de reintentos para conexiones fallidas
    retryDelay: 5000,     // Tiempo de espera entre intentos en milisegundos
  },
  firebase: {
    type: "service_account",
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
    private_key: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, '\n'),
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    client_id: process.env.FIREBASE_CLIENT_ID,
    auth_uri: process.env.FIREBASE_AUTH_URI,
    token_uri: process.env.FIREBASE_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_CERT_URL,
    client_x509_cert_url: process.env.FIREBASE_CLIENT_CERT_URL,
  },
};
console.log('FIREBASE_PRIVATE_KEY:', process.env.FIREBASE_PRIVATE_KEY);

export default config;