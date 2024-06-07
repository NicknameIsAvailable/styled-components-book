import { ReactNode } from "react";

export interface IButtonProps {
    children?: ReactNode | string;
    primary?: boolean;
    label?: string;
}