import API from "./api";

export const getFilms = async () => {
	return API.get(`films/`).then(response => response.data);
};
