import db from "../../firebase/config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auhtSlice } from "./authReducer";

const auth = getAuth(db);

const authSignInUser =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;

      if (errorCode == "auth/weak-password") {
        alert("The password is too weak.");
      } else {
        alert(errorMessage);
      }
      console.log(error);
    }
  };

const authSignUpUser =
  ({ email, password, nickname }) =>
  async (dispatch, getState) => {
    try {
      const {user} = await createUserWithEmailAndPassword(auth, email, password);
      dispatch(auhtSlice.actions.updateUserProfile({ userId: user.uid }));
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === "auth/wrong-password") {
        alert("Wrong password.");
      } else {
        alert(errorMessage);
      }
    }
  };

const authSignOutUser = () => async (dispatch, getState) => {};

export { authSignInUser, authSignUpUser, authSignOutUser };
