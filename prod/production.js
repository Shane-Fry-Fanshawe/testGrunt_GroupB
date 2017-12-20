var myApp = {
  mainMessage: "Welcome to the app!",

  mainGreeting(){
    console.log('Hey! Welcome to my app');
  }
};

myApp.module1 = {
  saySomething(message){
    console.log(myApp.mainMessage,message, 'I am a module!');
  },

doSomething(){
  console.log('called doSomething from Module1');
}

};

myApp.module1 = {
  saySomethingElse(){
    console.log('I am a from module2! Hope you love it');
  }
};

(() => {

  myApp.mainGreeting();

  myApp.module1.saySomething('oh hello');

  function myFunc(){
    var theHeading = document.querySelector('h1').textContent = myApp.mainMessage;
  }

  myFunc();

})();
