---
to: "<%= type === 'atom'|| type === 'molecule'|| type === 'organism'
? `src/components/${type}s/${h.capitalize(name)}/index.ts`
: null %>"
---
export { default } from "./<%= h.capitalize(name) %>";
