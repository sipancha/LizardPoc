import axios from "axios";

function getUser(loginInfo) {
    console.log(loginInfo)
    return axios.get("/getUser", {
      params: {
        userName: loginInfo.userName
      }
    }).then(res=>{
      const {data} =  res
      if(data[0]){
        if("_id" in data[0])
          delete data[0]._id
        if("__v" in data[0])
          delete data[0].__v
      }
      return res
    })
  }

  export default getUser