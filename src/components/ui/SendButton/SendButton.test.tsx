import React from "react";
import SendButton from "./SendButton";
import { shallow } from "enzyme";

describe("SendButton", () => {
  it("should render a React Component", () => {
    const component = shallow(
      <SendButton
        handleSubmit={() => {
          return;
        }}
      />
    );

    expect(component).toBeDefined();
  });
});
