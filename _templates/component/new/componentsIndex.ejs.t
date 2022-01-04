---
inject: true
to: "<%= type === 'atom'|| type === 'molecule'|| type === 'organism'
? `src/components/${type}s/index.ts`
: null %>"
skip_if: export { default as <%= h.capitalize(name) %> } from "./<%= h.capitalize(name) %>"
append: true
---
export { default as <%= h.capitalize(name) %> } from "./<%= h.capitalize(name) %>";