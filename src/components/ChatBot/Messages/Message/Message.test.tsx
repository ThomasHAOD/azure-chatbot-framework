import React from "react";
import Message from "./Message";
import { shallow } from "enzyme";
import mockMessage from "../../../../test/mocks/messageMock/mock-message";

describe("/src/containers/Messages/Message", () => {
  it("should export a React component ", () => {
    const component = shallow(<Message message={mockMessage} />);

    expect(component).toBeDefined();
  });
});
