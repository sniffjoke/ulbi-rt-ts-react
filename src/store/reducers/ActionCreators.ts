import {AppDispatch} from "../store";
import {IUser} from "../../models/IUser";
import axios, {AxiosError} from "axios";
import {userSlice} from "./UserSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";


// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userSlice.actions.usersFetching())
//         const responce = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
//         dispatch(userSlice.actions.usersFetchingSuccess(responce.data))
//     } catch (e) {
//         dispatch(userSlice.actions.usersFetchingError((e as AxiosError).message))
//     }
// }

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkApi) => {
        try {
            const responce = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            return responce.data
        } catch (e) {
            return thunkApi.rejectWithValue("Не удалось загрузить пользователей")
        }
    }
)
