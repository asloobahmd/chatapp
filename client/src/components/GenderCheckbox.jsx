import React from "react";

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex my-5 gap-x-4">
      <div>
        <label className="flex items-center gap-x-2 ">
          <span>Male</span>
          <input
            type="checkbox"
            onChange={() => onCheckboxChange("male")}
            checked={selectedGender === "male"}
          />
        </label>
      </div>
      <div>
        <label className="flex items-center gap-x-2 ">
          <span>Female</span>
          <input
            type="checkbox"
            onChange={() => onCheckboxChange("female")}
            checked={selectedGender === "female"}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
