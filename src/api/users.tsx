import API from "./api";

export const getUser = async (id: number) => {
	return API.get(`users/${id}`);
};

export const putUser = async (
	age: string,
	gender: string,
	occupation: number,
	occupationName: string,
	zipcode: string,
) => {
	return API.put("/users", {
		age,
		gender,
		occupation,
		occupationname: occupationName,
		zipcode,
	});
};
