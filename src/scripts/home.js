import { api } from "../apis/api.js";

document.addEventListener("DOMContentLoaded", () => {
  const postContainer = document.getElementById("post-container");

  /**
   * Loads posts from the API and displays them.
   */
  async function loadPosts() {
    try {
      const posts = await api.post.getAll(); // Fetch all posts from the API
      postContainer.innerHTML = ""; // Clear the container

      posts.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.className = "post";

        postElement.innerHTML = `
          <h2>${post.title}</h2>
          <p>${post.story}</p>
          ${
            post.image
              ? `<img src="${post.image}" alt="Post Image" class="post-image">`
              : ""
          }
          <button class="delete-btn" data-id="${post.id}">Delete</button>
        `;

        postContainer.appendChild(postElement);
      });

      // Attach event listeners to delete buttons
      const deleteButtons = document.querySelectorAll(".delete-btn");
      deleteButtons.forEach((btn) =>
        btn.addEventListener("click", (event) => {
          const id = event.target.dataset.id;
          deletePost(id);
        })
      );
    } catch (error) {
      console.error("Error loading posts:", error);
      postContainer.innerHTML =
        "<p>Failed to load posts. Please try again later.</p>";
    }
  }

  /**
   * Deletes a post using the API by its ID.
   * @param {string} id - The ID of the post to delete.
   */
  async function deletePost(id) {
    try {
      await api.post.delete(id); // Delete post via API
      loadPosts(); // Reload posts
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("Failed to delete post. Please try again.");
    }
  }

  // Load posts on page load
  loadPosts();
});
