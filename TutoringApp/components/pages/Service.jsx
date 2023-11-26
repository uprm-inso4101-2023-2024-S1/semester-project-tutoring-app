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
  


  const [Departments, setSearchJSON] = useState(null);
  const [Courses, setSearchCourses] = useState(null);
  const [Tutors, setSearchTutors] = useState(null);
  

  useEffect(()=>{
    fetchData1();
  },[]);

  const fetchData1 = async ()=>{
    const {data: Departments} = await supabase
    .from('Team2_Departments')
    .select('*');

    const {data: Courses} = await supabase
    .from('Team2_courseData')
    .select('*');

    const {data: Tutors} = await supabase
    .from('Team2_tutorsData')
    .select('*');



    setSearchJSON(Departments);
    setSearchCourses(Courses);
    setSearchTutors(Tutors);
    setSearchResults(Departments);
    
  };
  

  if(Departments && Courses && Tutors){
    var DepartmentList = [];
    
    let courseData = CourseList(tutorList());

    for (let i=0;i<Departments.length;i++){
      let newy = Departments[i];
      newy['courseData']=courseData[i];
      DepartmentList.push(newy);
    }

  };

  function tutorList(){
    let listy = []
    let listy2= []
    for (let i =0;i<Tutors.length;i++){
      if(listy2.length==2){
        listy.push(listy2);
        listy2=[];
      }
      listy2.push(Tutors[i]);
    }
    listy.push(listy2);

    return listy
  }
  
  function CourseList (tur){
    let final = [];
    let temp =[];
    for(let i=0;i<tur.length;i++){
      let newy = Courses[i];
      newy['tutors']=tur[i];
      if(temp.length ==2){
        final.push(temp);
        temp = [];
      }
      temp.push(newy);
    }
    final.push(temp);
    return final;
  }

  const [searchResults, setSearchResults] = useState(DepartmentList);
  const headerMessage = "Search";
  const errorMessage = "An error occurred during the search";

  const handleSearch = (text) => {
    try {
      
      const currText = text.trim().toLowerCase();
      if (currText.length !== 0) {
        const data = DepartmentList.filter((result) => {
          const departmentMatch = result.name?.toLowerCase().includes(currText);
          const courseOrTutorMatch = result.courseData?.some(
            (course) =>
              course.name?.toLowerCase().includes(currText.toLowerCase()) ||
              course.tutors?.some((tutor) =>
                tutor.name?.toLowerCase().includes(currText.toLowerCase())
              )
          );

          return departmentMatch || courseOrTutorMatch;
        });
        setSearchResults(data);
      } else {
        setSearchResults(DepartmentList);
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
