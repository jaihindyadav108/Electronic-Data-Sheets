$('#bologna-list a').on('click', function (e) {
	e.preventDefault()
	$(this)
})

function logOreg(index) {
	var login = document.getElementById('l');
	var register = document.getElementById('r');
	var value = [
		"<form class='mx-auto' action='./PHP/login.php' id='login-form' method='post'><input id='usernameL' type='text' class='input' name='unameL' placeholder='ENTER YOUR USERNAME' required><div class='line-box'><div class='line'></div></div><input id='passwordL' type='password' class='input' name='pswL' placeholder='ENTER YOUR PASSWORD' required><div class='line-box'><div class='line'></div></div><button type='submit' name='create' id='login-btn'>submit</button></form>",
		"<form class='mx-auto'  action='./PHP/register.php' id='register-form' method='post'><input id='emailR' class='input' type='email' name='emailR' required placeholder='ENTER YOUR EMAIL'><div class='line-box'><div class='line'></div></div><input id='usernameR' class='input' type='text' name='unameR' required placeholder='ENTER YOUR NAME'><div class='line-box'><div class='line'></div></div><input id='passwordR' class='input' type='password' name='pswR' required placeholder='ENTER YOUR PASSWORD'><div class='line-box'><div class='line'></div></div><button type='submit' id='register-btn' name='create'>submit</button></form>"
	]
	var con = document.getElementById('logedin');
	con.innerHTML = value[index];
	if ( login.classList.contains('active') ) {
		login.classList.remove('active');
		register.classList.add('active');
	} else {
		register.classList.remove('active');
		login.classList.add('active');
	}
}

