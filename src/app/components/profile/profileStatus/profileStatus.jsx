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

  const handleStatusChange = (e) => {
    dispatch(setStatus(e.currentTarget.value));
  };
  return (
    <div>
      {!editMode && (
        <div>
          <span onDoubleClick={activateEditMode} role="button">
            {status || "------"}
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
  );
};

export default ProfileStatus;
