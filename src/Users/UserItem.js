import React from "react";

const UserItem = (props) => {
  // const [deleteText, setDeleteText] = useState('');
  console.log();
  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <li className="user-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default UserItem;
