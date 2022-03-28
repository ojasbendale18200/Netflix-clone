import React, { useRef } from "react";
import "./SignupScreen.css";
// import { signUp } from "../firebase";
// import { signin } from "../firebase";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function SignupScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = async (e) => {
    e.preventDefault();
    // await signUp(emailRef.current.value, passwordRef.current.value).catch(
    //   (error) => {
    //     alert(error.message);
    //   }
    // );

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userAuth) => {
        console.log(userAuth);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = async (e) => {
    e.preventDefault();
    // await signin(emailRef.current.value, passwordRef.current.value).catch(
    //   (error) => {
    //     alert(error.message);
    //   }
    // );
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userAuth) => {
        console.log(userAuth);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>

        <h4>
          <span className="signupScreen__gray">New to Netflix? </span>
          <span className="signupScreen__link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
