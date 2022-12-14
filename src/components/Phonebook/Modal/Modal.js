import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ModalBox, StyledBtn, Icon } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, children }) => {
  const onClickBackdrop = e => {
    if (e.currentTarget === e.target) {
      onClose(false);
    }
  };

  useEffect(() => {
    const onKeydown = e => {
      if (e.code === 'Escape') {
        onClose(false);
      }
    };
    window.addEventListener('keydown', onKeydown);
    return () => {
      window.removeEventListener('keydown', onKeydown);
    };
  }, [onClose]);

  return createPortal(
    <Backdrop onClick={onClickBackdrop}>
      <ModalBox>
        <StyledBtn type="button" onClick={() => onClose(false)}>
          <Icon />
        </StyledBtn>
        {children}
      </ModalBox>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;
