import React, { useState, useEffect } from 'react';

function Albums() {
  let jsonUser = localStorage.getItem("user");
  let user = JSON.parse(jsonUser);
  let userid = user.id;

  const [albums, setAlbums] = useState([]);
  const [findAlbums, setFindAlbums] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userid}`)
      .then((response) => response.json())
      .then((data) => setAlbums(data))
      .catch(() => setFindAlbums(false));
  },[userid]);

  if (findAlbums) {
    let albumsHtml = albums.map((album) => <p key={album.id}> {album.title}</p>);
    return (
      <div>
        {albumsHtml}
      </div>
    );
  }

  return (
    <h2>There are no posts</h2>
  );
}

export default Albums;
