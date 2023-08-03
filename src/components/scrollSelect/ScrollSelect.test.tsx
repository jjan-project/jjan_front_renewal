import { render } from "@testing-library/react";

import ScrollSelect from "./ScrollSelect";

describe("ScrollSelect", () => {
  it("renders without crashing", () => {
    const { getByText } = render(
      <ScrollSelect
        list={["item1", "item2", "item3"]}
        width={100}
        height={150}
      />,
    );
    expect(getByText("item1")).toBeInTheDocument();
  });
});
