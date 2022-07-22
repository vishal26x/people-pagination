import axios from "axios";

const URL = "https://swapi.dev/api/people/?format=json";

export const getPeopleData = async ()=>{
    try {
        const {data} = await axios.get(URL);
        return(data)
    } catch (e) {
        console.log(e);
    }
}