import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';

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
            <h3>Album name</h3>
            {album.title ? <p>{album.title}</p> : <Spin />}
        </div>
    );
}

export default AlbumDetail;