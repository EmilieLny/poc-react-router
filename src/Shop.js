import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Shop() {

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
        <div className="Shop">
            <h1>Shop</h1>
            {albums.map(
                album => (<p key={album.id}>
                    <Link to={`shop/${album.id}`}>{album.title}</Link>
                </p>)
            )}
        </div>
    );
}

export default Shop;