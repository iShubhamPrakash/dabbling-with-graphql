let { data } = require("../../db/data");

let rootResolver = {
  users: () => data.users,
  posts: () => data.posts,
  user: ({id}) => {
    return data.users.filter((user)=>user.id === id)[0]
  },
  post: ({id}) => {
    return data.posts.filter((post)=>post.id === id)[0]
  }

};

module.exports = {
  rootResolver
}