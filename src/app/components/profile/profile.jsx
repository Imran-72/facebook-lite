import React from "react";

const Profile = () => {
  return (
    <>
      <div className="d-flex m-2">
        <img
          src="https://html5css.ru/w3images/avatar2.png"
          alt="avatar"
          width="300"
          height="300"
        />
        <ul style={{ listStyleType: "none", paddingLeft: 100 }}>
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
    </>
  );
};

export default Profile;
