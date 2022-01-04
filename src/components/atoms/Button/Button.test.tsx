import React from "react";
import { render } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
    test("Renders Button component", () => {
        render(<Button />);
    });
});
