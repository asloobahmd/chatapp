import React from "react";

const GenderCheckbox = () => {
  return (
    <div className="flex my-5 gap-x-4">
      <div>
        <label className="flex items-center gap-x-2 ">
          <span>Male</span>
          <input type="checkbox" />
        </label>
      </div>
      <div>
        <label className="flex items-center gap-x-2 ">
          <span>Female</span>
          <input type="checkbox" />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
