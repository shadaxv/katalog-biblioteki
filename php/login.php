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
						  <li class="hvr-shutter-out-vertical"><a href="sklep"><div>SKLEP</div></a></li>
						  <li class="hvr-shutter-out-vertical"><a href="katalog"><div>KATALOG</div></a></li>
						</ul>
					</div>
					<div style="clear; both"></div>

				</header>

				<div class="main-slider">
					<div class="slider-shadow">
            <div class="slider-login-form">
							<form>
								<label for="login-input">Login:&nbsp;</label><input type="text" placeholder="Login" id="login-input" required><div style="clear:both"></div>
								<label for="password-input">Hasło:&nbsp;</label><input type="password" placeholder="Hasło" id="password-input" required><div style="clear:both"></div>
								<input class="button-login" type="submit" value="ZALOGUJ SIĘ"><div style="clear:both"></div>
							</form>
						</div>
					</div>
				</div>

				<?php include 'footer.php';?>

		</div>

		<div class="noentry"><div class="noentrymsg">Nie obsługujemy urządzeń poniżej 290px</div></div>

	</body>

</html>
