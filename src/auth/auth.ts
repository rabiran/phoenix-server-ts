import simpleOauth, { AccessToken } from 'simple-oauth2';
import { clientCredentials, tokenConfig } from './oauthConfig';

let accessToken: AccessToken | null = null;
const oauth2Flow = simpleOauth.create(clientCredentials as any);
const clientCredentialsFlow = oauth2Flow.clientCredentials.getToken.bind({}, tokenConfig);

/**
 * Returns access token from the auth server
 */
export async function getToken() {
  // if there is a token and it's not expired
  if (accessToken && !accessToken.expired()) {
    return accessToken.token.access_token;
  }
  // create new token
  const result = await clientCredentialsFlow();
  accessToken = oauth2Flow.accessToken.create(result);
  return accessToken.token.access_token;
}
