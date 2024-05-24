import axios from "axios"


export async function getSession(){
	const api = axios.create({baseURL:"http://localhost:3000"});
    //api.get("session").then(response=>console.log(response.data)).catch(error=>console.log(error)) ;
    const {users} = await api.get("session").then(response => response.data);
    //console.log(res);
    return users;
}