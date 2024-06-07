import React, { FC } from 'react';
import { IContainerProps } from './model';

export const Container: FC<IContainerProps> = ({ children }) => {
    return (
        <div className="container mx-auto">
            {children}
        </div>
    );
};
