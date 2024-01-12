const API_URL = "https://project-2-api.herokuapp.com";
const API_KEY = "?api_key=398a2341-b4fd-4bcc-8504-2999c933be53";

export const getVideosEndpoint = () => API_URL + "/videos" + API_KEY;
export const getVideoEndpoint = (videoId) => API_URL + "/videos/" + videoId + API_KEY;