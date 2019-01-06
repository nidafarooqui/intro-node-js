const api = {};
const {users, posts: postData}  = require('./data');

api.getUserById = (id, cb) => {
  // simulate API call
  setTimeout(() => {
    const user = users.find(user => user.id === id)
    cb(user)
  }, 150)
}

api.getPostsForUser = (userId, cb) => {
  // simulate API call
  setTimeout(() => {
    const posts = postData.filter(post => post.createdBy === userId)
    cb(posts)
  }, 150)
}

module.exports = api;
