import React from "react";
import { shallow } from "enzyme";
import Input from "./Input";

describe("Input.tsx", () => {
  it("renders a React Component", () => {
    const component = shallow(
      <Input
        value=""
        handleInputChange={() => {
          return;
        }}
        handleKeyPress={() => {
          return;
        }}
      />
    );

    expect(component).toBeDefined();
  });
});
