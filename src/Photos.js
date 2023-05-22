import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
 
 function Photos(){
    let jsonUser = localStorage.getItem("user");
    let user = JSON.parse(jsonUser);
    let userid = user.id;
    let {albumId} = useParams();
    const [photos, setPhotos] = useState([]);
    const [findPhotos, setFindPhotos] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const photosContainerRef = useRef(null);
  
    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
        .then((response) => response.json())
        .then((data) => setPhotos(data))
        .catch(() => setFindPhotos(false));
    },[userid, albumId]);

    useEffect(() => {
        const handleScroll = () => {
          const container = photosContainerRef.current;
          const containerHeight = container.offsetHeight;
          const scrollTop = container.scrollTop;
          const scrollHeight = container.scrollHeight;
    
          if (scrollHeight - scrollTop === containerHeight) {
            loadMorePhotos();
          }
        };
    
        const loadMorePhotos = () => {
          // Simulating loading more photos
          setIsLoading(true);
          setTimeout(() => {
            // Add more photos to the existing list or fetch from API
            setIsLoading(false);
          }, 1000);
        };
    
        photosContainerRef.current.addEventListener('scroll', handleScroll);
    
        return () => {
          photosContainerRef.current.removeEventListener('scroll', handleScroll);
        };
      }, [photos]);

    if (findPhotos) {
        let photosHtml = photos.map((photo)=>
        (<div key={photo.id}>
            <img alt={photo.title} src={photo.thumbnailUrl}/>
        </div>
        ));

        return (
            <div ref={photosContainerRef} style={{ height: '300px', overflowY: 'scroll' }}>
                {photosHtml}
                {isLoading && <div>Loading more photos...</div>}
            </div>
    );
  }

  return <h2>There are no photos</h2>;
}
export default Photos;