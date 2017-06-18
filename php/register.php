<!DOCTYPE html>

<html lang=pl>

	<?php include 'head.php'; ?>

	<body>

		<div id="loader-wrapper">
	    <div class="load">
	      <hr><hr><hr><hr>
	    </div>
	  </div>

		<div class="container">

				<header>

					<?php include 'header.php'; ?>

					<div class="menu-div" id="menu-div">
						<ul class="menu" id="menu">
						  <li class="hvr-shutter-out-vertical"><a href="./"><div>HOME</div></a></li>
						  <li class="hvr-shutter-out-vertical"><a href="newsy"><div>NEWSY</div></a></li>
						  <li class="hvr-shutter-out-vertical"><a href="kontakt"><div>KONTAKT</div></a></li>
						  <li class="hvr-shutter-out-vertical"><a href="wspolpraca"><div>WSPÓŁPRACA</div></a></li>
						  <li class="hvr-shutter-out-vertical"><a href="o-nas"><div>O NAS</div></a></li>
						  <li class="hvr-shutter-out-vertical"><a href="#"><div>SKLEP</div></a></li>
						  <li class="hvr-shutter-out-vertical"><a href="katalog"><div>KATALOG</div></a></li>
						</ul>
					</div>
					<div style="clear; both"></div>

				</header>

				<div class="register-slider">
					<div class="register" >
						<form class="register-form" >
							<h1>rejestracja</h1>
							<div class="group">
								<input id="imie" class="register-input" type="text" pattern=".{6,}" placeholder=" " required>
								<span class="highlight"></span>
								<span class="bar"></span>
								<label class="label-register">Imie</label>
							</div>

							<div class="group">
								<input id="nazwisko" class="register-input" type="text" pattern=".{6,}" placeholder=" " required>
								<span class="highlight"></span>
								<span class="bar"></span>
								<label class="label-register" >Nazwisko</label>
							</div>

							<div class="group">
								<input id="login" class="register-input" type="text" pattern=".{3,}" placeholder=" " required>
								<span class="highlight"></span>
								<span class="bar"></span>
								<label class="label-register">Nazwa użytkownika</label>
							</div>

							<div class="group">
								<input id="password" class="register-input" type="password" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" placeholder=" " required>
								<span class="highlight"></span>
								<span class="bar"></span>
								<label class="label-register" >Hasło</label>
							</div>

							<div class="group">
								<input id="repeat-pawssword" class="register-input" type="password" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" placeholder=" " required>
								<span class="highlight"></span>
								<span class="bar"></span>
								<label class="label-register" >Powtórz hasło</label>
							</div>

							<div class="group">
								<input class="register-input" type="text" placeholder=" " onfocus="(this.type='date')" onblur="(this.type='text')" id="input-data" required>
								<span class="highlight"></span>
								<span class="bar"></span>
								<label class="label-register" >Data urodzenia</label>
							</div>

							<div class="group">
								<input id="email" class="register-input" type="email" placeholder=" " required>
								<span class="highlight"></span>
								<span class="bar"></span>
								<label class="label-register" >E-mail</label>
							</div>

							<div class="group">
								<input id="tel" class="register-input" type="tel" pattern="[/^+(0-9)$/]{9,14}" placeholder=" " required>
								<span class="highlight"></span>
								<span class="bar"></span>
								<label class="label-register">Numer telefonu</label>
							</div>

							<div class="group">
								<input id="country-input" class="register-input" pattern="[a-zA-Z]+[a-zA-Z\s]+"list="country" placeholder=" " required>
								<span class="highlight"></span>
								<span class="bar"></span>
								<label class="label-register">Państwo</label>
							</div>

							<datalist id="country">
							  <option value="Azerbejdżan">
							  <option value="W Polsce jak w lesie">
							  <option value="Google Chrome">
							  <option value="Haiti">
							  <option value="Safari">
							</datalist>

							<input type="submit" class="button-register" value="Zarejestruj się">

						</form>
					</div>
				</div>

				<?php include 'footer.php';?>
				<script src="../js/register-validation.js"></script>

			</div>

			<div class="noentry"><div class="noentrymsg">Nie obsługujemy urządzeń poniżej 290px</div></div>

		</body>

</html>
