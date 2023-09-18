async function getData(url){
    try{
        const response = await fetch(url)
        const data = await response.json()

    }catch(error){
        console.log('Error',error)
    }
    
}



