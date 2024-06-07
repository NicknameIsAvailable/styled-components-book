import React, { FC } from 'react';
import { IButtonProps } from './model';
import { tw } from '@/lib/utils';
import { sizes } from '@/shared/sizes';

export const Button: FC<IButtonProps> = ({ children, primary = true, size = "medium" }) => {

    return (
        <button 
            className={tw(
                "rounded-xl px-6 py-2 font-black hover:brightness-125 active:-translate-y-1 duration-150", 
                primary ? "bg-blue-700 text-blue-50" 
                    : "bg-blue-300 text-blue-950",
                sizes[size]
                )}
        >
            {children}
        </button>
    );
};
