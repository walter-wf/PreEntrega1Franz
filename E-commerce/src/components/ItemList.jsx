import React from 'react'
import Item from './Item'

const ItemsList = ({items}) => {
    return (<div className='d-flex'>{items.map(item=><Item key={item.id} item={item}/>)}</div>)
        
    }

export default ItemsList
