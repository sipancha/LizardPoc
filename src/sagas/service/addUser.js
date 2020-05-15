import axios from "axios";

function addUser(userInfo) {
    console.log(userInfo)
    return axios.post("/addUser", userInfo)
}

export default addUser