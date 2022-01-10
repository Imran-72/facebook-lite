import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { follow, unfollow } from "../../../../redux/actions";

const User = ({ name, id, followed }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(followed);
  }, [followed]);
  return (
    <>
      <Link to={`/userProfile/${id}`}>
        <div className="m-3">
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
          <p>{name}</p>
        </div>
      </Link>
      <div>
        {followed ? (
          <button
            className="btn btn-primary mb-2"
            onClick={() => dispatch(unfollow(id))}
          >
            UNFOLLOW
          </button>
        ) : (
          <button
            className="btn btn-primary mb-2"
            onClick={() => dispatch(follow(id))}
          >
            FOLLOW
          </button>
        )}
      </div>
    </>
  );
};

export default User;
