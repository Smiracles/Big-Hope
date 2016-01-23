$(document).ready(function() {
  document.getElementById("the-form").onsubmit = function() {validate()};

  function validate() {

    var email = document.forms['the-form']['the-input'].value;
    var dotpos = email.lastIndexOf('.');
    var atpos = email.indexOf('@');

    if (
      dotpos < 1 ||
      dotpos + 2 > email.length ||
      atpos < 1 ||
      dotpos < atpos + 2 ||
      dotpos + 2 >= email.length
    ) {
      alert('Please enter a valid e-mail.');
      return false;
    }
  };
});
