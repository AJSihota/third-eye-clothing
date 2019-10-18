import React from 'react'

import './collection-item.styles.scss';

function CollectionItem({id, name, price, imageUrl}) {
    return (
        <div className="collection-item">
            <div className="image"
            style={{backgroundImage: `url(${imageUrl})`}}>

            </div>
            <div className="price">
                {price}
            </div>

            <div className="name">
                {name}
            </div>
        </div>
    )
}

export default CollectionItem;
