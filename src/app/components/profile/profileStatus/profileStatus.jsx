import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setStatus } from "../../../../redux/actions";
import { updateUserStatus } from "../../../../redux/actions";

const ProfileStatus = ({ status }) => {
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deActivateEditMode = () => {
    setEditMode(false);
    dispatch(updateUserStatus(status));
  };

  const handleStatusChange = ({ currentTarget }) => {
    dispatch(setStatus(currentTarget.value));
  };

  return (
    <div className="row text-center">
      <div
        className="col-md-3 offset-md-2 shadow p-4"
        style={{ marginTop: "20px" }}
      >
        {!editMode && (
          <div>
            <span onDoubleClick={activateEditMode} role="button">
              <h5>{status || "-------------"}</h5>
            </span>
          </div>
        )}
        {editMode && (
          <div>
            <input
              autoFocus={true}
              type="text"
              value={status}
              onChange={handleStatusChange}
              onBlur={deActivateEditMode}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileStatus;
