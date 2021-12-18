import React from "react";
import { ProfileWrap } from "./profileWrap";

const Profile = () => {
  return (
    <>
      <ProfileWrap>
        <div className="d-flex m-2">
          <img
            src="https://html5css.ru/w3images/avatar2.png"
            alt="avatar"
            width="300"
            height="300"
          />
          <ul style={{ listStyleType: "none" }}>
            <li>
              <b>Имя:</b> Боб Кесло
            </li>
            <li>
              <b>Возраст:</b> 34 года
            </li>
            <li>
              <b>Профессия:</b> Певец
            </li>
          </ul>
        </div>
      </ProfileWrap>
    </>
  );
};

export default Profile;
