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
						  <li class="hvr-shutter-out-vertical"><a href="#" style="background-color: #fc3; color: white;"><div>KONTAKT</div></a></li>
						  <li class="hvr-shutter-out-vertical"><a href="wspolpraca"><div>WSPÓŁPRACA</div></a></li>
						  <li class="hvr-shutter-out-vertical"><a href="o-nas"><div>O NAS</div></a></li>
						  <li class="hvr-shutter-out-vertical"><a href="sklep"><div>SKLEP</div></a></li>
						  <li class="hvr-shutter-out-vertical"><a href="katalog"><div>KATALOG</div></a></li>
						</ul>
					</div>
					<div style="clear; both"></div>

				</header>

				<div class="contact-container">
					<form id="contact-form" class="contact-form-style">
						<h1>Napisz do nas.</h1>
						<h2>Wypełnij formularz, odpowiemy w przeciągu 24 godzin.</h2>
						<div>
							<label>
								<span>Imię</span>
								<input type="text" name="" value="" tabindex="1" required>
							</label>
						</div>
						<div>
							<label>
								<span>Email</span>
								<input type="email" name="" value="" tabindex="2" required>
							</label>
						</div>
						<div>
							<label>
								<span>Wiadomość</span>
								<textarea  rows="7" name="" value="" tabindex="3" required></textarea>
							</label>
						</div>
						<input type="submit" tabindex="4" class="button-contact" value="Wyślij wiadomość">
					</form>
				</div>

        <?php include 'footer.php';?>

		</div>

		<div class="noentry"><div class="noentrymsg">Nie obsługujemy urządzeń poniżej 290px <br> Kup sobie normalny telefon biedaku XDD</div></div>

	</body>

</html>
