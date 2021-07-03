import React, { useState } from "react";
import OptionsBar from "./OptionsBar/OptionsBar";
import Part from "../../model/part";
import PartsScreen from "./PartsScreen/PartsScreen";
import classes from "./Main.module.css";

const Main: React.FC<{}> = (props) => {
  const [loading, setLoading] = useState(false);
  const [typeList, setTypeList] = useState([]);
  const [partList, setPartList] = useState([]);
  const [type, setType] = useState("");
  const [searchQ, setSearchQ] = useState("");
  const [order, setOrder] = useState(0);
  const [partsFirstRun, setPartsFirstRun] = useState(true);
  const [typesFirstRun, setTypesFirstRun] = useState(true);

  const typesDB = "http://localhost:8081/store/part-types";
  const partsDB = `http://localhost:8081/store/parts`;

  const fetchTypes = async () => {
    const response = await fetch(typesDB);
    setTypeList(await response.json());
  };

  const fetchParts = async (url: string) => {
    setLoading(true);
    const response = await fetch(url);
    setPartList(await response.json());
    setLoading(false);
  };

  const setSearchQHandler = (searchQ: string) => {
    setType("");
    setSearchQ(searchQ);
    fetchParts(partsDB + `?query=${searchQ}`);
  };

  const setTypeHandler = (type: string) => {
    setSearchQ("");
    setType(type);
    fetchParts(partsDB + `?type=${type}`);
  };

  const setOrderHandler = (order: number) => {
    setOrder(order);
  };

  if (typesFirstRun === true) {
    fetchTypes();
    setTypesFirstRun(false);
  }

  if (partsFirstRun === true) {
    fetchParts(partsDB);
    setPartsFirstRun(false);
  }
  let parts = partList.map(
    (item: any) => new Part(item.name, parseFloat(item.price), item.type)
  );

  if (order === 1) {
    parts.sort((a, b) => {
      return a.price - b.price;
    });
  }
  if (order === -1) {
    parts.sort((a, b) => {
      return b.price - a.price;
    });
  }

  return (
    <div className={classes.main}>
      <h1>Store Parts</h1>
      <OptionsBar
        typeList={typeList}
        type={type}
        searchQ={searchQ}
        order={order}
        setType={setTypeHandler}
        setSearchQ={setSearchQHandler}
        setOrder={setOrderHandler}
      />
      {loading && <p>Loading...</p>}
      {!loading && partList.length === 0 && <p>No Parts Found</p>}
      {!loading && <PartsScreen partList={parts} />}
    </div>
  );
};
export default Main;
