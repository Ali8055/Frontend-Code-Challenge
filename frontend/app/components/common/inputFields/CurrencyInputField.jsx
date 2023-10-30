import React from "react";

const CurrencyInputField = (props) => {
  return (
    <div className={props.className}>
      <label className="w-3/12 font-bold">{props.label}</label>
      <div className="w-9/12 ">
        <select>
          {props.options.map((option, index) => (
            <option key={index}>{option.currencyKey}</option>
          ))}
        </select>
        <input
          type="number"
          placeholder={props.placeholder}
          className={` border-b-2 outline-none border-gray-200 focus:border-blue-200  
          ${props.errors[props.name] && "border-red-200"} 
          p-1`}
          value={props.value}
          name={props.name}
          onChange={props.onChange}
        />
        {props.errors &&
        props.errors[props.name] &&
        props.touched &&
        props.touched[props.name] ? (
          <p className=" block text-red-600 text-[12px]  mt-1 font-bold">
            {props.errors[props.name]}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default CurrencyInputField;
