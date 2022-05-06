function show() {
  let html = `${navBar() || "" } <br>`;

  html += `${model.view}`;

  appDiv.innerHTML = html;
}

function navBar() {
  if (model.loggedInUser == "") {
    return `<button onclick="changePage('logIn')">Log In</button> 
           <button onclick="changePage('register')">Register</button>
           <br> 
           `;
  }
}

function changePage(side) {
  model.currentPage = side;
  updateView();
}

updateView();
function updateView() {
  console.log(model.currentPage);
  if (model.currentPage == "logIn") logInview();
  if (model.currentPage == "register") registerView();
  if (model.currentPage == "homePage") homeView();
}

function logInview() {
  model.view = ` <br>
     <div>${model.feilmeldingLogin}</div>
     <p>Brukernavn:</p> <input type="text" placeholder="brukernavn" oninput="model.login.brukernavn = this.value"> <br>
     <p>Passord: </p> <input type="text" placeholder="passord" oninput="model.login.passord = this.value"> <br>
     <br>
     <button onclick="logIn()"> Log In </button>
         
       `;

  // model.view = html;
  show();
}

function registerView() {
  let html = `
    
    <p>Navn: </p> <input type="text" placeholder="navn" oninput="model.newuser.navn = this.value"> <br>
    <p>Brukernavn: </p> <input type="text" placeholder="brukernavn" oninput="model.newuser.brukernavn = this.value"> <br>
    <p>Passord: </p> <input type="text" placeholder="passord" oninput="model.newuser.passord = this.value"> <br>
    <br>
    <button onclick="registrer()"> Registrer ny bruker</button>
    `;

  model.view = html;

  show();
}
function homeView() {
  let html = `
    <div class="page">
    <div class="header">
        <h1>Marija website</h1>  
    </div>
    <div class="menu">
        <h1><button onclick="changePage('logIn')">Go Back</button></h1>
        <h2>Home</h2>
        <h2>About</h2>
        <h2>Contact</h2>
    </div>
    <div class="mainContent">
        
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ullam animi, unde sapiente praesentium libero repellat autem nostrum dolore natus expedita a, atque itaque quis necessitatibus porro, aliquam fugit. Odio.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ullam animi, unde sapiente praesentium libero repellat autem nostrum dolore natus expedita a, atque itaque quis necessitatibus porro, aliquam fugit. Odio.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ullam animi, unde sapiente praesentium libero repellat autem nostrum dolore natus expedita a, atque itaque quis necessitatibus porro, aliquam fugit. Odio.</p>
        </div>
    </div>
    <div class="footer">Copyright @2022 </div>
    </div>
    </div>
    `;

  model.view = html;

  show();
}

//  model.view = html;

// function logInView() {
//     let html = '';
//     html += `
//     <input type="text" placeholder="Username/email" oninput="userCheck = this.value"> <br>
//     <input type="text" placeholder="Password" oninput="passwordCheck = this.value"> <br>
//     <button onclick="logIntoSite()">Log in</button>
//     <button onclick="changeView('forgotPassword')">Forgot password?</button>
//     <button onclick="changeView('createAccount')">Create new user</button>
//      `

//     model.view = html;
//     show()
// }
