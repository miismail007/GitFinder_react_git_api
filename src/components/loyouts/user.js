import React from "react";
import { Link } from "react-router-dom";

const User = (props) => {
  return (
    <React.Fragment>
      <div className="card text-center">
        <img
          src={props.user.avatar_url}
          className="round-img"
          style={{ width: "60px" }}
          alt=""
        ></img>
        <h3>{props.user.login}</h3>
        <div>
          <Link
            to={`/user/${props.user.login}`}
            className="btn btn-dark btn-sm my-1"
          >
            More
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default User;
