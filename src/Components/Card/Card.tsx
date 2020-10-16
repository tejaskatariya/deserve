import { IDashBoard } from "Models/IDashBoard";
import React, { Fragment } from "react";
import "./cards.css";

interface IProps {
    data: IDashBoard;
}

const Card: React.FC<IProps> = (props) => {
  const {data} = props;
  return (
    <Fragment>
      <div style={{backgroundColor: "#ffffff", marginLeft: "20px", flex: "1", borderRadius: "10px", boxShadow: "2px 2px 10px 4px #EDEDF6"}}>
        <div style={{display: "flex", flexDirection: "row", padding: "20px", alignItems: "center"}}>
            <div className="card-image">
                <img src={`${require(`../../Assets/Images/${data.type}.png`)}`} />
            </div>
            <div style={{display: "flex", flexDirection: "column"}}>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <span className="card-line1">{data.line1}</span><span className="card-line2">{`${data.line2 ? (data.line2) : ""}`}</span>
                </div>
                <div className="card-title">{data.title}</div>
            </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
