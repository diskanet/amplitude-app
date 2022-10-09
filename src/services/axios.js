import axios from "axios";

import { API_KEY, SERVER_BASE_URL } from "@constants";

export const instance = axios.create({
  baseURL: SERVER_BASE_URL,
  params: { api_key: API_KEY },
});
