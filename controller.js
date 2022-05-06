function logIn() {
  for (let i = 0; i < model.users.length; i++) {
    if (
      model.login.brukernavn == model.users[i].brukernavn &&
      model.login.passord == model.users[i].passord
    ) {
      alert("Du er logget inn som " + model.users[i].navn);
      model.loggedInUser = model.users[i].navn;
      changePage('homePage');
      return;
    }
    else {
        feilmeldingLogin = 'Feil brukernavn og eller passord';
    }
    updateView();
  }
}

function registrer() {
  model.users.push({
    navn: model.newuser.navn,
    brukernavn: model.newuser.brukernavn,
    passord: model.newuser.passord,
  });
  changePage('logIn');
  alert("ny bruker er laget");

}

// function goBack() {
//     window.history.go(-1)
// }
