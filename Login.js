
// 03/10/23 - Login Page JS Inject - https://practicetestautomation.com/practice-test-login/

setTimeout(function (){
	
	if(document.querySelector('#username') !== null && document.querySelector('#password') !== null){	
		console.log(" injecting username and password - v2");

		document.querySelector('#username').value = 'student';
		document.querySelector('#password').value = 'Password123';

		setTimeout(function (){
			console.log("Submit credentials");
			document.querySelector('#submit').click();
		}, 10000);	
	} 

}, 5000);	
	









