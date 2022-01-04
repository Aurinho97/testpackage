---
to: src/styles/themes/<%= h.changeCase.lower(name) %>/index.scss
---
@use "../../utilities";

@import "colors";
@import "typography";
@import "spacing";

$<%= h.changeCase.lower(name) %>: utilities.map-collect(
                $colors,
                $typography,
                $spacing
);
