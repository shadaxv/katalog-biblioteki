<!DOCTYPE html>

<html lang=pl>

	<head>
		<meta charset="UTF-8">
		<title>Katalog biblioteki online</title>
		<meta name="description" content="Najlepsza biblioteka internetowa we wszechświecie">
		<meta name="keywords" content="biblioteka, wypożyczalnia, książek, książki, książka, lektura, powieść, tom, rodział itd. XD">
		<meta name="author" content="Aleksander Niedźwiedź, Dominik Borowiec, Bartosz Łodej">
		<meta http-equiv="X-Ua-Compatible" content="IE=edge,chrome=1">
		<link rel="stylesheet" href="../css/normalize.css?v1.0">
		<link rel="stylesheet" href="../css/main.css?v1.11">
		<link rel="stylesheet" href="../css/fontello.css?v1.0">
		<link href="https://fonts.googleapis.com/css?family=Lato:300,400,700&subset=latin-ext" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,600&subset=latin-ext" rel="stylesheet">
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<!-- Chrome, Firefox OS, Opera and Vivaldi bar color -->
		<meta name="theme-color" content="#0062a6">
		<!-- Windows Phone bar color -->
		<meta name="msapplication-navbutton-color" content="#0062a6">
		<!-- iOS Safari bar color -->
		<meta name="apple-mobile-web-app-status-bar-style" content="#0062a6">

		<!-- IKONY -->
		<link rel="apple-touch-icon-precomposed" sizes="57x57" href="../icon/apple-touch-icon-57x57.png">
		<link rel="apple-touch-icon-precomposed" sizes="114x114" href="../icon/apple-touch-icon-114x114.png">
		<link rel="apple-touch-icon-precomposed" sizes="72x72" href="../icon/apple-touch-icon-72x72.png">
		<link rel="apple-touch-icon-precomposed" sizes="144x144" href="../icon/apple-touch-icon-144x144.png">
		<link rel="apple-touch-icon-precomposed" sizes="60x60" href="../icon/apple-touch-icon-60x60.png">
		<link rel="apple-touch-icon-precomposed" sizes="120x120" href="../icon/apple-touch-icon-120x120.png">
		<link rel="apple-touch-icon-precomposed" sizes="76x76" href="../icon/apple-touch-icon-76x76.png">
		<link rel="apple-touch-icon-precomposed" sizes="152x152" href="../icon/apple-touch-icon-152x152.png">
		<link rel="icon" type="image/png" href="../icon/favicon-196x196.png" sizes="196x196">
		<link rel="icon" type="image/png" href="../icon/favicon-96x96.png" sizes="96x96">
		<link rel="icon" type="image/png" href="../icon/favicon-32x32.png" sizes="32x32">
		<link rel="icon" type="image/png" href="../icon/favicon-16x16.png" sizes="16x16">
		<link rel="icon" type="image/png" href="../icon/favicon-128.png" sizes="128x128">
		<meta name="application-name" content="&nbsp;">
		<meta name="msapplication-TileColor" content="#FFFFFF">
		<meta name="msapplication-TileImage" content="../icon/mstile-144x144.png">
		<meta name="msapplication-square70x70logo" content="../icon/mstile-70x70.png">
		<meta name="msapplication-square150x150logo" content="../icon/mstile-150x150.png">
		<meta name="msapplication-wide310x150logo" content="../icon/mstile-310x150.png">
		<meta name="msapplication-square310x310logo" content="../icon/mstile-310x310.png">
		<!-- IKONY -->

		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

	</head>

	<body>

		<div class="container">

				<header>

					<?php include 'header.php'; ?>

					<div class="menu-div">
						<ul class="menu">
						  <li class="hvr-shutter-out-vertical"><a href="../index.php"><div>HOME</div></a></li>
						  <li class="hvr-shutter-out-vertical"><a href="newsy.php"><div>NEWSY</div></a></li>
						  <li class="hvr-shutter-out-vertical"><a href="kontakt.php"><div>KONTAKT</div></a></li>
						  <li class="hvr-shutter-out-vertical"><a href="partner.php"><div>WSPÓŁPRACA</div></a></li>
						  <li class="hvr-shutter-out-vertical"><a href="onas.php"><div>O NAS</div></a></li>
						  <li class="hvr-shutter-out-vertical"><a href="#"><div>SKLEP</div></a></li>
						  <li class="hvr-shutter-out-vertical"><a href="katalog.php"><div>KATALOG</div></a></li>
						</ul>
					</div>
					<div style="clear; both"></div>

				</header>

				<div class="register-slider">
					<div class="register" >
						<form class="register-form" >
							<h1>rejestracja</h1>
							<div class="group">
								<input class="register-input" type="text" required>
								<span class="highlight"></span>
								<span class="bar"></span>
								<label class="label-register">Imie</label>
							</div>

							<div class="group">
								<input class="register-input" type="text" required>
								<span class="highlight"></span>
								<span class="bar"></span>
								<label class="label-register" >Nazwisko</label>
							</div>

							<div class="group">
								<input class="register-input" type="text" required>
								<span class="highlight"></span>
								<span class="bar"></span>
								<label class="label-register">Nazwa użytkownika</label>
							</div>

							<div class="group">
								<input class="register-input" type="password" required>
								<span class="highlight"></span>
								<span class="bar"></span>
								<label class="label-register" >Hasło</label>
							</div>

							<div class="group">
								<input class="register-input" type="password" required>
								<span class="highlight"></span>
								<span class="bar"></span>
								<label class="label-register" >Powtórz hasło</label>
							</div>

							<div class="group">
								<input class="register-input" type="text" placeholder=" " onfocus="(this.type='date')" onblur="(this.type='text')" id="input-data" required>
								<span class="highlight"></span>
								<span class="bar"></span>
								<label class="label-register" >Data</label>
							</div>

							<div class="group">
								<input class="register-input" type="email" required>
								<span class="highlight"></span>
								<span class="bar"></span>
								<label class="label-register" >E-mail</label>
							</div>

							<div class="group">
								<input class="register-input" type="tel" required>
								<span class="highlight"></span>
								<span class="bar"></span>
								<label class="label-register">Numer telefonu</label>
							</div>

							<div class="group">
								<input class="register-input" type="text" required>
								<span class="highlight"></span>
								<span class="bar"></span>
								<label class="label-register">Lokalizacja</label>
							</div>

							<input type="submit" class="button-register" value="Zarejestruj się">

						</form>
					</div>
				</div>

				<?php include 'footer.php';?>

			</div>
		</body>
</html>
