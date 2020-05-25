import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Albums() {

    const [albums, setAlbums] = useState([])

    useEffect(() => {
        fetchItems()
    }, [])

    const fetchItems = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/albums')
        const items = await data.json()
        setAlbums(items)
    }


    return (
        <div className="Albums">
            <h1>Albums</h1>
            {albums.map(
                album => (<p key={album.id}>
                    <Link to={`albums/${album.id}`}>{album.title}</Link>
                </p>)
            )}
        </div>
    );
}

export default Albums;