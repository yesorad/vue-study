import axios from "axios";

const API_URL = "http://sjahn.pythonanywhere.com/api";

const instance = axios.create({ baseURL: API_URL });

export default instance;
