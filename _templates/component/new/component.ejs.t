---
to: "<%= type === 'atom'|| type === 'molecule'|| type === 'organism'
? `src/components/${type}s/${h.capitalize(name)}/${h.capitalize(name)}.tsx`
: null %>"
---
import React from "react";

import styles from "./<%= h.capitalize(name) %>.module.scss";

export interface <%= h.capitalize(name) %>Props {

}

const <%= h.capitalize(name) %>: React.FC<<%= h.capitalize(name) %>Props> = (props) => {
    return (
        <div className={styles.root}><%= h.capitalize(name) %> component</div>
    );
};

export default <%= h.capitalize(name) %>;
