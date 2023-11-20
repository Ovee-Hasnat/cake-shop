import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest, userRequest } from "@/requestMethods";
import { clearCart } from "./cartRedux";
import { orderFailure, orderStart, orderSuccess } from "./orderRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    return res.status;
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const placeOrder = async (dispatch, order) => {
  try {
    dispatch(orderStart());
    const res = await userRequest.post("/orders/", order);

    if (res.status === 200) {
      dispatch(orderSuccess());
      dispatch(clearCart());
    } else {
      alert("Something is wrong! Try again later.");
    }
  } catch (error) {
    console.log(error);
    dispatch(orderFailure());
  }
};
