import React, { useState } from "react";
import UserInput from "./UserInput";
import UserItem from "./UserItem";
import Card from "../UI/Card";
import classes from "./Users.module.css";

const Users = (props) => {
  const [userRecords, setUserRecords] = useState([]);
  const onAddUser = (username, age, id) => {
    let recordsArray = userRecords;
    setUserRecords([...recordsArray, ...[{ username, age, id }]]);
  };
  return (
    <Card className={classes.users}>
      <UserInput getUsers={onAddUser} />
      <ul>
        {userRecords.map((record) => {
          console.log(record);
          return (
            <UserItem
              userdata={record}
              key={record.id}
              id={record.id}
              onDelete={(id) => {
                console.log(id);
              }}
            >
              <span>{record.username + " "}</span>
              <span>{record.age}</span>
            </UserItem>
          );
        })}
      </ul>
    </Card>
  );
};

export default Users;
