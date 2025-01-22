import api from "./base";

/**
 * Get the list of all posts.
 *
 * @param {number} [pageNumber=1] - The page number to retrieve.
 * @returns {Promise<PageResponse<Post>>>} - The list of posts.
 */
export const getPosts = async (pageNumber=1) => {
  const res = await api.get(`/posts/?page=${pageNumber}`);
  return res.data;
}
