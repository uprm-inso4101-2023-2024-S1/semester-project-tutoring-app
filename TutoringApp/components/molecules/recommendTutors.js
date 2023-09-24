import { fetchStudentUser, fetchTutors } from "../atoms/fetchData";
import Tutor from "../atoms/tutor";
import studentUser from "../atoms/studentUser";

const recommendedTutors = () => {
    const tutors = fetchTutors();
    const tutorList = [];
    for (let i in tutors) {
        const tutor = tutors[i];
        const tutorObj = new Tutor(tutor.names, tutor.last_name, tutor.specialty,
            tutor.courses_tutoring, tutor.tutorRating, tutor.email, tutor.user_id);
        tutorList.push(tutorObj);
    }

    const student = fetchStudentUser();
    const studentList = [];
    for (let i in student) {
        const stud = student[i];
        const studentObj = new studentUser(stud.names, stud.last_name, stud.active_courses,
            stud.studentRating, stud.email, stud.user_id);
        studentList.push(studentObj);
    }
   
    // TODO(yamgram7): Optimize algorithm. 
    // collects all those tutors that are teaching a student's active course
    const tutorsTeachingActiveCourses = [];
    for (let i in tutorList) {
        const courses = tutorList[i]._courses;
        for (let j in courses) {
            for (let k in studentList) {
                if (studentList[k]._activeCourses.includes(courses[j]) && 
                studentList[k]._userID != tutorList[i]._userID // if user is tutor, they would not want to see themselves
                && !tutorsTeachingActiveCourses.includes(tutorList[i])) { //no duplicate tutors
                    tutorsTeachingActiveCourses.push(tutorList[i]);
                }
            }
        }
    }

    // sort tutors by rating from highest to lowest
    const sorted = tutorsTeachingActiveCourses.sort((a, b) => {
        return b.rating - a.rating;
    });

    // TODO(yamil): implement way to prioritize tutors with less students 
    // to appear higher on the list

    // TODO(yamil): make unit tests for this algorithm
    return sorted;
}

export default recommendedTutors