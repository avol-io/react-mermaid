import { ReactNode } from '../../../node_modules/react';
export interface ModalProps {
    /** Modal heading */
    title?: string;
    /** Called when the user dismisses the modal (Escape, overlay click, or close button) */
    onClose: () => void;
    children: ReactNode;
}
export declare function Modal({ title, onClose, children }: ModalProps): import("react/jsx-runtime").JSX.Element;
