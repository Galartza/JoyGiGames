import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';
import LoginForm from '../Login/Login.jsx'; // Importar el componente del formulario de inicio de sesión
import RegisterForm from '../Register/Register.jsx'; // Importar el componente del formulario de registro

function Example(props) {
  const { className, isOpen, toggle } = props;
  const [isLoginForm, setIsLoginForm] = useState(true); // Estado para controlar si se muestra el formulario de inicio de sesión o el de registro

  // Función para cambiar entre el formulario de inicio de sesión y el de registro
  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Inicia sesion</ModalHeader>
        <ModalBody>
          {/* Renderizar el formulario de inicio de sesión si isLoginForm es true, de lo contrario, renderizar el formulario de registro */}
          {isLoginForm ? <LoginForm /> : <RegisterForm />}
        </ModalBody>
        <ModalFooter>
          {/* Botón para cambiar entre el formulario de inicio de sesión y el de registro */}
          <Button color="link" onClick={toggleForm}>
            {isLoginForm ? "¿No tienes una cuenta? Regístrate aquí" : "¿Ya tienes una cuenta? Inicia sesión aquí"}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

Example.propTypes = {
  className: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Example;
