import React from "react";
import Footer from "./Footer";
import { shallow } from "enzyme";

describe("/src/components/Footer", () => {
  it("should export a react component", () => {
    const component = shallow(<Footer />);

    expect(component).toBeDefined();
  });
});
