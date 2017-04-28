var app = {
	// Declare a global variable
	userId: null
	, userGuid: null
	, senderID: null
	, msgID: null
	, mainURL: "https://griffis.edumedia.ca/mad9022/steg/"
	, init: function () {
		document.addEventListener('deviceready', app.onDeviceReady);
	}
	, onDeviceReady: function () {
			
			document.getElementById('loginBtn').addEventListener('touchend', app.login);
			document.getElementById('registerBtn').addEventListener('touchend', app.register);

		}
		
	// Function to login 	
	, login: function () {
			let username = document.getElementById('userName').value;
			let email = document.getElementById('userEmail').value;
				
				let formData = new FormData();
				formData.append("user_name", username);
				formData.append("email", email);
				let options = {
					method: 'post'
					, mode: 'cors'
					, body: formData
				};
				let req = new Request("https://griffis.edumedia.ca/mad9022/steg/login.php");
				fetch(req, options).then(function (response) {
					return response.json();
				}).then(function (data) {
					if (data.code != 0) {
						document.getElementById("error").innerHTML = data.message;
                        console.log("The Data is " + data);
					}
					else {
						app.userId = data.user_id;
						app.userGuid = data.user_guid;
						document.getElementById("error").innerHTML = "";
					}
				}).catch(function (err) {
					console.log("The Error " + err.message);
				});
			
		}
    // Function to Register 
	, register: function () {
			let username = document.getElementById("username").value;
			let email = document.getElementById("email").value;
			
				document.getElementById("error").innerHTML = "";
				let formData = new FormData();
				formData.append("user_name", username);
				formData.append("email", email);
				let options = {
					method: 'post'
					, mode: 'cors'
					, body: formData
				};
				// fetching data from register php page
				let req = new Request("https://griffis.edumedia.ca/mad9022/steg/register.php");
				fetch(req, options).then(function (response) {
					return response.json();
				}).then(function (data) {
					if (data.code != 0) {
						document.getElementById("error").innerHTML = data.message;
                        console.log("The Data is " + data);
					}
					else {
						app.userId = data.user_id;
						app.userGuid = data.user_guid;
						document.getElementById("error").innerHTML = "";
					}
				}).catch(function (err) {
				    console.log("The Error " + err.message);
				});
			
		}
};
app.init();