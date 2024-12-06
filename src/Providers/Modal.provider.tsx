"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react';
import styles from './Modal.module.scss'
import Modal from 'react-modal';

interface ModalContextProps {
    showModal: (content: ReactNode) => void
    hideModal: () => void
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const useModal = (): ModalContextProps => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [modalContent, setModalContent] = useState<ReactNode>(null);
    const [isVisible, setIsVisible] = useState(false);

    const showModal = (content: ReactNode): void => {
        setModalContent(content);
        setIsVisible(true);
    };

    const hideModal = (): void => {
        setIsVisible(false);
        setModalContent(null);
    };

    return (
        <ModalContext.Provider value={{ showModal, hideModal }}>
            {children}
            <Modal 
                isOpen={isVisible}
                onRequestClose={hideModal}
                ariaHideApp={false} // Если вы хотите отключить скрытие основного контента
                className={styles.modalContent} // Используйте ваши стили
                overlayClassName={styles.modalOverlay} // Используйте ваши стили
            >
                <div>
                    {modalContent}
                </div>
            </Modal>
        </ModalContext.Provider>
    );
};