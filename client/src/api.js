import axios from "axios";
const url = "/api/post";

export default class API {
  // To get all the posts from the server
  static async getAllPost() {
    const res = await axios.get(url);
    return res.data;
  }

  // To get a single post by id
  static async getPostByID(id) {
    const res = await axios.get(`${url}/${id}`);
    return res.data;
  }

  // To insert post into database
  static async addPost(post) {
    const res = await axios.post(url, post);
    return res.data;
  }

  // To update post into database
  static async updatePost(id, post) {
    const res = await axios.patch(`${url}/${id}`, post);
    return res.data;
  }

  // To delete a post
  static async deletePost(id) {
    const res = await axios.delete(`${url}/${id}`);
    return res.data;
  }
}
