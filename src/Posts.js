import React, { useState, useEffect } from 'react';

function Posts() {
  let jsonUser = localStorage.getItem("user");
  let user = JSON.parse(jsonUser);
  let userid = user.id;

  const [posts, setPosts] = useState([]);
  const [findPosts, setFindPosts] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userid}`)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch(() => setFindPosts(false));
  }, [userid]);

  if (findPosts) {
    let postsHtml = posts.map((post) => <p key={post.id}>{post.title}</p>);
    return (
      <div>
        {postsHtml}
      </div>
    );
  }

  return (
    <h2>There are no posts</h2>
  );
}

export default Posts;
