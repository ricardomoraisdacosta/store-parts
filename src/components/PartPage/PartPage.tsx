import React from "react";
import classes from "./PartPage.module.css";
import { useParams } from "react-router";

const PartPage: React.FC<{}> = (props) => {
  const params: { name: string; type: string; price: string } = useParams();
  return (
    <div className={classes.partPage}>
      <h1>Store Parts</h1>
      <p>{params.name}</p>
      <p>{params.type}</p>
      <p>{params.price + "$"}</p>
    </div>
  );
};

export default PartPage;
