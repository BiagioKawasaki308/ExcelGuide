const scriptURL = 'https://script.google.com/macros/s/AKfycbzIJg9rFEDVNXG1I66iEA5ImDmB4WxI2dvzNC9dzlrJCL_ux9IdhD0Dx8qQCswKQys8/exec';

const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
  e.preventDefault();

  // Invia i dati del modulo
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => response.json())
    .then(data => {
      if (data.result === 'registered') {
        // Reindirizza a index2.html se l'email è registrata
        window.location.href = 'index2.html';
      } else if (data.result === 'not_registered') {
        // Mostra l'alert se l'email non è registrata
        alert('Questa mail non è registrata.');
      } else {
        alert('Si è verificato un errore. Riprova più tardi.');
      }
    })
    .catch(error => {
      console.error('Error!', error.message);
    });
});
