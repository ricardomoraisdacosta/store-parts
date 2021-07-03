import React from "react";
import classes from "./OptionsBar.module.css";

const OptionsBar: React.FC<{
  typeList: string[];
  type: string;
  searchQ: string;
  order: number;

  setType: (text: string) => void;
  setSearchQ: (text: string) => void;
  setOrder: (text: number) => void;
  // TODO: Check Loading screens
}> = (props) => {
  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    props.setSearchQ(event.target.value.toLowerCase());
  };

  const typeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    props.setType(event.target.value);
  };
  const orderHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    props.setOrder(Number(event.target.value));
  };

  const selectTypeList = props.typeList.map((item, index) => (
    <option key={item + index} value={item}>
      {item}
    </option>
  ));

  return (
    <div className={classes.optionsBar}>
      <input
        type="text"
        id="searchText"
        name="searchText"
        placeholder="search..."
        onChange={searchHandler}
      ></input>
      <select id="type" name="type" onChange={typeHandler}>
        <option value={""}>type</option>

        {selectTypeList}
      </select>

      <select id="order" name="order" onChange={orderHandler}>
        <option value={0}>price order</option>

        <option value={1}>Lower to Higher</option>
        <option value={-1}>Higher to Lower</option>
      </select>
    </div>
  );
};

export default OptionsBar;
