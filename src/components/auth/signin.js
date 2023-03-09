import React, { useEffect } from "react";
import UserAuth from "./register-form/userAuth";
import "./register-form/styles.css";
import PersonalInfo from "./register-form/personalInfo";
import IndividualEvents from "./register-form/individualEvents";
import GroupEvents from "./register-form/groupEvents";
const SignIn = () => {
  useEffect(() => {
    // Define the 'otpless' function
    window.otpless = otplessUser => {
      // Retrieve the user's details after successful login
      const waName = otplessUser.waName;
      const waNumber = otplessUser.waNumber;

      // Handle the signup/signin process
      // ...

      console.log(`Logged in as ${waName} (${waNumber})`);
    };
  }, []);
  return (
    <>
      <UserAuth />
      <PersonalInfo />
      <IndividualEvents />
      <GroupEvents />
    </>
  );
};

export default SignIn;
