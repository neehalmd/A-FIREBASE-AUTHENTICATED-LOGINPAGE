

var firebaseConfig = {
  apiKey: "AIzaSyClHR5XyJcVa6v8_N8dMrgnovWn3AlU-14",
  authDomain: "neehal-c1992.firebaseapp.com",
  projectId: "neehal-c1992",
  storageBucket: "neehal-c1992.appspot.com",
  messagingSenderId: "856259802259",
  appId: "1:856259802259:web:14ce89bd15cfabc1eb4966",
  measurementId: "G-CV4QNKP580"
};
firebase.initializeApp(firebaseConfig);
const auth= firebase.auth()
const database = firebase.database()

// create user

function register() {
  name1=document.getElementById("username").value
  email=document.getElementById("newemail").value
  password=document.getElementById("newpass").value
  if(validate_mail(email)==false || validate_pass(password)==false ){
        alert('Something is wrong with either the email or password')
        return
  }
  auth.createUserWithEmailAndPassword(email,password)
  .then(function(){
    var user = auth.currentUser

    var database_ref = database.ref()

    var user_data = {
      email : email,
      password : password,
      username : name1,
      last_login : Date.now()

    }

    database_ref.child('users/'+use.uid).set(user_data)

    alert('USER CREATED')
  })
    .catch(function(error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
  })
}

function login  (){
  console.log('clicked')
  email=document.getElementById("email").value
  password=document.getElementById("passcode").value
  if(validate_mail(email)==false || validate_pass(password)==false ){
        alert('Something is wrong with either the email or password')
        return
  }
  auth.signInWithEmailAndPassword(email,password)
  .then(function() {
    var user= auth.currentUser
    var database_ref = database.ref()
    var user_data={
      last_login : Date.now()
    }
    database_ref.child('users/'+user.uid).update(user_data)
    alert("logged in")
  })
  .catch(function(error) {
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
  })
}
function validate_mail(email){
  expression=/^[^@]+@\w+(\.\w+)+\w$/
  if(expression.test(email)==true){
    return true
  }else{
    return false
  }

}
function validate_pass(password){
  
  if(password<5){
    return false
  }else{
    return true
  }

}









/* js for changing between signup amd login (class values are added through
  js and for the new class design is specified in css file) */

const wrapper =document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const logbtn =document.querySelector('.btnLogin-popup');
const signbtn=document.querySelector('.btnSign-popup');

registerlink.addEventListener('click',()=> {
 
  wrapper.classList.add('active');

});

loginlink.addEventListener('click',()=>{
  wrapper.classList.remove('active')
});

signbtn.addEventListener('click',()=>{

  wrapper.classList.add('active');
});
logbtn.addEventListener('click',()=>{

  wrapper.classList.remove('active');
});
/*--------------------------------------------------------------------------- */



