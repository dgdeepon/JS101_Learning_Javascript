// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

// Database

let DataBase_User = "deepan@gmail.com";
let DataBase_Pass = "123@45";

// Login

let user = "deepan@gmail.com";
let pass = "123@45";

if(DataBase_User==user){
  if(DataBase_Pass==pass){
    console.log("login Succeussful");
  }else {
    console.log("incorrect password");
  }
}
else {
  console.log("incorrect User Please try again");
}