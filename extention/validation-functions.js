// function id(id) {
//     return document.getElementById(id);
// }
// function setCookie(c_name, value, expiredays) {
//     var exdate = new Date();
//     exdate.setDate(exdate.getDate() + expiredays);
//     document.cookie = c_name + "=" + escape(value) +
//         ((expiredays == null) ? "" : ";expires=" + exdate.toUTCString());
// }
// function checkpw(form) {
//     if (form.password.value != form.chkpasswd.value) {
//         id("note3").textContent = "password and checkpassword not same";
//         form.username.focus();
//         return;
//     }
//     else
//         id("note3").textContent = "";
// }
// function register(form) {
//     if (form.firstName.value == "") {
//         id("firstName").textContent = "please enter the username";
//         form.username.focus();
//         return;
//     }
//     else
//         id("firstName").textContent = "";
//     if (form.lastName.value == "") {
//         id("lastName").textContent = "please enter the password";
//         form.lastName.focus();
//         return;
//     }
//     else
//         id("lastName").textContent = "";
//     if (form.email.value == "") {
//         id("email").textContent = "please enter the password";
//         form.email.focus();
//         return;
//     }
//     else
//         id("email").textContent = "";
//     if (form.address.value == "") {
//         id("address").textContent = "please enter the password";
//         form.address.focus();
//         return;
//     }
//     else
//         id("address").textContent = "";

//     var url = 'https://script.google.com/macros/s/AKfycbz1FVYJZS7_xNrB00BwNYmE6VTQVXsMzuSKcS1jNQ/exec';
//     var redirectUrl = 'success-page.html';
//     var ajax = new XMLHttpRequest();
//     ajax.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             var check = this.responseText;
//             if (check == "true") {
//                 setCookie('username', form.username.value, 10);
//                 alert("success");
//                 location.replace(redirectUrl);
//             }
//             else if (check == "same") {
//                 id("check").textContent = "this id has been used";
//                 return;
//             }
//             else if (check == "false") {
//                 id("check").textContent = "wrong username or password";
//                 return;
//             }
//             else {
//                 id("check").textContent = check;
//                 return;
//             }
//         }
//     }
//     var form = document.querySelector('#form');
//     var formData = serialize(form);
//     ajax.open("GET", url);
//     console.log(formData)
//     // ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//     ajax.send(formData);
// }

var form = document.querySelector('#test-form')
var url = 'https://script.google.com/macros/s/AKfycbz1FVYJZS7_xNrB00BwNYmE6VTQVXsMzuSKcS1jNQ/exec';

function onsubmit(e){

    var redirectUrl = 'success-page.html';
    var ajax = new XMLHttpRequest();
    console.log(JSON.stringify(form))

    xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
  location.redirectUrl("success-page.html")
  }};
    ajax.open("GET", url)
   
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send(JSON.stringify(form));

}


// var xhttp;
// if (str == "") {
//   document.getElementById("txtHint").innerHTML = "";
//   return;
// }
// xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//   if (this.readyState == 4 && this.status == 200) {
//   document.getElementById("txtHint").innerHTML = this.responseText;
//   }
// };
// xhttp.open("GET", "getcustomer.php?q="+str, true);
// xhttp.send();
// }
// $('#submit-form').on('click', function(e) {
//   e.preventDefault();
//   var jqxhr = $.ajax({
//     url: url,
//     method: "GET",
//     dataType: "json",
//     data: $form.serializeObject()
//   }).success(
//     // do something
//   );
// })


