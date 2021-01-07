import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";

describe("/src/components/Header", () => {
  it("should export a React component", () => {
    const component = shallow(<Header />);

    expect(component).toBeDefined();
  });
});
