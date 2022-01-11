import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Profile from "./profile";
import { getUserStatus } from "../../../redux/actions";
import { useHistory } from "react-router-dom";

const ProfileContainer = () => {
  // const params = useParams();
  const { location } = useHistory();
  console.log(location.pathname);
  const dispatch = useDispatch();
  const { userId, isAuth } = useSelector((state) => state.authR);
  const { myProfile, status } = useSelector((state) => state.profR);
  console.log(myProfile);

  useEffect(() => {
    dispatch(getUserStatus(userId));
  }, [myProfile]);

  // useEffect(() => {
  //   if (isAuth === false) {
  //     <Redirect to="/login" />;
  //   }
  // }, [isAuth]);

  return (
    <>
      <Profile myProfile={myProfile} status={status} />
    </>
  );
};

export default ProfileContainer;
