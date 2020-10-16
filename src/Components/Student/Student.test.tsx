import React from "react";
import TestRenderer from "react-test-renderer";
import "../../Services/HTTP";
import Student from "./Student";

const testRenderer = TestRenderer.create(
    <Student />,
);

// tslint:disable-next-line: no-console
console.log(testRenderer.toJSON());

it("renders without crashing", () => {
    
});


