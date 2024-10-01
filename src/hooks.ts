import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";


export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// export function useAuth() {
//     const { email, id, token } = useAppSelector(state => state.user)

//     return {
//         isAuth: !!email,
//         email,
//         token,
//         id,
//     }
// }