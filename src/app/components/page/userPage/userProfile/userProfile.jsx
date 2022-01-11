import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProfileWrap } from "../../../profile/profileWrap";
import { follow, unfollow } from "../../../../../redux/actions";

const UserProfile = () => {
  const { name, status, id, followed } = useSelector(
    (state) => state.profUserR.user
  );
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(followed);
  }, [followed]);

  return (
    <>
      <ProfileWrap>
        <div className="d-flex m-2">
          <img
            // src={ava.large ? ava.large : img}
            src={`https://avatars.dicebear.com/api/avataaars/${(
              Math.random() + 1
            )
              .toString(36)
              .substring(7)}.svg`}
            alt=""
            className="img-responsive rounded-circle"
            alt="avatar"
            width="300"
            height="300"
          />
          {/* <ul style={{ listStyleType: "none" }}>
            <li>
              <b> {name}</b>
              <b> {name}</b>
            </li>
          </ul> */}
          <div>
            <span>{name}</span>
            <span className="mx-5">
              <button className="btn btn-primary">отправить сообщение</button>
            </span>
            <span>
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
            </span>
          </div>
        </div>
        <div>
          <b> {status ? status : "Нет статуса"}</b>
        </div>
      </ProfileWrap>
    </>
  );
};

export default UserProfile;
