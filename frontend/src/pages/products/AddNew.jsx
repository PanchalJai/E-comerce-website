import React from 'react'

function AddNew() {
    return ( 
    <div>
        <form action="">
            <label htmlFor="title">Title</label>
            <input type='text' name='title' value={title}/>

            <label htmlFor="price">Price</label>
            <input type='text' name='price' value={price}/>

            <label htmlFor="category">Category</label>
            <input type='text' name='category' value={category}/>

            <label htmlFor="image">Image</label>
            <input type='text' name='image' value={image}/>

            <label htmlFor="description">Description</label>
            <input type='text' name='description' value={stock}/>

            <label htmlFor="stock">Stock</label>
            <input type='text' name='stock' value={stock}/>

            <label htmlFor="rating">Rating</label>
            <input type='number'  name='rating' value={rating}/>
            
            <button type='submit'>Add New Projuct</button>
        </form>
    </div> 
    );
}

export default AddNew;