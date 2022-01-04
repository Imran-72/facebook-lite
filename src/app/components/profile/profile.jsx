import React from "react";
import { useSelector } from "react-redux";
import { ProfileWrap } from "./profileWrap";

const Profile = () => {
  const { login } = useSelector((state) => state.authR);
  return (
    <>
      <ProfileWrap>
        {login ? (
          <div className="d-flex m-2">
            <img
              src="https://html5css.ru/w3images/avatar2.png"
              alt="avatar"
              width="300"
              height="300"
            />
            <ul style={{ listStyleType: "none" }}>
              <li>
                <b>Имя: </b>
                {login}
              </li>
              <li>
                <b>Возраст:</b> 22 года
              </li>
            </ul>
          </div>
        ) : (
          <p>Вы не вошли в свой профиль</p>
        )}
      </ProfileWrap>
    </>
  );
};

export default Profile;
