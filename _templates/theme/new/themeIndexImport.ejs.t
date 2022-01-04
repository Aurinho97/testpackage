---
inject: true
to: src/styles/themes/index.scss
after: ";"
skip_if: "@import '<%= h.changeCase.lower(name) %>';"
---
@import "<%= h.changeCase.lower(name) %>";