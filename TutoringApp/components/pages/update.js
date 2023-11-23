import {useParams, useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'
import supabase from '../../config/supabaseClient'
const Update = () => {
    const {id} = useParams()
    const native = useNavigate()

    const [name, setName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setemail] = useState('')

    useEffect(() => {
        const fetchUsers = async () => {
            const{data, error} =await supabase
            .from('users')
            .select()
            .eq('id', id)
            .single()

            if (error){
                navigate('/', {replace: true})
            }
            if (data) {
                setName(data.name)
                setLastName(data.last_name)
                setEmail(data.email)
                console.log(data)
            }
        }
        fetchUsers()
    }, [id, navigate]


    )

    return(
        <div className="page updah2te">
            <h2>Update</h2>
        </div>

    )


}
export default Update