import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
 
 function Photos(){
    let jsonUser = localStorage.getItem("user");
    let user = JSON.parse(jsonUser);
    let userid = user.id;
    let {albumId} = useParams();
    const [photos, setPhotos] = useState([]);
    const [findPhotos, setFindPhotos] = useState(true);
  
    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
        .then((response) => response.json())
        .then((data) => setPhotos(data))
        .catch(() => setFindPhotos(false));
    },[userid]);

    if (findPhotos) {
        let photosHtml = photos.map((photo)=>
        (<div key={photo.id}>
            <img alt={photo.title} src={photo.thumbnailUrl}/>
        </div>));
        return (
          <div>
            {photosHtml}
          </div>
        );
      }
}
export default Photos;