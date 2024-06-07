import { Container } from "./ui";
import { StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta = { 
    title: "UI/container",
    component: Container,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    args: { onClick: fn() }
}

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "Кнопка"
    },
}