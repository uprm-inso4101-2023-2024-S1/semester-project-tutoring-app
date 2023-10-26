import { createClient } from '@supabase/supabase-js'
import React, { useState, useEffect } from "react";

const supabaseUrl = "https://qunwadbiwbycvmgscyyg.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1bndhZGJpd2J5Y3ZtZ3NjeXlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUzNDAxNjcsImV4cCI6MjAxMDkxNjE2N30.nlr1UhwV5dmZKh2uoCWV0mTeKAdGAznspCqk5oBxQYs"

const supabase = createClient(supabaseUrl, supabaseKey);


export const fetchActiveCourses = (user_id) => {
    const [fetchError, setFetchError] = useState(null)
    const [activeCourses, setActiveCourses] = useState(null)

    useEffect(() => {
        const fetchActiveCourses = async () => {
            const { data, error } = await supabase.rpc('get_active_courses', { student: user_id })

            if (error) {
                setFetchError('Could not fetch active courses')
                setActiveCourses(null)
                console.log(error)
            }

            if (data) {
                setActiveCourses(data)
                setFetchError(null)
            }
        }
        fetchActiveCourses()
    }, [])
    return activeCourses;
}

export default supabase