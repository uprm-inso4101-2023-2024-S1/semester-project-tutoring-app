
// Import the Supabase client
import { SupabaseClient, createClient } from '@supabase/supabase-js'

// Initialize the Supabase client with your API URL and API Key
const supabaseUrl = "https://qunwadbiwbycvmgscyyg.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1bndhZGJpd2J5Y3ZtZ3NjeXlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUzNDAxNjcsImV4cCI6MjAxMDkxNjE2N30.nlr1UhwV5dmZKh2uoCWV0mTeKAdGAznspCqk5oBxQYs"
console.log(supabaseUrl);
const supabase = createClient(supabaseUrl, supabaseKey);
console.log(supabase);

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
  async insertDataIntoTable(data) {
    try {
      const { error } = await supabase.from("users").insert(data);
      if (error) {
        throw new Error(error.message);
      }
      return 'Data inserted successfully';
    } catch (error) {
      throw new Error(`Error inserting data: ${error.message}`);
    }
  },
};

export default supabaseClient;
