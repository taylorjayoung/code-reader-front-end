import React from 'react';
import ModalWrapper from './ModalWrapper.jsx';

const NoLanguageSelectedModal = (props) => {
  const signIn = provider => {
    props.hideModal();
    props.signIn(provider);
  };

  return (
    <ModalWrapper
      {...props}
      title="Select A Language"
      width={400}
      showOk={false}
    >
      <p>Choose a language from the panel on the left</p>
    </ModalWrapper>
  );
};

export default NoLanguageSelectedModal;
