import axios from 'axios';

const host = process.env.REACT_APP_ENVIRONMENT ? process.env.REACT_APP_ENVIRONMENT : 'http://localhost:3001/api';

const apiClient = () => {
	const options = {
		baseURL: host
	}

	let axiosClient = axios.create(options);

	console.log('axios client config', axiosClient.interceptors.request);
	axiosClient.interceptors.request.use(config => {
		console.log('config', config);
        const token = localStorage.getItem('user_token');
		config.headers.Authorization = token ? `Bearer ${token}` : '';
		return config;
	});
	
	return axiosClient;
};



export default apiClient();
