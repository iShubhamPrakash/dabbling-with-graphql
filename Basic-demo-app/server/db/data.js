let data ={
  users: [
    {
      id: "1",
      name: "Shubham Prakash",
      email: "shubham.prakash2308@gmail.com",
    },
    {
      id: "2",
      name: "John Doe",
      email: "john@gmail.com",
    }
  ],
  posts: [
    {
      id: "1",
      body: "Hello world this is my first post",
      authorId: "1",
    },
    {
      id: "2",
      body: "Another post",
      authorId: "2",
    },
    {
      id: "3",
      body: "Another post by shubham",
      authorId: "1",
    }
  ],
  comments: [
    {
      id: "1",
      body: "Hello this is a comment",
      postId: "1",
      authorId: "1"
    },
    {
      id: "2",
      body: "This is another comment",
      postId: "1",
      authorId: "2"
    }
  ]
}

module.exports = {
  data
}