import React from "react";
import User from "./user";
import { Spinner } from "./Spinner";
import PropTypes from "prop-types";

const UsersList = ({ state, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userstyle}>
        {state.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

UsersList.propType = {
  state: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};
const userstyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2,1fr)",
  gridGap: "1rem",
};
export default UsersList;
