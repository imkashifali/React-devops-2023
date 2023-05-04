import React, { useState,useRef } from "react";
import Card from "../UI/Card";
import Wrapper from "../helper/Wrapper";

import ErrorMode from "../UI/ErrorMode";
 
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
const AddUser = (props) => {
  const [errorNow, setErrorNow] = useState();
  
  const userNameRef = useRef();
  const userAgeRef = useRef();



  const addUserHandle = (event) => {
    event.preventDefault();
    const userNameNow = userNameRef.current.value;
    const userAgeNow = userAgeRef.current.value;

    if (userNameNow.trim().length === 0 || userAgeNow.trim().length === 0) {
      setErrorNow({
        title:"Invalid Text",
        message:"Please Enter a Valid Name"
      })
      return;
    }
    if (+userAgeNow < 1) {
      setErrorNow({
        title:"Invalid Age",
        message:"Please Enter a Valid Value"
      })
      return;
    }  
    props.AddUser(userNameNow,userAgeNow)
     userNameRef.current.value = "";
    userAgeRef.current.value = "";

  };
  const errorHandlerNow  = () =>{
    setErrorNow(null)
  }
  return (
    <Wrapper >
  {errorNow &&  <ErrorMode  title={errorNow.title} message={errorNow.message}  onConfirm={errorHandlerNow}
/>} 
    <Card className={classes.input}>
      <form onSubmit={addUserHandle}>
        <label htmlFor="UserName">UserName</label>
        <input id="UserName" type="text"  ref={userNameRef}/>
        <label htmlFor="UserName">Age(Years)</label>
        <input id="UserName" type="number"   ref={userAgeRef}/>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </Wrapper>
  );
};

export default AddUser;
