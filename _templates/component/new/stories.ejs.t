---
to: "<%= type === 'atom'|| type === 'molecule'|| type === 'organism'
? `src/components/${type}s/${h.capitalize(name)}/${h.capitalize(name)}.stories.tsx`
: null %>"
---
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import <%= h.capitalize(name) %> from "./<%= h.capitalize(name) %>";

export default {
    title: "ComponentLibrary/<%= h.capitalize(name) %>",
    component: <%= h.capitalize(name) %>
} as ComponentMeta<typeof <%= h.capitalize(name) %>>;

const Template: ComponentStory<typeof <%= h.capitalize(name) %>> = (args) => <<%= h.capitalize(name) %> {...args} />;

export const <%= h.capitalize(name) %>Type = Template.bind({});
<%= h.capitalize(name) %>Type.args = {

};
