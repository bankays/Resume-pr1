export const SingleProject = async (id) => {
    try{
        const response = await fetch(`http://localhost:8000/projects/${id}`)
        return response.json()
    }
    catch(error){
        console.log(error)
    }
}