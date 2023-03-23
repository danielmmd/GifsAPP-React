
import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

   const [InputValues, setInputValues] = useState('')

   const onInputChange = ({ target }) => {

      setInputValues(target.value);

   }

   const onSubmit = (event) => {

      event.preventDefault();
      if (InputValues.trim().length <= 1) return;
      onNewCategory(InputValues.trim())
      setInputValues('');

   }

   return (

      <form onSubmit={onSubmit}>

         <input
            type='text'
            placeholder="Buscar Gifs"
            value={InputValues}
            onChange={onInputChange}
         />


      </form>

   )
}
