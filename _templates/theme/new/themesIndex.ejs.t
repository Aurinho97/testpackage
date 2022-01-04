---
inject: true
to: src/styles/themes/index.scss
after: ","
skip_if: "<%= h.changeCase.lower(name) %>:"
---
        <%= h.changeCase.lower(name) %>: $<%= h.changeCase.lower(name) %>,