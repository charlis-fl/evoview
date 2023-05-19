import { ButtonHTMLAttributes } from 'react';

export type ElementalProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & {
    src: string;
    info: string;
    details: string;
    ottId: number;
    showDetails?: boolean;
};
