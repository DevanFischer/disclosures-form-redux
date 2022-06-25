import { clientTokens } from '../static/client/client_tokens';

export const getManyChatToken = async (companyAbbr) => {
  console.log(clientTokens);
  console.log(`companyAbbr: ${companyAbbr} clientTokens: ${clientTokens}`);
  const token = clientTokens[companyAbbr].mc_token;
  console.log(`token: ${token}`);
  console.log('oken');
  return token;
};
