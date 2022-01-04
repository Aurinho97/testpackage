import React from "react";
import { render } from "@testing-library/react";

import Camera from "./Camera";

describe("Camera", () => {
    test("Renders Camera component", () => {
        render(<Camera />);
    });
});
