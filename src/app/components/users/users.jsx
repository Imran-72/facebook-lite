import React, { useState } from "react";
import { useSelector } from "react-redux";
import { UsersWrap } from "./usersWrap";
import img from "../../../img/ava.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/actions";
import Pagination from "../../common/pagination";
import { paginate } from "../../utils/paginate";
const Users = () => {
  const users = useSelector((state) => state.usersR.users);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const count = users.length;
  const usersCrop = paginate(users, currentPage, pageSize);
  return (
    <>
      <UsersWrap>
        {count > 0 &&
          usersCrop.map((item) => {
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
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </UsersWrap>
    </>
  );
};

export default Users;
