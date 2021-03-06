
// required environment variables
[
    'NODE_ENV',
    'PORT'
].forEach((name) => {
    if (!process.env[name]) {
        throw new Error(`Environment variable ${name} is missing`);
    }
});
  
const config = {
    env: process.env.NODE_ENV,
    port: process.env.PORT || 3001,
    secret: process.env.SECRET
}

module.exports = config;