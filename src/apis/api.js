import { PostApi } from "./post.api.js";
import { UserApi } from "./user.api.js";

class Api {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.post = new PostApi(baseUrl);
    this.user = new UserApi(baseUrl);
  }
}

export const api = new Api("https://simple-blog-api-red.vercel.app/api");
