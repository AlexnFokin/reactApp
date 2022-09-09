import axios from "axios";

export default class PostService {

  static async getAll(limint = 10, page = 1) {

      const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
          _limit: limint,
          _page: page
        }
      })
      return response
  }

  static async getById(id) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    return response;
  }

  static async getCommentsByPostId(id) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    return response;
  }
}