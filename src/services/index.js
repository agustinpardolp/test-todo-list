import { BASE_URL } from "../services/config/";
import axios from 'axios';

export const fetchTodoList = async () => {
    return axios.get(BASE_URL);
};