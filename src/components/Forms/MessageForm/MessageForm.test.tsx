import React from "react";
import MessageFormElement from "./MessageForm";
import { shallow } from "enzyme";

describe("/src/compoenents/Forms/MessageForm", () => {
  it("should render a react compponent", () => {
    const component = shallow(
      <MessageFormElement
        handleMessage={() => {
          return;
        }}
      />
    );

    expect(component).toBeDefined();
  });
});
