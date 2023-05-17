import { ReactNode } from 'react';

export type ModalProps = {
    isOpen: boolean;
    closeModal: () => void;
    title: string;
    description: string | ReactNode;
    buttonLabel: string;
    secondaryButtonLabel?: string;
    isSecondaryBtn?: boolean;
    handleSecondary?: () => void;
}
