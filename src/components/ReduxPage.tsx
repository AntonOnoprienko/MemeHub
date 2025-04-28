import {FC} from "react";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {Button} from "@heroui/react";
import {userSlice} from '../store/reducers/UserSlice'



const ReduxPage:FC = () => {
    const count = useAppSelector(state => state.userReducer.count)
    const dispatch = useAppDispatch()
    const {increment} = userSlice.actions

    return (
        <div className="h-[calc(100vh-164px)]">
            {count}
            <Button onPress={() => {dispatch(increment(1))}}>1</Button>
        </div>
    );
};

export default ReduxPage;