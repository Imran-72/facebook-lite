import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProfileWrap } from "../../../profile/profileWrap";
import { follow, setUserProfile, unfollow } from "../../../../../redux/actions";

const UserProfile = () => {
  const dispatch = useDispatch();
  const {
    fullName: name,
    status,
    userId: id,
    followed,
  } = useSelector((state) => state.profUserR.user);

  useEffect(() => {
    const userID = localStorage.getItem("user-profile");
    if (!id) {
      setTimeout(() => {
        dispatch(setUserProfile(userID));
      }, 100);
    }
  }, [id]);

  return (
    <>
      <ProfileWrap>
        <div className="d-flex m-2">
          <img
            src={`https://avatars.dicebear.com/api/avataaars/${(
              Math.random() + 1
            )
              .toString(36)
              .substring(7)}.svg`}
            alt=""
            className="img-responsive rounded-circle"
            alt="avatar"
            width="150"
            height="150"
          />
          <div className="d-flex mx-4">
            <span>
              <h4>{name}</h4>
            </span>
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
        <div className="mx-4">
          <b> {status ? status : "Нет статуса"}</b>
        </div>
      </ProfileWrap>
    </>
  );
};

export default UserProfile;
