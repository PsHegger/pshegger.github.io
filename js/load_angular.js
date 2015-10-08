<!--
// Email obfuscator script 2.1 by Tim Williams, University of Arizona
// Random encryption key feature by Andrew Moulden, Site Engineering Ltd
// This code is freeware provided these four comment lines remain intact
// A wizard to generate this code is at http://www.jottings.com/obfuscator/
coded = "AZzfQQfL@QyJl3.5Wy"
key = "JhmUPHIvQAcXZu2lBMFzyYdCwVbr5Ono73xD860SetNqaLR9kW4EgpjGsKfi1T"
shift=coded.length
link=""
for (i=0; i<coded.length; i++) {
  if (key.indexOf(coded.charAt(i))==-1) {
    ltr = coded.charAt(i)
    link += (ltr)
  }
  else {     
    ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
    link += (key.charAt(ltr))
  }
}
//-->

var app = angular.module('StarterApp', ['ngMaterial', 'ngMdIcons'])
.config(function($mdThemingProvider) {
	$mdThemingProvider.theme('default')
		.primaryPalette('teal')
		.accentPalette('grey');
})
.config(['$mdIconProvider', function($mdIconProvider) {
	$mdIconProvider
		.iconSet('fontello', '/res/fontello.svg', 24);
}]);

app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };

  $scope.contacts = [
  	{
  		url: "mailto:"+link,
  		icon: "email",
  		color: "#d14836",
  		text: link
  	},
  	{
  		url: "https://hangouts.google.com/",
  		icon: "hangouts",
  		color: "#49ab81",
  		text: "pshegger"
  	},
  	{
  		url: "https://www.facebook.com/gergely.hegedus",
  		icon: "facebook-box",
  		color: "#3b5998",
  		text: "gergely.hegedus"
  	},
  	{
  		url: "https://twitter.com/pshegger",
  		icon: "twitter",
  		color: "#00aced",
  		text: "@pshegger"
  	},
  	{
  		url: "https://plus.google.com/+GergelyHegedüs",
  		icon: "google-plus",
  		color: "#dd4b39",
  		text: "+GergelyHegedüs"
  	},
  	{
  		url: "https://hu.linkedin.com/pub/gergely-hegedüs/65/942/5a2",
  		icon: "linkedin-box",
  		color: "#007bb6",
  		text: "Gergely Hegedüs"
  	},
  	{
  		url: "https://github.com/pshegger",
  		icon: "github-circle",
  		color: "#333333",
  		text: "pshegger"
  	}
  ];
 
}]);