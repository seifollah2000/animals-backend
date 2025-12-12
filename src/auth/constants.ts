export const jwtConstants = {
  secret: process.env.JWT_SECRET || 'hard!to-guess_secret',
  expiresIn: '1h',
  refreshExpiresIn: '7d',
};
