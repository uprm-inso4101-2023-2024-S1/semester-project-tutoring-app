import { createClient } from '@supabase/supabase-js'

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
};

export const fetchProfilePic = ( user_id ) => {
  const [fetchError, setFetchError] = useState(null)
  const [profilePic, setProfilePic] = useState(null)

  useEffect(() => {
    const fetchProfilePic= async () => {
      const { data, error } =  await supabase
        .from('users')
        
      if (error) {
        setFetchError('Could not fetch profile picture')
        setProfilePic(null)
        console.log(error)
      }

      if (data) {
        setProfilePic(data)
        setFetchError(null)
      }
    }
    fetchProfilePic()
  }, [])
  return profilePic;
}
export { supabase, supabaseClient };