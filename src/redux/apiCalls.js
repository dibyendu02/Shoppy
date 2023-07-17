import { publicRequest } from "../requestMethods";
import { registerFailure, registerStart, registerSuccess } from "./registerRedux";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"

export const login = async (dispatch,user) => {
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/auth/login",user);
        dispatch(loginSuccess(res.data));
    }catch(err){
        dispatch(loginFailure());
    }
}
export const register = async (dispatch,registerUser) => {
    dispatch(registerStart());
    try{
        const res = await publicRequest.post("/auth/register",registerUser);
        dispatch(registerSuccess(res.data));
    }catch(err){
        dispatch(registerFailure());
    }
}