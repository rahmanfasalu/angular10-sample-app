import { environment } from '../../environments/environment';

export const API_ENDPOINTS = {
  getAllrecipe: `getAllrecipe`,
  getRecipeById: `getRecipeById?q=##`,
};

export const getAPIURL = () => {
  return environment.apiEndpoint;
};
