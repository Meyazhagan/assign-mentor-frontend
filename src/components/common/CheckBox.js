import React from "react";

function Check({ checked, ...rest }) {
  return (
    <input
      type="checkbox"
      checked={checked}
      {...rest}
      //   onChange={}
      className="bg-check
        appearance-none
        bg-white
         m-4  shadow
         border-2
        h-6 w-6 border-gray-300 
        rounded-md checked:bg-blue-500 
        checked:border-transparent focus:outline-none"
    />
  );
}

export default Check;
