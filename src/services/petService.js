const baseUrl="http://localhost:3030/jsonstore/pets"


export const getAll = async ()=>{
    let response = await fetch(baseUrl)
    let pets = await response.json();
    let result=Object.values(pets)
    return result
}

export const createPet = async (petData) => {
    console.log(petData)
    let response = await fetch(baseUrl,
       { method: 'POST',
        headers: {
            'content-type': 'application/json',

        },
        body:JSON.stringify(petData)
    })

    let result= await response.json()
    return result;
}


export const getOne = (petId) =>{
  return fetch(`${baseUrl}/${petId}`)
  .then(res => res.json())
}

