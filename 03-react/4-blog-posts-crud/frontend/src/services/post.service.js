import axios from "../lib/axios";

// get all posts
export const getPosts = async () => {
  const { data } = await axios.get("/posts");
  return data;
};

// get a single post by id
export const getPostById = async (id) => {
  const { data } = await axios.get(`/posts/${id}`);
  return data;
};

// create a new post
export const createPost = async ({ title, content }) => {
  const { data } = await axios.post("/posts", {
    title,
    body: content,
  });
  return data;
};

// update a post by id
export const updatePost = async (id, { title, content }) => {
  const { data } = await axios.patch(`/posts/${id}`, {
    title,
    body: content,
  });
  return data;
};

// delete a post by id
export const deletePost = async (id) => {
  const { data } = await axios.delete(`/posts/${id}`);
  return data;
}