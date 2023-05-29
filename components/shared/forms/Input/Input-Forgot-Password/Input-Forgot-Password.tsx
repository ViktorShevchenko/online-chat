import React from "react";

type Props = {
  type?: string;
  placeholder: string;
  name: string;
}

const Input: React.FC<Props> = ({type="text", placeholder, name}) => {
  return (
    <fieldset className="relative mb-7">
      <label>
        <input
          className="w-full py-5 pr-5 pl-5 bg-slate-500 rounded-3xl text-lg placeholder:text-grey-500 text-white"
          type={type}
          placeholder={placeholder}
          name={name}
        />
      </label>
    </fieldset>
  );
};

export default Input;
