import {FC, useEffect} from "react";
import {useAppSelector} from "../hooks/redux";



const ReduxPage:FC = () => {
    const {users,isLoading, error} = useAppSelector((state)=> state.userReducer)
    useEffect(()=>{
        console.log(`users: ${users}, isLoading: ${isLoading},error: ${error}`)
    },[])
    return (
        <div className="h-[calc(100vh-164px)]">

        </div>
    );
};

export default ReduxPage;