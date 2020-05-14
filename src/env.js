var API_KEY = ""

console.log(process.env)
if(process.env.REACT_APP_MODE ==="production"){
    API_KEY = "production"
}else{
    API_KEY = "development"
}
export default API_KEY