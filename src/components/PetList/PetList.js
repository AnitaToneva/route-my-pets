import { useState, useEffect } from 'react'
import { getAll } from '../../services/petService'
import PetCard from './PetCard/PetCard'



const PetList = () => {

    const [pets, setPets] = useState([])
    useEffect(() => {
        getAll()
            .then(result => {
                setPets(result)
            })
    }, [])
    return (
        <>
            {pets.length > 0 ?
                (<ul className="other-pets-list">

                    {pets.map((x) => <PetCard key={x._id} pet={x} />)}
                </ul>)
                
                
                : <p className="no-pets">No pets in database!</p>

            }
        </>


    )
}

export default PetList;
