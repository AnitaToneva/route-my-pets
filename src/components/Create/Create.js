import { useState, useEffect } from 'react'
import * as petService from '../../services/petService';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const navigate = new useNavigate()
  const [types, setTypes] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('http://localhost:3030/jsonstore/types')
      .then(res => res.json())
      .then(res => {
        let typesResult = Object.values(res)
        let categories = typesResult.reduce((a, x) => {
         
            if (!a[x.categiry]) {
              a[x.category] = []
            }
            a[x.category].push(x)
        
          return a;
        }, {})
        
        // console.log(Object.values(res))
        setCategories(categories)
       
        setTypes(typesResult)
      })
  }, [])

  const onPetCreate = (e) => {
    e.preventDefault()

    let formData = new FormData(e.currentTarget)
    let name = formData.get('name');
    let type = formData.get('type');
    let imageUrl = formData.get('imageUrl')
    let description = formData.get('description')

    petService.createPet({ name, type, imageUrl, description })
      //console.log(name,type)
      .then(result => {
        navigate('/dashboard')
      })

  }

  const onCategoryChange = (e) => {
    console.log(e.target.value)
    setTypes(categories[e.target.value])
  }

  return (
    <section id="create-page" className="create">
      <form id="create-form" onSubmit={onPetCreate} action="" method="POST">
        <fieldset>
          <legend>Add new Pet</legend>
          <p className="field">
            <label htmlFor="name">Name</label>
            <span className="input">
              <input type="text" name="name" id="name" placeholder="Name" />
            </span>
          </p>
          <p className="field">
            <label htmlFor="description">Description</label>
            <span className="input">
              <textarea name="description" id="description" placeholder="Description"></textarea>
            </span>
          </p>
          <p className="field">
            <label htmlFor="image">Image</label>
            <span className="input">
              <input type="text" name="imageUrl" id="image" placeholder="Image" />
            </span>
          </p>

          <p className="field">
            <label htmlFor="type">Category</label>
            <span className="input">
              <select id="type" name="type" onChange={onCategoryChange}>
                {Object.keys(categories).map(x => <option key={x} value={x}>{x}</option>)}

              </select>
            </span>
          </p>

          <p className="field">
            <label htmlFor="type">Type</label>
            <span className="input">
              <select id="type" name="type">
                {types.map(x => <option key={x._id} value={x._id}>{x.name}</option>)}

              </select>
            </span>
          </p>
          <input className="button submit" type="submit" value="Add Pet" />
        </fieldset>
      </form>
    </section>


  )
}

export default Create;