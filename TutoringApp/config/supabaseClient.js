import { createClient } from '@supabase/supabase-js'
import React, { useState, useEffect } from "react";


const supabaseUrl = "https://qunwadbiwbycvmgscyyg.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1bndhZGJpd2J5Y3ZtZ3NjeXlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUzNDAxNjcsImV4cCI6MjAxMDkxNjE2N30.nlr1UhwV5dmZKh2uoCWV0mTeKAdGAznspCqk5oBxQYs"

const supabase = createClient(supabaseUrl, supabaseKey);


// console.log(supabaseUrl);
// console.log(supabase);

// Define your API functions
const supabaseClient = {
  // Function to fetch data from a table
  async fetchDataFromTable() {
    try {
      const { data, error } = await supabase.from("users").select('*');
      if (error) {
        throw new Error(error.message);
      }
      return data;
    } catch (error) {
      throw new Error(`Error fetching data: ${error.message}`);
    }
  },

  // Function to insert data into a table
  async insertDataIntoTable(tableName, data) {
    try {
      const { error } = await supabase.from(tableName).insert(data);
      if (error) {
        throw new Error(error.message);
      }
      return 'Data inserted successfully';
    } catch (error) {
      throw new Error(`Error inserting data: ${error.message}`);
    }
  },

  async fetchRecommendedTutors(user_id) {
    try {
      const { data, error } = await supabase.rpc('recommended_tutors', {student: user_id});
      if (error) {
        throw new Error(error.message);
      }
      return data;
    } catch (error) {
      throw new Error(`Error fetching data: ${error.message}`);
    }
  },

   async fetchRecommendedCourses(user_id) {
    try {
      const { data, error } = await supabase.rpc('getrecommendedcourses', {student: user_id});
      if (error) {
        throw new Error(error.message);
      }
      return data;
    } catch (error) {
      throw new Error(`Error fetching data: ${error.message}`);
    }
  },
};

export const fetchTutors = ( user_id ) => {
  const [fetchError, setFetchError] = useState(null)
  const [tutors, setTutors] = useState(null)

  useEffect(() => {
    const fetchTutors = async () => {
      const { data, error } =  await supabase.rpc('recommended_tutors', {student: user_id})

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

export const fetchCourses = ( user_id ) => {
  const [fetchError, setFetchError] = useState(null)
  const [courses, setCourses] = useState(null)

  useEffect(() => {
    const fetchCourses = async () => {
      const { data, error } =  await supabase.rpc('getrecommendedcourses', {student: user_id})

      if (error) {
        setFetchError('Could not fetch courses')
        setCourses(null)
        console.log(error)
      }

      if (data) {
        setCourses(data)
        setFetchError(null)
      }
    }
    fetchCourses()
  }, [])
  return courses;
}

export const insertUrl = (user_id, url) =>{
  const [insertError, setInsertError] = useState(null)

  useEffect(() => {
    const insertUrl = async () => {
      const { data, error } =  await supabase.rpc('setpfp', {id: user_id, Pfp: url})

      if (error) {
        setInsertError('Could not Insert Url')
        console.log(error)
      }

      if (data) {
        setInsertError(null)
      }
    }
    insertUrl()
  }, [])
  return null;
}
export const clearUrl = (user_id, url) =>{
  const [insertError, setInsertError] = useState(null)

  useEffect(() => {
    const clearUrl = async () => {
      const { data, error } =  await supabase.rpc('clearpfp', {id: user_id})

      if (error) {
        setInsertError('Could not clear Url')
        console.log(error)
      }

      if (data) {
        setInsertError(null)
      }
    }
    clearUrl()
  }, [])
  return null;
} 
export const fetchUserFromId = ( user_id ) => {
  const [fetchError, setFetchError] = useState(null)
  const [userId, setUserId] = useState(null)

  useEffect(() => {
    const fetchUserFromId = async () => {
      const { data, error } =  await supabase.rpc('get_user_from_id', {id: user_id})

      if (error) {
        setFetchError('Could not fetch user')
        setUserId(null)
        console.log(error)
      }

      if (data) {
        setUserId(data)
        setFetchError(null)
      }
    }
    fetchUserFromId()
  }, [])
  return userId;
}
export const fetchUserFromEmail = ( email ) => {
  const [fetchError, setFetchError] = useState(null)
  const [userEmail, setUserEmail] = useState(null)

  useEffect(() => {
    const fetchUserFromEmail = async () => {
      const { data, error } =  await supabase.rpc('get_user_from_email', {email: email})

      if (error) {
        setFetchError('Could not fetch user')
        setUserEmail(null)
        console.log(error)
      }

      if (data) {
        setUserEmail(data)
        setFetchError(null)
      }
    }
    fetchUserFromEmail()
  }, [])
  return userEmail;
}


export { supabase, supabaseClient };
