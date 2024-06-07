"use client";

import React, { FC } from 'react';
import { IButtonProps } from './model';
import styled from 'styled-components';

const StyledButton = styled.button`
    background: #fff;
`;

const Button: FC<IButtonProps> = ({ children }) => {
    return (
        <StyledButton>
            {children}
        </StyledButton>
    );
};

export default Button;
