/**
 * Represents a tag.
 *
 * @typedef {Object} Tag
 * @property {number} id - The tag ID.
 * @property {string} title - The tag title.
 */
/**
 * Represents a post.
 *
 * @typedef {Object} Post
 * @property {number} id - The post ID.
 * @property {number} topic_id - The topic ID.
 * @property {number} user_id - The user ID.
 * @property {Tag[]} tags - The tag IDs.
 * @property {string} content - The post content.
 * @property {Date} createdAt - The date and time when the post was created.
 * @property {Date} updatedAt - The date and time when the post was last updated.
 */
/**
 * Represents a response with pagination.
 * 
 * @template T
 * @typedef {Object} PageResponse
 * @property {number} count - The total number of items.
 * @property {string} [next] - The URL to retrieve the next page.
 * @property {string} [previous] - The URL to retrieve the previous page.
 * @property {T[]} results - The list of items in the current page.
 */
