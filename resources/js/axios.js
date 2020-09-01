import axios from "axios";

axios.defaults.headers.post['X-CSRF-Token'] = document.querySelector("meta[name='token']").content;

export default axios;
