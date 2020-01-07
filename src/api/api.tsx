import axios from "axios";

const baseURL = "http://localhost:3000/";

const instance = axios.create({
	baseURL: baseURL,
});

instance.interceptors.response.use(
	response => {
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		return response;
	},
	error => {
		console.log("error.request._response: ", error.request._response);
		console.log("error.request._url: ", error.request._url);
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		return Promise.reject(error);
	},
);

export default instance;
