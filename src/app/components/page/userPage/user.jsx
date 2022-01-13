import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { follow, unfollow } from "../../../../redux/actions";

const User = ({ name, id, followed }) => {
  const dispatch = useDispatch();

  return (
    <div className="m-3 text-center" style={{ width: "150px" }}>
      <div>
        <Link to={`/userProfile/${id}`}>
          <img
            src={`https://avatars.dicebear.com/api/avataaars/${(
              Math.random() + 1
            )
              .toString(36)
              .substring(7)}.svg`}
            alt=""
            height="70"
            className="img-responsive rounded-circle"
          />
        </Link>
        <h5>{name}</h5>
      </div>
      <div>
        {followed ? (
          <button
            className="btn btn-primary mb-2"
            onClick={() => dispatch(unfollow(id))}
          >
            unfollow
          </button>
        ) : (
          <button
            className="btn btn-primary mb-2"
            onClick={() => dispatch(follow(id))}
          >
            follow
          </button>
        )}
      </div>
    </div>
  );
};

export default User;
