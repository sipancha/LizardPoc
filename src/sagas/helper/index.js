export function loginConditionCheck(response,payload) {
    const {data} = response
    if( data[0] ){
        const {userName,userPassword} = data[0]
        return userName===payload.userName && userPassword===payload.userPwd
    } 
}

