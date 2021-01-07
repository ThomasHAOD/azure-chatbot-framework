import React from "react";
import { shallow } from "enzyme";
import YSNavBar from "./NavBar";

describe("YSNavBar", () => {
  it("exports a React component", () => {
    const component = shallow(<YSNavBar />);

    expect(component).toBeDefined();
  });
});
