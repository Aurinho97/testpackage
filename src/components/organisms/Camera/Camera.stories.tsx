import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Camera from "./Camera";

export default {
    title: "ComponentLibrary/Camera",
    component: Camera
} as ComponentMeta<typeof Camera>;

const Template: ComponentStory<typeof Camera> = (args) => <Camera {...args} />;

export const CameraType = Template.bind({});
CameraType.args = {

};
