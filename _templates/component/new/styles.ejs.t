---
to: "<%= type === 'atom'|| type === 'molecule'|| type === 'organism'
? `src/components/${type}s/${h.capitalize(name)}/${h.capitalize(name)}.module.scss`
: null %>"
---
.root {
    /** styles */
}
