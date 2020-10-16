import { IDashBoard } from "Models/IDashBoard";
import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";

const data: IDashBoard[] = [
    {
      id: 1,
      line1: "62",
      title: "Students",
      type: "profiles",
    },
    {
      id: 2,
      line1: "6.8",
      title: "Average Markes",
      type: "calculation",
    },
    {
      id: 3,
      line1: "9",
      line2: "(14%)",
      title: "Underperforming students",
      type: "calculation",
    },
  ];

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Card data={data[0]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
