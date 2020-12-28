export default {
  jwt: {
    secret: process.env.APP_SECRET || 'teste',
    expiresIn: '1d',
  },
};
