import { fn } from "@storybook/test";
import Button from ".";
import { StoryObj } from "@storybook/react";

const meta = { 
    title: "Components/button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        backgroundColor: {
            control: "color"
        }
    },
    args: { onClick: fn() }
}

export default meta

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        primary: true,
        label: "Button",
        children: "Кнопка"
    },
}

export const Secondary: Story = {
    args: {
        label: "Button",
        children: "Кнопка"
    },
}

export const Large: Story = {
    args: {
        primary: true,
        label: "Button",
        children: "Кнопка"
    },
}
