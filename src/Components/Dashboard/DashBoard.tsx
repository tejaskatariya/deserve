import { IDashBoard } from "Models/IDashBoard";
import React, { Fragment, useEffect, useState } from "react";
import { get } from "../../Services/HTTP";
import Card from "../Card/Card";
import Student from "../Student/Student";

const DashBoard: React.FC = () => {

   const [dashBoardData, setDashBoardData] = useState<IDashBoard[]>([]);

   useEffect(() => {
      get("http://my-json-server.typicode.com/shripad-agashe/fake-api/dashboard")
      .then((response) => {
        if (response && response.data) {
            setDashBoardData(response.data);
        }
      })
      .catch((error) => {
        setDashBoardData([]);
      });
   }, []);

   return (
    <Fragment>
      <div style={{display: "flex", flexDirection: "row", marginTop: "20px"}}>
        {dashBoardData && dashBoardData.length && dashBoardData.map((data) => {
            return (
                <Card key={data.id} data={data} />
            );
        })}
      </div>
      <div style={{marginTop: "20px"}}>
          <Student />
      </div>
    </Fragment>
  );
};

export default DashBoard;
