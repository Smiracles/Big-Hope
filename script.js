$(document).ready(function() {
  document.getElementById("the-form").onsubmit = function() {validate()};

  function validate() {

   var email = document.forms['the-form']['the-input'].value;
   var period = email.lastIndexOf('.');
   var atPosition= email.indexOf('@');
   if (  /(.+)@(.+){2,}\.(.+){2,}/.code || period < 1 || period + 2 > email.length || atPosition!= email.lastIndexOf('@') || atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
   {
     alert('Please enter a valid e-mail.');
     return false;
   }
 };
 });
