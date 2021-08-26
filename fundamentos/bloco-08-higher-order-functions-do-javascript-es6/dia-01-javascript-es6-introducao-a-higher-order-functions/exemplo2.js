const button = document.querySelector('#signup-button');

const registerUser = () => {
  console.log('Registrado com sucesso!');
};

button.addEventListener('click', registerUser);
// A HOF é o addEventListener que chama outra função registerUser.