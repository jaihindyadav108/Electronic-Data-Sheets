<?php

$db_user = "root";
$db_pass = "";
$db_name = "datasheets";

$db = new PDO('mysql:host=localhost;dbname=' . $db_name . ';charset=utf8', $db_user, $db_pass);
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$var = "";

 if(isset($_POST['create'])){

	$username 		= $_POST['unameR'];
	$password 		= $_POST['pswR'];
	$email 			= $_POST['emailR'];

		$sql = "INSERT INTO login (Username, Password, Email) VALUES(?,?,?)";
		$stmtinsert = $db->prepare($sql);
        try {
            $result = $stmtinsert->execute([$username, $password, $email]);
            $var = 'Registered Successfully....';
        } catch (\Throwable $th) {
            $var = 'Username already in use....';
		}
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Register</title>
</head>
<body>
	<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
	<script>
		var data = "<?php echo $var ?>";
		swal(data)
		.then((willDelete) => {
			javascript:history.go(-1);
			console.log("hi");
		}); 
	</script>
</body>
</html>


