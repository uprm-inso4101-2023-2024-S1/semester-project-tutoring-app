class Person{
    constructor(fname, lname, courses){
        this.fname=fname
        this.lname=lname
        this.courses=courses
    }
    getName(){
        return this.fname +" " +this.lname
    }

    getCourses(){
        return this.courses
    }


    
}

//The url would be the API to fetch data from
async function getData(url){
    try{
        const response = await fetch(url)
        //The user data to be used in JavaScript 
        const data = await response.json()
        for(i=0;i<data.length;i++){
            //Iterate through user data to be stored in class
        }


        
        

    }catch(error){
        console.log('Error',error)
    }
    
}







