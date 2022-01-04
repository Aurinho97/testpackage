import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LabledButton from "./LabledButton";

export default {
    title: "ComponentLibrary/LabledButton",
    component: LabledButton
} as ComponentMeta<typeof LabledButton>;

const Template: ComponentStory<typeof LabledButton> = (args) => <LabledButton {...args} />;

export const LabledButtonType = Template.bind({});
LabledButtonType.args = {

};
