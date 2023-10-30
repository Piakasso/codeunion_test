import React, { useState } from "react";
import SingleUser from "./SingleUser";

const TeamList = ({ users, deleteUser, updatePermissions }) => {
  const [openItem, setOpenItem] = useState(null);
  const handleItemClick = (index) => {
    if (openItem === index) {
      setOpenItem(null);
    } else {
      setOpenItem(index);
    }
  };

  return (
    <div>
      {users.map((user, index) => (
        <SingleUser
          key={user.email}
          {...user}
          isOpen={openItem === index}
          onItemClick={() => handleItemClick(index)}
          deleteUser={deleteUser}
          updatePermissions={updatePermissions}
        />
      ))}
    </div>
  );
};

export default TeamList;
