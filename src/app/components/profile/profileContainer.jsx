import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Profile from "./profile";
import { getUserStatus } from "../../../redux/actions";
import { ProfileWrap } from "./profileWrap";

const ProfileContainer = () => {
  const dispatch = useDispatch();
  const { login, userId } = useSelector((state) => state.authR);
  const { myProfile, status } = useSelector((state) => state.profR);

  useEffect(() => {
    dispatch(getUserStatus(userId));
    // dispatch(getMyProfile(userId));
  }, [myProfile]);

  return (
    <>
      {login ? (
        <Profile myProfile={myProfile} login={login} status={status} />
      ) : (
        <ProfileWrap>
          <h3>Вы не авторизованы</h3>
        </ProfileWrap>
      )}
    </>
  );
};

export default ProfileContainer;
