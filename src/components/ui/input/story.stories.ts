import { fn } from "@storybook/test";
import { Input } from "./ui";
import { StoryObj } from "@storybook/react";

const meta = { 
    title: "UI/input",
    component: Input,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    args: { onClick: fn() }
}

export default meta

type Story = StoryObj<typeof meta>;

export const Small: Story = {
    args: {
        label: "Имя",
        placeholder: "Семен",
        size: "small"
    },
}

export const Medium: Story = {
    args: {
        label: "Имя",
        placeholder: "Семен",
        size: "medium"
    },
}

export const Large: Story = {
    args: {
        label: "Имя",
        placeholder: "Семен",
        size: "large"
    },
}
