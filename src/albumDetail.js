import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

function AlbumDetail({match}) {

    const [album, setAlbum] = useState([])

    useEffect(() => { 
        fetchAlbum()
    }, [])

    const fetchAlbum = async () => {
        const fetchAlbum = await fetch (`https://jsonplaceholder.typicode.com/albums/${match.params.id}`)
        const album = await fetchAlbum.json();
        setAlbum(album)
    }

    return (
        <div className="Shop">
            <h2>Album name: {album.title}</h2>
        </div>
    );
}

export default AlbumDetail;