var togglePassword = document.getElementById("toggle-password");
var formContent = document.getElementsByClassName('form-content')[0]; 
var getFormContentHeight = formContent.clientHeight;

var formImage = document.getElementsByClassName('form-image')[0];
if (formImage) {
var setFormImageHeight = formImage.style.height = getFormContentHeight + 'px';
}
if (togglePassword) {
togglePassword.addEventListener('click', function() {
var x = document.getElementById("password");
if (x.type === "password") {
x.type = "text";
} else {
x.type = "password";
}
});
}


// login validation
$("#dashboardLogin").validate({

submitHandler: function() {
window.location.href = "dashboard.html";
},

rules: {

username: {
required: true,
},

password:{
required: true,
}


},

messages : {

username: {
required: "Please enter your email id",
},

password: {
required: "Please enter your password",
}


}

});

// forget validation

$("#forget").validate({

submitHandler: function() {
window.location.href = "#";
},

rules: {

email: {
required: true,
},


},

messages : {

email: {
required: "Please enter your email id",
},




}

});