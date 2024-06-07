import React, { FC } from 'react';
import { IInputProps } from './model';
import { tw } from '@/lib/utils';
import { sizes } from '@/shared/sizes';

export const Input: FC<IInputProps> = ({ label, size = "medium" , ...props }) => {
    const containerSizes = {
        "small": "gap-1",
        "medium": "gap-2",
        "large": "gap-2"
    }

    const labelSizes = {
        small: "text-sm",
        medium: "text-base",
        large: "text-xl"
    }

    return (
        <div className={tw("gap-2 flex flex-col", containerSizes[size])}>
            <label className={tw(labelSizes[size])}>{label}</label>
            <input className={tw("py-2 px-4 border", sizes[size])} {...props} />
        </div>
    );
};
