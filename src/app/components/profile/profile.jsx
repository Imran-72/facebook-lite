import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getUserStatus } from "../../../redux/actions";
import { ProfileWrap } from "./profileWrap";
import { updateUserStatus } from "../../../redux/actions";

const Profile = () => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState("");
  const { login } = useSelector((state) => state.authR);
  const { fullName } = useSelector((state) => state.profR.myProfile);

  useEffect(() => {
    // dispatch(getUserStatus(userId));
    // dispatch(getMyProfile(userId));
  }, []);
  return (
    <ProfileWrap>
      {login ? (
        <>
          <div className="d-flex m-2">
            <img
              src="https://html5css.ru/w3images/avatar2.png"
              alt="avatar"
              width="300"
              height="300"
            />
            <ul style={{ listStyleType: "none" }}>
              <li>{fullName}</li>
              <li>22 года</li>
              <li>{status}</li>
            </ul>
          </div>
          <div>
            <input
              type="text"
              value={status}
              onChange={({ target }) => setStatus(target.value)}
            />
            <div>
              <button
                className="btn btn-primary m-4 "
                onClick={() => dispatch(updateUserStatus(status))}
              >
                Добавить
              </button>
            </div>
          </div>
        </>
      ) : (
        <p>Вы не вошли в свой профиль</p>
      )}
    </ProfileWrap>
  );
};

export default Profile;
