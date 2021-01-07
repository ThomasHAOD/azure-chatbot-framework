import React from "react";
import ChatWindow from "./ChatWindow";
import { shallow } from "enzyme";

describe("/src/containers/ChatWindow", () => {
  it("should export a React component", () => {
    const component = shallow(
      <ChatWindow
        handleMessage={() => {
          return;
        }}
      />
    );

    expect(component).toBeDefined();
  });
});
