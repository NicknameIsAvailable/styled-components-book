import { fn } from "@storybook/test";
import { Button } from "./ui";
import { StoryObj } from "@storybook/react";

const meta = { 
    title: "UI/button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    args: { onClick: fn() }
}

export default meta

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        primary: true,
        children: "Кнопка"
    },
}

export const Secondary: Story = {
    args: {
        children: "Кнопка",
        primary: false
    },
}

export const Small: Story = {
    args: {
        primary: true,
        children: "Кнопка",
        size: "small"
    },
}

export const Medium: Story = {
    args: {
        primary: true,
        children: "Кнопка",
        size: "medium"
    },
}

export const Large: Story = {
    args: {
        primary: true,
        children: "Кнопка",
        size: "large"
    },
}

