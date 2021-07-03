import React from "react";
import Part from "../../../model/part";
import classes from "./PartsScreen.module.css";
import { Link } from "react-router-dom";

const PartsScreen: React.FC<{ partList: Part[] }> = (props) => {
  const partTable = props.partList.map((item, index) => {
    if (index % 2)
      return (
        <tr key={"td" + index} style={{ backgroundColor: "whitesmoke" }}>
          <td>{item.name}</td>
          <td>{item.price + "$"}</td>
          <td>{item.type}</td>
          <td>
            <Link to={`part/${item.name}/${item.type}/${item.price}`}>
              Check Part
            </Link>
          </td>
        </tr>
      );
    else
      return (
        <tr key={"td" + index}>
          <td>{item.name}</td>
          <td>{item.price + "$"}</td>
          <td>{item.type}</td>
          <td>
            <Link to={`part/${item.name}/${item.type}/${item.price}`}>
              Check Part
            </Link>
          </td>
        </tr>
      );
  });

  return (
    <div className={classes.partsScreen}>
      <table>
        <tbody>{partTable}</tbody>
      </table>
    </div>
  );
};

export default PartsScreen;
