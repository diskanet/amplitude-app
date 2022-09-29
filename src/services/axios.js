import { SERVER_BASE_URL, API_KEY } from "../constants";
import axios from "axios";

export const instance = axios.create({
  baseURL: SERVER_BASE_URL,
  params: { api_key: API_KEY },
});
