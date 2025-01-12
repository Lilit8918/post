import { api } from "./api.js";

const postsContainer = document.querySelector(".posts");

// Function to fetch and render posts
const fetchPosts = async () => {
    try {
        const posts = await api.posts.getAll(); // Replace this with your API method
        renderPosts(posts);
    } catch (error) {
        console.error("Error fetching posts:", error);
        postsContainer.innerHTML = "<p>Failed to load posts. Please try again later.</p>";
    }
};

// Function to render posts
const renderPosts = (posts) => {
    postsContainer.innerHTML = ""; // Clear existing posts
    posts.forEach((post) => {
        const postElement = `
            <div class="post-card">
                <img src="${post.img}" alt="${post.title}" class="post-image">
                <div>
                    <h2 class="post-title">${post.title}</h2>
                    <p class="post-story">${post.story}</p>
                    <p class="author-name">By: ${post.authorName}</p>
                </div>
            </div>
        `;
        postsContainer.innerHTML += postElement;
    });
};

// Initialize the app
fetchPosts();
