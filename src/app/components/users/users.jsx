import React, { useState } from "react";
import { useSelector } from "react-redux";
import { UsersWrap } from "./usersWrap";
import img from "../../../img/ava.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUsers, setUser } from "../../../redux/actions";
import Pagination from "../../common/pagination";
import { paginate } from "../../utils/paginate";
import Paginator from "../../common/paginator";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.usersR.users);
  // const currentPage = useSelector((state) => state.usersR.currentPage);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = useSelector((state) => state.usersR.pageSize);
  const usersCount = useSelector((state) => state.usersR.usersCount);
  const loading = useSelector((state) => state.loaderR.loading);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
    dispatch(getUsers(pageIndex));
  };

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
                <Link
                  to={`/user/${item.id}`}
                  onClick={() => dispatch(setUser(item))}
                >
                  <div>
                    <img
                      src={item.photos.small === null ? img : item.photos.small}
                      alt="avatar"
                      width="70"
                    />
                    <p>{item.name}</p>
                  </div>
                </Link>
              );
            })}
            <Paginator
              usersCount={usersCount}
              currentPage={currentPage}
              onPageChanged={handlePageChange}
              pageSize={pageSize}
            />
          </>
        )}
      </UsersWrap>
    </>
  );
};

export default Users;
