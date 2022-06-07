import React,{createContext , useState} from "react";

export const DataCtx = createContext();

const DataContextProvider = (props)=>{
    // validate if user logged in or not => initial value is false
    const [LoginStatus, setLoginStatus] = useState(true)

    // user information
    const [UserInfo, setUserInfo] = useState()

    // functions
    function logging(){setLoginStatus(true)}
    // const logging = ()=>setLoginStatus(true)

    function getUserInfo(info){
        setUserInfo(info)
    }
    // const getUserInfo = (info)=>alert("don")


    const value = {LoginStatus, logging, getUserInfo,  UserInfo }

    return (
        <DataCtx.Provider value={value}>
            {props.children}
        </DataCtx.Provider>
    )
}

export default DataContextProvider