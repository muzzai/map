import React from "react";
import SearchUser from "../SearchUser";

const Header = () => {
  return (
    <div
      style={{
        margin: "-5px auto",
        width: "80%",
        height: "60px",
        background: "#3e67a8",
        borderRadius: "5px",
      }}
    >
      <SearchUser />
    </div>
  );
};

export default Header;
