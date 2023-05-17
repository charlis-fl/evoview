import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ModalProps } from 'common/designSystem/Modal/types';
import lang from 'common/lang';
import cancelIcon from '../../../assets/images/icons/cancel_navy.svg';
import './modal.css';
import ColorButton from '../colorButton/colorButton';

const Modal = (
  {
    isOpen,
    closeModal,
    title,
    description,
    buttonLabel,
    secondaryButtonLabel,
    isSecondaryBtn,
    handleSecondary,
  }: ModalProps,
) => {
  const { headerView, homePage, commonLang } = lang;
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="dialog" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="overlay" />
        </Transition.Child>
        <div className="modal-card">
          <div className="modal-content">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="modal-panel">
                <button type="button" className="cancel-icon" onClick={closeModal}>
                  <img src={cancelIcon} alt="cancel" />
                </button>
                <Dialog.Title
                  className="modal-title"
                  data-cy="modal-title"
                >
                  {title}
                </Dialog.Title>
                <div className="modal-description" data-cy="modal-description">
                  {description}
                </div>
                <div className="btn-container">
                  {
                    isSecondaryBtn && secondaryButtonLabel && (
                      <div className="btn-s">
                        <ColorButton
                          type="button"
                          label={secondaryButtonLabel}
                          data-cy="secondary-btn"
                          onClick={closeModal}
                        />
                      </div>
                    )
                  }
                  <div className="btn-s">
                    <ColorButton
                      type="button"
                      backgroundColor={(buttonLabel === headerView.revokeAdminPrivileges || buttonLabel === headerView.removeThisPerson || buttonLabel === homePage.removePost
                      || buttonLabel === commonLang.delete)
                        ? 'var(--default-interface-apricot-500)' : 'var(--default-interface-indigo-400)'}
                      color="var(--default-interface-white)"
                      hoverColor={(buttonLabel === headerView.revokeAdminPrivileges || buttonLabel === headerView.removeThisPerson || buttonLabel === homePage.removePost
                      || buttonLabel === commonLang.delete)
                        ? '#CC5429' : 'var(--default-interface-indigo-500)'}
                      data-cy="modal-okay-button"
                      label={buttonLabel}
                      onClick={isSecondaryBtn ? handleSecondary : closeModal}
                    />
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
