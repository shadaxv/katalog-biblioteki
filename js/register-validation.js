(function (exports) {
    function valOrFunction(val, ctx, args) {
        if (typeof val == "function") {
            return val.apply(ctx, args);
        } else {
            return val;
        }
    }

    function InvalidInputHelper(input, options) {
        input.setCustomValidity(valOrFunction(options.defaultText, window, [input]));

        function changeOrInput() {
            if (input.value == "") {
                input.setCustomValidity(valOrFunction(options.emptyText, window, [input]));
            } else {
                input.setCustomValidity("");
            }
        }

        function invalid() {
            if (input.value == "") {
                input.setCustomValidity(valOrFunction(options.emptyText, window, [input]));
            } else {
               input.setCustomValidity(valOrFunction(options.invalidText, window, [input]));
            }
        }

        input.addEventListener("change", changeOrInput);
        input.addEventListener("input", changeOrInput);
        input.addEventListener("invalid", invalid);
    }
    exports.InvalidInputHelper = InvalidInputHelper;
})(window);

InvalidInputHelper(document.getElementById("imie"), {

  defaultText: "Wprowadź minimum 6 znaków.",
  emptyText: "Wprowadź minimum 6 znaków.",
  invalidText: 'Wprowadź minimum 6 znaków.',

});

InvalidInputHelper(document.getElementById("nazwisko"), {

  defaultText: "Wprowadź minimum 6 znaków.",
  emptyText: "Wprowadź minimum 6 znaków.",
  invalidText: 'Wprowadź minimum 6 znaków.',

});

InvalidInputHelper(document.getElementById("login"), {

  defaultText: 'Wprowadź minimum 3 znaki.',
  emptyText: 'Wprowadź minimum 3 znaki.',
  invalidText: 'Wprowadź minimum 3 znaki.',

});

InvalidInputHelper(document.getElementById("password"), {

  defaultText: 'Wprowadź minimum 8 znaków. Hasło musi zawierać małe i wielkie litery, cyfry oraz znaki specjalne.',
  emptyText: 'Wprowadź minimum 8 znaków. Hasło musi zawierać małe i wielkie litery, cyfry oraz znaki specjalne.',
  invalidText: 'Wprowadź minimum 8 znaków. Hasło musi zawierać małe i wielkie litery, cyfry oraz znaki specjalne.',

});

InvalidInputHelper(document.getElementById("repeat-pawssword"), {

  defaultText: 'Wprowadź minimum 8 znaków. Hasło musi zawierać małe i wielkie litery, cyfry oraz znaki specjalne.',
  emptyText: 'Wprowadź minimum 8 znaków. Hasło musi zawierać małe i wielkie litery, cyfry oraz znaki specjalne.',
  invalidText: 'Wprowadź minimum 8 znaków. Hasło musi zawierać małe i wielkie litery, cyfry oraz znaki specjalne.',

});

InvalidInputHelper(document.getElementById("tel"), {

  defaultText: 'Wprowadź poprawny numer telefonu.',
  emptyText: 'Wprowadź poprawny numer telefonu.',
  invalidText: 'Wprowadź poprawny numer telefonu.',

});

InvalidInputHelper(document.getElementById("country-input"), {

  defaultText: 'Wprowadź poprawną nazwę państwa.',
  emptyText: 'Wprowadź poprawną nazwę państwa.',
  invalidText: 'Wprowadź poprawną nazwę państwa.',

});
