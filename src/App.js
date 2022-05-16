import React from "react";
import Users from "./Users/Users";
function App() {
  // const [users, setUsers] = useState([
  //   { text: "John Doe", age: 33, id: 99 },
  //   { text: "Foo Bar", age: 32, id: 98 },
  // ]);

  // const showUsers = (username, age) => {
  //   return;
  //   <div>
  //     <p>{username}</p>
  //     <p>{age}</p>
  //   </div>;
  // };

  // let content = <p style={{ textAlign: "center" }}>No Users found.</p>;

  return (
    <div>
      <Users />
    </div>
  );
}

export default App;
