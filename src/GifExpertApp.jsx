import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Pikachu'])

  //opción 1
  // const handleAdd = () => setCategories([...categories, 'HunterxHunter'])

  // opción 2
  // const handleAdd = () => setCategories(cat => [...cat, 'HunterxHunter'])
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      {/* <button onClick={handleAdd}>Add</button> */}
      <ol>
        {categories.map(category => <GifGrid key={category} category={category} />)}
      </ol>
    </>
  )
}

export default GifExpertApp
