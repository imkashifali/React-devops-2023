import React, { useState } from "react";
import Card from "../UI/Card";
import ErrorMode from "../UI/ErrorMode";

import classes from "./AddUser.module.css";
import Button from "../UI/Button";
const AddUser = (props) => {
  const [enterUserName, setEnterUserName] = useState("");
  const [enterAge, setEnterAge] = useState("");
  const [errorNow, setErrorNow] = useState();


  const userEnterHandler = (event) => {
    setEnterUserName(event.target.value);
  };
  const userEnterAgeHandler = (event) => {
    setEnterAge(event.target.value);
  };

  const errorHandlerNow  = () =>{
    setErrorNow(null)
  }

  const addUserHandle = (event) => {
    event.preventDefault();
    if (enterUserName.trim().length === 0 || enterAge.trim().length === 0) {
      setErrorNow({
        title:"Invalid Text",
        message:"Please Enter a Valid Name"
      })
      return;
    }
    if (+enterAge < 1) {
      setErrorNow({
        title:"Invalid Age",
        message:"Please Enter a Valid Value"
      })
      return;
    }  
    props.AddUser(enterUserName,enterAge)
    setEnterAge("");
    setEnterUserName("");

  };
  
  return (
    <div>
  {errorNow &&  <ErrorMode  title={errorNow.title} message={errorNow.message}  onConfirm={errorHandlerNow}
/>} 
    <Card className={classes.input}>
      <form onSubmit={addUserHandle}>
        <label htmlFor="UserName">UserName</label>
        <input id="UserName" type="text" onChange={userEnterHandler} value={enterUserName}/>
        <label htmlFor="UserName">Age(Years)</label>
        <input id="UserName" type="number" onChange={userEnterAgeHandler} value={enterAge}/>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
  );
};

export default AddUser;
