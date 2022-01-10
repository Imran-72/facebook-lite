import React, { useState } from "react";
import { useSelector } from "react-redux";
import { UsersWrap } from "./usersWrap";
import { useDispatch } from "react-redux";
import { getUsers, setUser } from "../../../../redux/actions";
import { paginate } from "../../../utils/paginate";
import Paginator from "../../common";
import { useEffect } from "react";
import User from "../userPage/user";

const UsersContainer = () => {
  const dispatch = useDispatch();
  const { users, currentPage, pageSize, usersCount } = useSelector(
    (state) => state.usersR
  );
  const loading = useSelector((state) => state.loaderR.loading);
  const [activeBtn, setActiveBtn] = useState(1);

  const handlePageChange = (pageIndex) => {
    dispatch(getUsers(pageIndex));
    setActiveBtn(pageIndex);
  };

  useEffect(() => {
    dispatch(getUsers(currentPage));
  }, []);

  const usersCrop = paginate(users, currentPage, pageSize);
  return (
    <>
      <UsersWrap>
        {loading ? (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <>
            {usersCrop.map((item) => {
              return (
                <div onClick={() => dispatch(setUser(item))}>
                  <User
                    photo={item.photos.large}
                    name={item.name}
                    id={item.id}
                    followed={item.followed}
                  />
                </div>
              );
            })}
            <Paginator
              usersCount={usersCount}
              currentPage={activeBtn}
              onPageChanged={handlePageChange}
              pageSize={pageSize}
            />
          </>
        )}
      </UsersWrap>
    </>
  );
};

export default UsersContainer;
