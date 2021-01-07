import React from "react";
import ChatBot from "./ChatBot";
import { shallow } from "enzyme";

describe("/src/components/ChatBot", () => {
  it("renders a react Component", () => {
    const component = shallow(<ChatBot />);

    expect(component).toBeTruthy();
  });
});
