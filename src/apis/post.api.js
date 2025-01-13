export class PostApi {
  constructor(baseUrl) {
    this.baseUrl = `${baseUrl}/posts`;
  }

  /**
   * Fetch all posts from the server.
   * @returns {Promise<Array>} List of posts.
   */
  async getAll() {
    const response = await fetch(this.baseUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    return response.json();
  }

  /**
   * Delete a post by its ID.
   * @param {string} id - The ID of the post to delete.
   * @returns {Promise<void>}
   */
  async delete(id) {
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete post");
    }
  }
}
