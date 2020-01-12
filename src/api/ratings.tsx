import API from "./api";

export const putRating = async (id_user, id_movie, rate) => {
    var headers = { headers: {'Content-Type': 'application/json'} };
    var content = {
        "user_id": id_user, 
        "movie_id": id_movie, 
        "rating": rate
    }
	return API.patch(`ratings/`, content, headers);
};
