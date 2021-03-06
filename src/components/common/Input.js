import classNames from "classnames";
import React from "react";

const WarningSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    fill="currentColor"
    className="absolute text-red-500 right-2 bottom-3"
    viewBox="0 0 1792 1792"
  >
    <path d="M1024 1375v-190q0-14-9.5-23.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 23.5v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zm-2-374l18-459q0-12-10-19-13-11-24-11h-220q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zm-14-934l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17h-1536q-34 0-63.5-17t-46.5-46q-37-63-2-126l768-1408q17-31 47-49t65-18 65 18 47 49z"></path>
  </svg>
);

function Input(props) {
  const { label, error, name, ...rest } = props;
  return (
    <div className="relative mb-10">
      <label htmlFor={name} className="mr-1 text-gray-700">
        {label}
        <span className="text-red-500 required-dot ml-1">*</span>
      </label>
      <input
        type="text"
        id={name}
        className={classNames(
          `rounded-lg border-transparent
          ring-gray-400 ring-2
        flex-1 appearance-none  
        border-gray-300 w-full py-2 px-4 
        bg-white text-gray-700 
        placeholder-gray-400 text-base 
        focus:outline-none focus:ring-2
        focus:ring-purple-600 focus:border-transparent`,
          { "ring-red-500 ": error }
        )}
        name={name}
        {...rest}
      />
      {error && (
        <>
          <WarningSvg />
          <p className="absolute text-sm text-red-500 -bottom-6">{error}</p>
        </>
      )}
    </div>
  );
}

export default Input;
