import axios from "axios";

function getUser(loginInfo) {
    console.log(loginInfo)
    return axios.get("/getUser", {
      params: {
        userName: loginInfo.userName
      }
    })
  }

  export default getUser