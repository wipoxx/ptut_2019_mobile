import API from "./api";

export const getUser = async (id: number) => {
	return API.get(`users/${id}`);
};
