import https from 'https';
import http from 'http';
import { ModuleOptions } from 'simple-oauth2';

export const clientCredentials = {
  client: {
    id: process.env.CLIENT_ID,
    secret: process.env.CLIENT_SECRET,
  },
  auth: {
    tokenHost: `${process.env.OAUTH_URL}:${process.env.OAUTH_PORT}`,
    tokenPath: '/oauth2/token',
  },
  http: {
    rejectUnauthorized: false, // only for development
    agents: {
      https: new https.Agent({ maxSockets: 100, rejectUnauthorized: true }),
      http: new http.Agent({ maxSockets: 1000 }),
      httpsAllowUnauthorized: new https.Agent({ maxSockets: 100, rejectUnauthorized: false }),
    },
  },
};

export const tokenConfig = {
  scope: 'what?',
  audience: 'kartoffel',
};
