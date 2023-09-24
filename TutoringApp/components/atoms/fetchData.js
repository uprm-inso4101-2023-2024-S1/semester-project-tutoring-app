import supabase from "../../config/supabaseClient"
import { useEffect, useState } from 'react'

export const fetchTutors = () => {
    const [fetchError, setFetchError] = useState(null)
    const [tutors, setTutors] = useState(null)

    useEffect(() => {
        const fetchTutors = async () => {
            const { data, error} = await supabase
            .from('users')
            .select()
            .eq('is_tutor', true)

            if (error) {
                setFetchError('Could not fetch tutors')
                setTutors(null)
                console.log(error)
            }

            if (data) {
                setTutors(data)
                setFetchError(null)
            }
        }
        fetchTutors()
    }, [])

    return tutors;
}

export const fetchStudentUser = () => {
    const [fetchError, setFetchError] = useState(null)
    const [student, setStudentUser] = useState(null)

    useEffect(() => {
        const fetchStudentUser = async () => {
            const { data, error} = await supabase
            .from('users')
            .select()
            .eq('email', JSON.parse(localStorage.getItem("email")).user)

            if (error) {
                setFetchError('Could not fetch student user')
                setStudentUser(null)
                console.log(error)
            }

            if (data) {
                setStudentUser(data)
                setFetchError(null)
            }
        }
        fetchStudentUser()
    }, [])

    return student;
}