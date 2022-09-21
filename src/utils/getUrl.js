import { API_KEY, SERVER_BASE_URL } from "../constants";

export const getUrl = (url) => `${SERVER_BASE_URL}${url}?api_key=${API_KEY}`;
