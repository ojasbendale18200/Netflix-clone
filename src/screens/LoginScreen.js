import React, { useState } from "react";
import "./LoginScreen.css";
import SignupScreen from "./SignupScreen";

function LoginScreen() {
  const [signIn, setSignin] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="background-img"
        />
        <button className="loginScreen__button" onClick={() => setSignin(true)}>
          Sign In
        </button>
        <div className="loginScreen__gradiant"></div>
        <div className="loginScreen__body">
          {signIn ? (
            <SignupScreen />
          ) : (
            <>
              <h1>Unlimited films, TV programmes and more.</h1>
              <p>Watch anywhere. Cancel at any time.</p>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>

              <div className="loginScreen__input">
                <form>
                  <input type="email" placeholder="Email Address" />
                  <button
                    className="loginScreen__getStarted"
                    onClick={() => setSignin(true)}
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
