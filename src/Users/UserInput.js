import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./UserInput.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const UserInput = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState(0);
  const [isValidUsername, setIsValidUsername] = useState(false);
  const [isValidAge, setIsValidAge] = useState(false);
  const [error, setError] = useState();

  const errorHandler = () => {
    setError(null);
  };

  const addUser = (event) => {
    const id = Math.random().toString();
    props.getUsers(enteredUsername, enteredAge, id);
  };

  const inputUsernameChangeHandler = (event) => {
    if (event.target.value.trim().lenght > 0) {
      setIsValidUsername(true);
    }
    setEnteredUsername(event.target.value);
  };
  const inputAgeChangeHandler = (event) => {
    if (event.target.value > 0 && isNaN(event.target.value)) {
      setIsValidAge(true);
    }
    setEnteredAge(event.target.value);
  };
  const userSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().lenght === 0) {
      setIsValidUsername(false);
      setError({
        title: "Invalid input",
        message: "Please enter valid name and age",
      });
      return;
    }

    if (+enteredAge < 1) {
      setIsValidAge(false);
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0)",
      });
    }
    setEnteredAge("");
    setEnteredUsername("");
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={userSubmitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Enter your username"
            onChange={inputUsernameChangeHandler}
            value={enteredUsername}
          />
          <label htmlFor="age">Age (in years)</label>
          <input
            id="age"
            type="number"
            placeholder="Enter your age"
            onChange={inputAgeChangeHandler}
            value={enteredAge}
          />
          <Button type="submit" onClick={addUser}>
            Add User
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default UserInput;
