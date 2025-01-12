export class PostApi {
    constructor(baseUrl) {
      this.baseUrl = baseUrl;
    }
  
    async getPosts() {
      const response = await fetch(`${this.baseUrl}/posts`);
      return response.json();
    }
  
    async create(post) {
      const response = await fetch(`${this.baseUrl}/posts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post),
      });
      return response.json();
    }
  
    async update(id, post) {
      const response = await fetch(`${this.baseUrl}/posts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post),
      });
      return response.json();
    }
  
    async delete(id) {
      return fetch(`${this.baseUrl}/posts/${id}`, { method: "DELETE" });
    }
  }
  