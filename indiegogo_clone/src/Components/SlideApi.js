import Axios from "axios";

const axios = Axios.create({
	baseURL: "https://onp995.sse.codesandbox.io",
	headers: {
		"Content-type": "application/json",
	},
});
export const getArticles = (page, limit = 4) => {
    // console.log(page,limit)
	return axios.get("/campaign", {
		params: {
			_page:page,
			_limit:limit,
		},
	});
};
