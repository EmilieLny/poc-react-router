import React, { useEffect, useState } from 'react';

function AlbumDetail({match}) {

    const [album, setAlbum] = useState({})

    useEffect(() => { 
        const fetchAlbum = async () => {
            const fetchAlbum = await fetch (`https://jsonplaceholder.typicode.com/albums/${match.params.id}`)
            const album = await fetchAlbum.json();
            setAlbum(album)
        }
        fetchAlbum();
    }, [match])

    return (
        <div className="Albums">
            <h2>Album name: {album.title}</h2>
        </div>
    );
}

export default AlbumDetail;