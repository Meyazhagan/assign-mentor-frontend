import React from "react";
import classNames from "classnames";

function SelectInput(props) {
  const { label, error, name, options, ...rest } = props;
  return (
    <div className="relative mb-10">
      <label htmlFor={name} className="mr-1 text-gray-700">
        {label}
        <span className="text-red-500 required-dot ml-1">*</span>
      </label>
      <select
        id={name}
        className={classNames(
          `rounded-lg border-transparent
          ring-gray-400 ring-2
        flex-1 
        border-gray-300 w-full py-2 px-4 
        bg-white text-gray-700 
        placeholder-gray-400 text-base 
        focus:outline-none focus:ring-2
        focus:ring-purple-600 focus:border-transparent`,
          { "ring-red-500 ": error }
        )}
        name={name}
        {...rest}
      >
        <option></option>
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
      {error && (
        <>
          {/* <WarningSvg /> */}
          <p className="absolute text-sm text-red-500 -bottom-6">{error}</p>
        </>
      )}
    </div>
  );
}

export default SelectInput;
