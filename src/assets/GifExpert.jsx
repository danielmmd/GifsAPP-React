
import { useState } from 'react';
import { AddCategory, GiffGrid } from './components';



export const GifExpert = () => {

    const [Categories, setCategories] = useState(['One Piece']);

    const onAddCategoria = (newCategory) => {

        if (Categories.includes(newCategory)) return;

        setCategories([newCategory, ...Categories])

    }

    return (

    <>
        <h1>GifExpert</h1>

        <AddCategory onNewCategory={onAddCategoria} />

        {Categories.map((category, i) =>

            <GiffGrid
                key={category}
                category={category} />

        )}

    </>
    )
}
