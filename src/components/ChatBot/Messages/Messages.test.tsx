import React from "react";
import Messages from "./Messages";
import { shallow } from "enzyme";
import mockConversation from "../../../test/mocks/messageMock/mock-converstation";

describe("/src/containers/Messages", () => {
  it("should export a React component ", () => {
    const component = shallow(<Messages messageHistory={mockConversation} />);

    expect(component).toBeDefined();
  });
});
