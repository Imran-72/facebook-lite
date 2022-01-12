import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Profile from "./profile";
import { getUserStatus, login } from "../../../redux/actions";

const ProfileContainer = () => {
  const dispatch = useDispatch();
  const { userId, isAuth } = useSelector((state) => state.authR);
  const { myProfile, status } = useSelector((state) => state.profR);

  useEffect(() => {
    dispatch(getUserStatus(userId));
  }, [myProfile]);

  useEffect(() => {
    if (!isAuth) {
      setTimeout(() => {
        const data = JSON.parse(localStorage.getItem("userLogin"));
        dispatch(login(data));
      }, 100);
    }
  }, []);

  return (
    <>
      <Profile myProfile={myProfile} status={status} />
    </>
  );
};

export default ProfileContainer;
