import { InputHTMLAttributes } from "react";
import { TSize } from "@/types";

export interface IInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    label?: string;
    size?: TSize;
}
