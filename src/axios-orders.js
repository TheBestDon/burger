import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-e7376.firebaseio.com/"
});

export default instance;