import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://qunwadbiwbycvmgscyyg.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1bndhZGJpd2J5Y3ZtZ3NjeXlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUzNDAxNjcsImV4cCI6MjAxMDkxNjE2N30.nlr1UhwV5dmZKh2uoCWV0mTeKAdGAznspCqk5oBxQYs"

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase