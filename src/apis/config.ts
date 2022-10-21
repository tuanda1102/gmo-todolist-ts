import { constants } from "./../configs/constants";
import axios from "axios";

const axiosClient = axios.create({
  baseURL: constants.BASE_URL,
});

export default axiosClient;
