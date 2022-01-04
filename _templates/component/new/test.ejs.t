---
to: "<%= type === 'atom'|| type === 'molecule'|| type === 'organism'
? `src/components/${type}s/${h.capitalize(name)}/${h.capitalize(name)}.test.tsx`
: null %>"
---
import React from "react";
import { render } from "@testing-library/react";

import <%= h.capitalize(name) %> from "./<%= h.capitalize(name) %>";

describe("<%= h.capitalize(name) %>", () => {
    test("Renders <%= h.capitalize(name) %> component", () => {
        render(<<%= h.capitalize(name) %> />);
    });
});
