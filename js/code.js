
		function myFunction() {
    			var x = document.getElementById("myTopnav");
    			if (x.className === "topnav") {
        		x.className += " responsive";
    			} else {
        			x.className = "topnav";
			}
		}


		$(function() {
			// Desired offset, in pixels
			var offset = -80;
			// Desired time to scroll, in milliseconds
			var scrollTime = 500;

			$('a[href^="#"]').click(function() {
				// Need both `html` and `body` for full browser support
				$("html, body").animate({
					scrollTop: $( $(this).attr("href") ).offset().top + offset
				}, scrollTime);

				// Prevent the jump/flash
				return false;
			});
		});

		$(function() {
		  $('#slides').slidesjs({
			width: 940,
			height: 528,
			play: {
			  active: true,
			  auto: true,
			  interval: 4000,
			  swap: true
			}
		  });
		});

			$(function() {

				var player = 1;
				var table = $('table');
				var messages = $('.messages');
				var turn = $('.turn');
				displayNextPlayer(turn, player);

				$('td').click(function() {
					td = $(this);
					var state = getState(td);
					if(!state) {
						var pattern = definePatternForCurrentPlayer(player);
						changeState(td, pattern);
						if(checkIfPlayerWon(table, pattern)) {
						messages.html('Player '+player+' has won.');
						turn.html('');
					} else {
						player = setNextPlayer(player);
						displayNextPlayer(turn, player);
					}
					} else {
					messages.html('This box is already checked.');
					}
				});

				$('.reset').click(function() {
					player = 1;
					messages.html('');
					reset(table);
					displayNextPlayer(turn, player);
				});

			});

		function getState(td) {
		  if(td.hasClass('cross') || td.hasClass('circle')) {
			return 1;
		  } else {
			return 0;
		  }
		}

		function changeState(td, pattern) {
		  return td.addClass(pattern);
		}

		function definePatternForCurrentPlayer(player) {
		  if(player == 1) {
			return 'cross';
		  } else {
			return 'circle';
		  }
		}

		function setNextPlayer(player) {
		  if(player == 1) {
			return player = 2;
		  } else {
			return player = 1;
		  }
		}

		function displayNextPlayer(turn, player) {
		  turn.html('Player turn : '+player);
		}

		function checkIfPlayerWon(table, pattern) {
		  var won = 0;
		  if(table.find('.item1').hasClass(pattern) && table.find('.item2').hasClass(pattern) && table.find('.item3').hasClass(pattern)) {
			won = 1;
		  } else if (table.find('.item1').hasClass(pattern) && table.find('.item4').hasClass(pattern) && table.find('.item7').hasClass(pattern)) {
			won = 1;
		  } else if (table.find('.item1').hasClass(pattern) && table.find('.item5').hasClass(pattern) && table.find('.item9').hasClass(pattern)) {
			won = 1;
		  } else if (table.find('.item4').hasClass(pattern) && table.find('.item5').hasClass(pattern) && table.find('.item6').hasClass(pattern)) {
			won = 1;
		  } else if (table.find('.item7').hasClass(pattern) && table.find('.item8').hasClass(pattern) && table.find('.item9').hasClass(pattern)) {
			won = 1;
		  } else if (table.find('.item2').hasClass(pattern) && table.find('.item5').hasClass(pattern) && table.find('.item8').hasClass(pattern)) {
			won = 1;
		  } else if (table.find('.item3').hasClass(pattern) && table.find('.item6').hasClass(pattern) && table.find('.item9').hasClass(pattern)) {
			won = 1;
		  } else if (table.find('.item3').hasClass(pattern) && table.find('.item5').hasClass(pattern) && table.find('.item7').hasClass(pattern)) {
			won = 1;
		  }
		  return won;
		}

		function reset(table) {
		  table.find('td').each(function() {
			$(this).removeClass('circle').removeClass('cross');
		  });
		}

		function zweryfikuj()
		{
			var kontrolna;
			var isPeselError;
			var loginBlock;
			var weryfikacja = document.getElementById('validateinput').value;
			var weryfikacja2 = document.getElementById('validateinput').value.length;
			if (weryfikacja2 == 11) {
				//dalsza weryfikacja
				tablica = new Array(...weryfikacja);
				if (tablica[2] == 1)
				{
					if (!(tablica[3] == 0 || tablica[3] == 1 || tablica[3] == 2))
					{
						isPeselError = 1;
					}
				}
				else if (tablica[2] == 3)
				{
					if (!(tablica[3] == 0 || tablica[3] == 1 || tablica[3] == 2))
					{
						isPeselError = 2;
					}
				}
				else if (tablica[2] == 5)
				{
					if (!(tablica[3] == 0 || tablica[3] == 1 || tablica[3] == 2))
					{
						isPeselError = 3;
					}
				}
				else if (tablica[2] == 7)
				{

					if (!(tablica[3] == 0 || tablica[3] == 1 || tablica[3] == 2))
					{
						isPeselError = 4;
					}
				}
				else if (tablica[2] == 9)
				{
					if (!(tablica[3] == 0 || tablica[3] == 1 || tablica[3] == 2))
					{
						isPeselError = 5;
					}
				}
				else if(tablica[2] != 9 || tablica[2] != 1 || tablica[2] != 3 || tablica[2] != 5 || tablica[2] != 7)
				{
					if(tablica[3] == 0)
					{
						isPeselError = 6;
					}
				}

				if (tablica[4] == 0 || tablica[4] == 1 || tablica[4] == 2 || tablica[4] == 3)
				{
					if ((tablica[2] == 0 && tablica[3]%2 == 1 && tablica[4] == 3 && tablica[3] != 9) || (tablica[2] == 0 && tablica[3] == 8 && tablica[4] == 3))//miesiąc 01-09, 31 dni
					{
						if (!(tablica[5] == 0 || tablica[5] == 1)) //jeżeli nie jest 30 i 31 dzień
						{
							{
								isPeselError = 7;
							}
						}
					}
					else if ((tablica[2] == 0 && tablica[3]%2 == 0 && tablica[4] == 3 && tablica[3] != 8) || (tablica[2] == 0 && tablica[3] == 9 && tablica[4] == 3))
					{
						if (tablica[5] != 0) //jeżeli nie jest 30 dzień
						{
							{
								isPeselError = 8;
							}
						}
					}
					else if (tablica[2] == 1 && tablica[3]%2 == 0 && tablica[4] == 3)
					{
						if (!(tablica[5] == 0 || tablica[5] == 1))  //jeżeli nie jest 30 i 31 dzień
						{
							{
								isPeselError = 9;
							}
						}
					}
					else if (tablica[2] == 1 && tablica[3]%2 == 1 && tablica[4] == 3)
					{
						if (tablica[5] != 0) //jeżeli nie jest 30 dzień
						{
							{
								isPeselError = 10;
							}
						}
					}

					if (tablica[9]%2 == 1)
					{
						var plec = "Mężczyzna";
					}
					else
					{
						var plec = "Kobieta";
					}

				}
				else
				{
					isPeselError = 11;
				}

				kontrolna = parseInt(tablica[0]) + parseInt(tablica[1]) * 3 + parseInt(tablica[2]) * 7 + parseInt(tablica[3]) * 9 + parseInt(tablica[4]) + parseInt(tablica[5]) * 3 + parseInt(tablica[6]) * 7 + parseInt(tablica[7]) * 9 + parseInt(tablica[8]) + parseInt(tablica[9]) * 3;
				var last = kontrolna.toString().split('').pop();
				if (last == 0)
				{
					last = 0;
				}
				else
				{
					last = 10 - last;
				}
				if (last == tablica[10])
				{
					var btnId = $('input[name=gender]:checked').attr('id');
					if(btnId == "radio1" && plec == "Mężczyzna")
					{
						document.getElementById("peselError").innerHTML = plec + " - PESEL poprawny :)";
						document.getElementById("validateinput").style = "-webkit-box-shadow: none;-moz-box-shadow: none;box-shadow: none";
					}
					else if(btnId == "radio2" && plec == "Kobieta")
					{
						document.getElementById("peselError").innerHTML = plec + " - PESEL poprawny :)";
						document.getElementById("validateinput").style = "-webkit-box-shadow: none;-moz-box-shadow: none;box-shadow: none";
					}
					else if(btnId == "radio3")
					{
						document.getElementById("peselError").innerHTML = plec + " - PESEL poprawny :)";
						document.getElementById("validateinput").style = "-webkit-box-shadow: none;-moz-box-shadow: none;box-shadow: none";
					}
					else
					{
						isPeselError = 14; //zła płeć
					}
				}
				else
				{
					isPeselError = 12;
				}
			}
			else
			{
				isPeselError = 13;
			}

			document.getElementById("peselError").style.display = "block";

			if(isPeselError > 0)
			{
				document.getElementById("validateinput").style = "-webkit-box-shadow: 0px 0px 10px 2px rgba(230, 0, 92,0.9);-moz-box-shadow: 0px 0px 10px 2px rgba(230, 0, 92,0.9);box-shadow: 0px 0px 10px 2px rgba(230, 0, 92,0.9);";
				document.getElementById("peselError").innerHTML = "Podaj poprawny PESEL.<br> Kod błędu: " + isPeselError;
				isPeselError = 0;
			}

			var text;
			var loginVar = document.getElementById("login");
			var textLength = loginVar.value.length;
			if(textLength < 3)
			{
				text = "Za krótki login. Minimum 3 znaki.";
				document.getElementById("login").style = "-webkit-box-shadow: 0px 0px 10px 2px rgba(230, 0, 92,0.9);-moz-box-shadow: 0px 0px 10px 2px rgba(230, 0, 92,0.9);box-shadow: 0px 0px 10px 2px rgba(230, 0, 92,0.9);";
				loginBlock = "block";
			}
			else
			{
				text = "";
				document.getElementById("login").style = "-webkit-box-shadow: none;-moz-box-shadow: none;box-shadow: none";
				loginBlock = "none";
			}
			document.getElementById("loginError").innerHTML = text;
			document.getElementById("loginError").style.display = loginBlock;
			$('html, body').animate({ scrollTop: $('#contact').offset().top-80 }, 500);
           		return false;

		}







var canvas = document.getElementById('myCanvas');
var c = canvas.getContext('2d');

canvas.width  = 600;
canvas.height = 500;
canvas.style.width  = '600px';
canvas.style.height = '500px';

c.beginPath();
c.arc(580, 715, 375, 0, 2 * Math.PI, false);
c.fillStyle = 'green';
c.fill();
c.lineWidth = 2;
c.strokeStyle = '#003300';
c.stroke();

c.beginPath();
c.arc(80, 725, 375, 0, 2 * Math.PI, false);
c.fillStyle = 'green';
c.fill();
c.lineWidth = 2;
c.strokeStyle = '#003300';
c.stroke();

c.beginPath();
c.arc(300, 700, 375, 0, 2 * Math.PI, false);
c.fillStyle = 'green';
c.fill();
c.lineWidth = 2;
c.strokeStyle = '#003300';
c.stroke();

c.beginPath();
c.arc(150, 750, 375, 0, 2 * Math.PI, false);
c.fillStyle = 'green';
c.fill();
c.lineWidth = 2;
c.strokeStyle = '#003300';
c.stroke();

c.beginPath();
c.arc(450, 730, 375, 0, 2 * Math.PI, false);
c.fillStyle = 'green';
c.fill();
c.lineWidth = 2;
c.strokeStyle = '#003300';
c.stroke();

c.beginPath();
c.arc(300, 800, 375, 0, 2 * Math.PI, false);
c.fillStyle = 'green';
c.fill();
c.lineWidth = 2;
c.strokeStyle = '#003300';
c.stroke();

c.beginPath();
c.moveTo(170, 80);
c.bezierCurveTo(130, 100, 130, 150, 230, 150);
c.bezierCurveTo(250, 180, 320, 180, 340, 150);
c.bezierCurveTo(420, 150, 420, 120, 390, 100);
c.bezierCurveTo(430, 40, 370, 30, 340, 50);
c.bezierCurveTo(320, 5, 250, 20, 250, 50);
c.bezierCurveTo(200, 5, 150, 20, 170, 80);
c.closePath();
c.lineWidth = 2;
c.fillStyle = '#ccffff';
c.fill();
c.strokeStyle = '#0077b3';
c.stroke();

c.beginPath();
c.rect(515, 250, 100, 100);
c.fillStyle = '#800000';
c.fill();
c.lineWidth = 1;
c.strokeStyle = '#660000';
c.stroke();


c.beginPath();
c.rect(10, 260, 120, 100);
c.fillStyle = '#800000';
c.fill();
c.lineWidth = 1;
c.strokeStyle = '#660000';
c.stroke();

c.beginPath();
c.rect(225, 215, 130, 120);
c.fillStyle = '#800000';
c.fill();
c.lineWidth = 1;
c.strokeStyle = '#660000';
c.stroke();

c.beginPath();
c.rect(215, 330, 160, 140);
c.fillStyle = '#800000';
c.fill();
c.lineWidth = 1;
c.strokeStyle = '#660000';
c.stroke();


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

for(var j = 0; j < 10; j++)
{
	c.beginPath();
	c.moveTo(514, 255 + (10 * j));
	c.lineTo(616, 255 + (10 * j));
	c.lineWidth = 1;
	c.strokeStyle = '#ffe6e6';
	c.stroke();

	c.beginPath();
	c.moveTo(9, 265 + (10 * j));
	c.lineTo(131, 265 + (10 * j));
	c.lineWidth = 1;
	c.strokeStyle = '#ffe6e6';
	c.stroke();

	for(var i = 0; i < 5; i++)
	{
		c.beginPath();
		c.moveTo(519 + (10 * j), 255 + (20 * i));
		c.lineTo(519 + (10 * j), 265 + (20 * i));
		c.lineWidth = 1;
		c.strokeStyle = '#ffe6e6';
		c.stroke();
	}

	for(var i2 = 0; i2 < 4; i2++)
	{
		c.beginPath();
		c.moveTo(524 + (10 * j), 265 + (20 * i2));
		c.lineTo(524 + (10 * j), 275 + (20 * i2));
		c.lineWidth = 1;
		c.strokeStyle = '#ffe6e6';
		c.stroke();
	}
}

for(var j2 = 0; j2 < 12; j2++)
{
	for(var i3 = 0; i3 < 5; i3++)
	{
		c.beginPath();
		c.moveTo(15 + (10 * j2), 275 + (20 * i3));
		c.lineTo(15 + (10 * j2), 265 + (20 * i3));
		c.lineWidth = 1;
		c.strokeStyle = '#ffe6e6';
		c.stroke();
	}

	for(var i4 = 0; i4 < 4; i4++)
	{
		c.beginPath();
		c.moveTo(12 + (10 * j2), 285 + (20 * i4));
		c.lineTo(12 + (10 * j2), 275 + (20 * i4));
		c.lineWidth = 1;
		c.strokeStyle = '#ffe6e6';
		c.stroke();
	}
}


c.beginPath();
c.moveTo(6, 260);
c.lineTo(70, 210);
c.lineTo(134, 260);
c.fillStyle = '#ffe6e6';
c.fill();
c.closePath();

c.beginPath();
c.moveTo(511, 250);
c.lineTo(561, 210);
c.lineTo(611, 250);
c.fillStyle = '#ffe6e6';
c.fill();
c.closePath();

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



function oceny()
{
  var X = new Array(); //oceny
  var Y = new Array(); //godziny nauki
  var average = 0; //średnia ocen
  var Xavg = new Array(); //ocena - średnia
  var average2 = 0; //średnia ocen
  var Yavg = new Array(); //ocena - średnia
  var XYavg = new Array(); //ocena - średnia
  var Yavg2 = new Array(); //ocena - średnia
  var Xavg2 = new Array(); //ocena - średnia
  var XYavgSum = 0; //
  var Xavg2Sum = 0; //
  var Yavg2Sum = 0; //
	var Xavg3 = new Array();
	var Yavg3 = new Array();
	var XYavg3 = new Array();
	var Xavg3Sum = 0;
	var Yavg3Sum = 0;
	var XYavg3Sum = 0;
  var wynik = 0; //
  var N = 0; //liczba ocen
  var tbl  = document.createElement('table');
	document.getElementById('tableskrypt').appendChild(tbl);

  N = parseInt(prompt("Podaj liczbę ocen!"));

	if(N > 5)
	{
		if(!confirm("Na pewno chcesz wprowadzić więcej niz 5 ocen?"))
		{
			return;
		}
	}

	else if(N == 0 || N !== N)
	{
		alert("N is 0 or is Not a Number");
		return;
	}

  for(var i=0; i<N; i++)
  {
    X[i] = parseFloat(prompt("Podaj ocenę dla X: " + (i+1)));
		if(X[i] !== X[i])
		{
			alert("X is Not a Number");
			return;
		}
    Y[i] = parseFloat(prompt("Podaj czas nauki dla X: " + (i+1)));
		if(Y[i] !== Y[i])
		{
			alert("Y is Not a Number");
			return;
		}

    average = average + X[i];
    average2 = average2 + Y[i];
		if((i + 1) % 10 === 0 && i != 0)
		{
			if(!confirm("Na pewno chcesz wprowadzać dalej?"))
			{
				return;
			}
		}
  }

  average = average / N;
  average2 = average2 / N;

  var tr = tbl.insertRow();
	document.getElementById('tableskrypt').appendChild(tr);
  var td = tr.insertCell();
  td.appendChild(document.createTextNode("X"));
	document.getElementById('tableskrypt').appendChild(td);
  var td = tr.insertCell();
  td.appendChild(document.createTextNode("Y"));
	document.getElementById('tableskrypt').appendChild(td);
  var td = tr.insertCell();
  td.appendChild(document.createTextNode("X - Śr. X"));
	document.getElementById('tableskrypt').appendChild(td);
  var td = tr.insertCell();
  td.appendChild(document.createTextNode("Y - Śr. Y"));
	document.getElementById('tableskrypt').appendChild(td);
  // var td = tr.insertCell();
  // td.appendChild(document.createTextNode("Śr. X * Y"));
	// document.getElementById('tableskrypt').appendChild(td);
  // var td = tr.insertCell();
  // td.appendChild(document.createTextNode("Śr. X ^ 2"));
	// document.getElementById('tableskrypt').appendChild(td);
  // var td = tr.insertCell();
  // td.appendChild(document.createTextNode("Śr. Y ^ 2"));
	// document.getElementById('tableskrypt').appendChild(td);

  for(var i=0; i<N; i++)
  {
    var tr = tbl.insertRow();
		document.getElementById('tableskrypt').appendChild(tr);
    Xavg[i] = X[i] - average;
    Yavg[i] = Y[i] - average2;
		Xavg3[i] = Xavg[i] * Xavg[i];
		Yavg3[i] = Yavg[i] * Yavg[i];
		XYavg3[i] = Xavg[i] * Yavg[i];

    // XYavg[i] = Xavg[i] * Yavg[i];
    // Xavg2[i] = Xavg[i] * Xavg[i];
    // Yavg2[i] = Yavg[i] * Yavg[i];
		//
    // XYavgSum = XYavgSum + XYavg[i];
    // Xavg2Sum = Xavg2Sum + Xavg2[i];
    // Yavg2Sum = Yavg2Sum + Yavg2[i];

    var td = tr.insertCell();
    td.appendChild(document.createTextNode(Math.ceil(X[i] * 10) / 10));
		document.getElementById('tableskrypt').appendChild(td);

    td = tr.insertCell();
    td.appendChild(document.createTextNode(Math.ceil(Y[i] * 10) / 10));
		document.getElementById('tableskrypt').appendChild(td);

    td = tr.insertCell();
    td.appendChild(document.createTextNode(Math.ceil(Xavg[i] * 10) / 10));
		document.getElementById('tableskrypt').appendChild(td);

    td = tr.insertCell();
    td.appendChild(document.createTextNode(Math.ceil(Yavg[i] * 10) / 10));
		document.getElementById('tableskrypt').appendChild(td);

    // td = tr.insertCell();
    // td.appendChild(document.createTextNode(Math.ceil(XYavg[i] * 10) / 10));
		// document.getElementById('tableskrypt').appendChild(td);
		//
    // td = tr.insertCell();
    // td.appendChild(document.createTextNode(Math.ceil(Xavg2[i] * 10) / 10));
		// document.getElementById('tableskrypt').appendChild(td);
		//
    // td = tr.insertCell();
    // td.appendChild(document.createTextNode(Math.ceil(Yavg2[i] * 10) / 10));
		// document.getElementById('tableskrypt').appendChild(td);

  }

	for(i=0; i<N; i++)
  {
		Xavg3Sum = Xavg3Sum + Xavg3[i];
		Yavg3Sum = Yavg3Sum + Yavg3[i];
		XYavg3Sum = XYavg3Sum + XYavg3[i];
	}

	Xavg3Sum = Xavg3Sum / N;
	Yavg3Sum = Yavg3Sum / N;
	XYavg3Sum = XYavg3Sum / N;

	Xavg3Sum = Math.pow(Xavg3Sum, 0.5);
	Yavg3Sum = Math.pow(Yavg3Sum, 0.5);

	wynik = XYavg3Sum / (Yavg3Sum * Xavg3Sum);



  // XYavgSum = XYavgSum / N;
  // Xavg2Sum = Xavg2Sum / N;
  // Yavg2Sum = Yavg2Sum / N;
	//
  // Xavg2Sum = Math.pow(Xavg2Sum, 0.5);
  // Yavg2Sum = Math.pow(Yavg2Sum, 0.5);
	//
  // wynik = XYavgSum / (Xavg2Sum * Yavg2Sum);
	//
	if(Yavg3Sum == 0)
  {
     wynik = 0;
   }
   if(Xavg3Sum == 0)
   {
     wynik = 0;
  }

  var tr = tbl.insertRow();
	document.getElementById('tableskrypt').appendChild(tr);
  var td = tr.insertCell();
  td.appendChild(document.createTextNode("Wynik:"));
	document.getElementById('tableskrypt').appendChild(td);
	td.setAttribute('colSpan', '2');
  var td = tr.insertCell();
  td.appendChild(document.createTextNode(wynik));
	document.getElementById('tableskrypt').appendChild(td);
  td.setAttribute('colSpan', '2');
  document.body.appendChild(tbl);

}
