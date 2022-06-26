import clientTokens from '../static/client/client_tokens.json';

export const getManyChatToken = async (companyAbbr) => {
  // Look for the company in the clientTokens object and return the mc_token if found or null if not found.
  return clientTokens[companyAbbr] ? clientTokens[companyAbbr].mc_token : null;
};
