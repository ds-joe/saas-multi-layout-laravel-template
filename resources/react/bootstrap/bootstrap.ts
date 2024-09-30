// Dependencies
import axios from 'axios';
import Router from '@/Services/Router';

// Axios
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// Router
window.routerService = new Router();
