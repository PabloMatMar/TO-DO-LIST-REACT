import React from "react";
import { shallow } from "enzyme";
import TODOList from "./TODOList";

describe("TODOList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TODOList />);
    expect(wrapper).toMatchSnapshot();
  });
});
