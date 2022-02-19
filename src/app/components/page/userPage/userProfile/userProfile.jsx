import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { follow, setUserProfile, unfollow } from '../../../../../redux/actions';

const UserProfile = () => {
  const dispatch = useDispatch();
  const {
    fullName: name,
    status,
    userId: id,
  } = useSelector((state) => state.profUserR.user);
  const followed = useSelector((state) =>
    state.usersR.users.map((item) => item.followed)
  );
  console.log(followed);

  useEffect(() => {
    const userID = localStorage.getItem('user-profile');
    if (!id) {
      setTimeout(() => {
        dispatch(setUserProfile(userID));
      }, 100);
    }
  }, [id]);

  return (
    <div className="container">
      <div className="row">
        <div
          className="col-md-8 offset-md-2 shadow p-4"
          style={{ marginTop: '100px' }}
        >
          <div className="d-flex m-2">
            <img
              src={`https://avatars.dicebear.com/api/avataaars/${(
                Math.random() + 1
              )
                .toString(36)
                .substring(7)}.svg`}
              className="img-responsive"
              alt="avatar"
              width="150"
              height="150"
            />
            <div className="d-flex mx-5">
              <h4 className="d-flex mx-5">{name}</h4>
              <span>
                <button className="btn btn-primary">отправить сообщение</button>
              </span>
              <span className="mx-5">
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
        </div>
      </div>
      <div className="row text-center">
        <div
          className="col-md-3 offset-md-2 shadow p-4"
          style={{ marginTop: '20px' }}
        >
          <h5> {status ? status : 'Нет статуса'}</h5>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
