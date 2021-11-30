import React from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';
const CustomAlert = ({
  title,
  message,
  visibleAlert,
  confirmText,
  cancelText,
  cancelBtn,
  confirmBtn,
  isCancelButton=true,
}) => {
  return (
    <AwesomeAlert
      show={visibleAlert}
      showProgress={false}
      title={title}
      message={message}
      closeOnTouchOutside={true}
      closeOnHardwareBackPress={false}    
      showConfirmButton={true}
      showCancelButton={isCancelButton}
      cancelText={cancelText}
      confirmText={confirmText}
      confirmButtonColor="#27630F"
      cancelButtonColor="red"
      onCancelPressed={cancelBtn}
      onConfirmPressed={confirmBtn}
      contentContainerStyle={{
        maxWidth: '80%',
        width: '80%',
        borderRadius: 5,
        backgroundColor: '#fff',
        padding: 10,
      }}
    />
  );
};

export default CustomAlert;
