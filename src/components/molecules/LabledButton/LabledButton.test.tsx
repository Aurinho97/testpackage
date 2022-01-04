import React from "react";
import { render } from "@testing-library/react";

import LabledButton from "./LabledButton";

describe("LabledButton", () => {
    test("Renders LabledButton component", () => {
        render(<LabledButton />);
    });
});
