module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a6906b2939fd61c079b9090ee44df5bb'),
  },
});
