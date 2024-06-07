import { ButtonHTMLAttributes, ReactNode } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode | string;
    primary?: boolean;
    size?: "small" | "medium" | "large"
}