import API from "./api";

export const getFilms = async () => {
	return API.get(`films/`).then(response => response.data);
};

export const searchFilms = async (value) => {
	return API.get(`films/`).then(response => response.data);
};