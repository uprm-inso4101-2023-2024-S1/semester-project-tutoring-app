import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";
// import DepartmentList from "../../constants/department-list";
import ServiceSearch from "../atoms/ServiceSearch";
import ServiceContent from "../atoms/ServiceContent";
import { supabaseClient,supabase } from "../../configdb/supabaseClient";




/**
 * Component representing a service page that implements
 * a search bar component and displays a list of content based on user input.
 *
 * @returns {JSX.Element} The rendered Service component.
 */
const Service = () => {
  


  const [searchResults, setSearchResults] = useState(null);
  const [copy,setCopy] = useState(null);
  
  const headerMessage = "Search";
  const errorMessage = "An error occurred during the search";
  

  useEffect(()=>{
    fetchData1();
  },[]);

  const fetchData1 = async ()=>{
    const {data: Departments_Listy} = await supabase
    .from('Team2_Departments')
    .select('*');


    for(let i=0;i<Departments_Listy.length;i++){

      let Depart_Name = Departments_Listy[i]['name'];

      const {data: courseData} = await supabase
      .from('courses')
      .select('course_name,course_id')
      .eq('department',Depart_Name);

      for (let x=0;x<courseData.length;x++){

        let id = courseData[x]['course_id']

        const {data: tutorId} = await supabase
        .from('tutoring_courses')
        .select('tutor_id')
        .eq('course_id',id);

        var listy = []

        for(let y=0;y<tutorId.length;y++){
          let tutor = tutorId[y]['tutor_id'];

          const {data: finalDataLine} =await supabase.from('users').select('names,tutor_rating,user_id').eq('user_id',tutor);

          listy.push(finalDataLine[0]);
        };
        courseData[x]['tutors'] = listy;
      
      };
      Departments_Listy[i]['courseData']=courseData;
      
      


    };
    console.log(Departments_Listy);
    setSearchResults(Departments_Listy);
    setCopy(Departments_Listy);
    
    
    
  };

 

  

  
  

  

  const handleSearch = (text) => {
    try {
      const currText = text.trim().toLowerCase();
      if (currText.length !== 0) {
        const data = copy.filter((result) => {
          const departmentMatch = result.name?.toLowerCase().includes(currText);
          const courseOrTutorMatch = result.courseData?.some(
            (course) =>
              course.course_name?.toLowerCase().includes(currText.toLowerCase()) ||
              course.tutors?.some((tutor) =>
                tutor.names?.toLowerCase().includes(currText.toLowerCase())
              )
          );

          return departmentMatch || courseOrTutorMatch;
        });
        setSearchResults(data);
      } else {
        setSearchResults(copy);
      }
    } catch (error) {
      console.error(errorMessage, error);
    }
  };
  
    
  if(searchResults){
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{headerMessage}</Text>
        
        
        <ServiceSearch onSearch={handleSearch} />
  
        <ServiceContent searchResults={searchResults} />
        
      </View>
    );
  }else{
    return (
      <View style={styles.container}>
      </View>
    );
  }
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
    padding: SIZES.medium,
  },
  header: {
    fontSize: SIZES.xLarge,
    color: COLORS.text,
    marginBottom: SIZES.medium,
  },
});

export default Service;
