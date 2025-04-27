import {IUser} from "../../types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UserState {
    users: IUser [];
    isLoading: boolean;
    error: string
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsers(state, action: PayloadAction<IUser[]>) {
            state.users = action.payload;
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },
        setError(state, action: PayloadAction<string>) {
            state.error = action.payload;
        },
    }
})

export default userSlice.reducer;