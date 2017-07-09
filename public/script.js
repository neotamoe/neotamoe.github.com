var myApp = angular.module('myApp', []);

myApp.controller('IndexController', ['$http', '$location', '$timeout', function($http, $location, $timeout) {
  console.log('index controller sourced');

  // globals
  var vm = this;
  vm.contactError = false;
  vm.errorMessage = 'Error sending email.  Please try again.';
  vm.contactSent = false;
  vm.sentMessage = 'Thank you for your message!';

  vm.send = function () {
    var formContent = {
      name: vm.name,
      email: vm.email,
      comments: vm.talkToMe
    };
    console.log('formContent: ', formContent);
    $http({
      method: 'POST',
      data: formContent,
      url: '/contact'
    }).then(function (response){
      if(response.status===200){
        contactMe.reset();
        vm.contactSent = true;
        $timeout(function(){
          vm.contactSent = false;
        }, 3000);
      } else {
        vm.contactError = true;
        $timeout(function(){
          vm.contactError = false;
        }, 3000);
      }
    });
  };



}]);
