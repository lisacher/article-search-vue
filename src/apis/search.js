import { apiHelper } from "./../utils/helpers";

export default {
  getSearch({ q, t }) {
    const searchParams = new URLSearchParams({ q, t });
    return apiHelper.get(`/search?${searchParams.toString()}`);
  },
  getTopics() {
    return apiHelper.get("/topics");
  },
};
