angular.module('ACT.services', [])


.factory('Maps', function() {
    var myLatlng = new google.maps.LatLng(37.3000, -120.4833);

    var mapOptions = {
        center: myLatlng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    navigator.geolocation.getCurrentPosition(function(pos) {
        map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
        var myLocation = new google.maps.Marker({
            position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
            map: map,
            title: "My Location"
        });
    });


    return {
      get: function() {
        return map;
      }
    };
})

.factory('Questions', function() {
  // Might use a resource here that returns a JSON array
  var questions;
  return {
    get: function(monumentId) {
      switch(monumentId){
        case 0:
          questions = [
          {
            id: 0,
            mid: monumentId,
            question: 'What is the height of the cathedral',
            choices: ["131", "123", "100"],
            answer: "123"
          },
          {
            id: 1,
            mid: monumentId,
            question: 'What is a famous feature of the cathedral',
            choices: ["Rubens paintings", "The coloured glass", "The golden clock"],
            answer: "Rubens paintings"
          },
          {
            id: 2,
            mid: monumentId,
            question: 'What is the foundation of the cathedral built on',
            choices: ["Sand", "Stone", "Cow hides"],
            answer: "Cow hides"
          },
          ];
        break;
        case 1:
          questions = [
          {
            id: 0,
            mid: monumentId,
            question: 'Is Het Steen the oldest building of Antwerp',
            choices: ["Yes", "No"],
            answer: "Yes"
          },
          {
            id: 1,
            mid: monumentId,
            question: 'What crucial part of Semini (Statue) is missing ',
            choices: ["The nose", "The phallus", "The right hand"],
            answer: "The phallus"
          },
          {
            id: 2,
            mid: monumentId,
            question: 'What kind of establishment was Het Steen until 1823',
            choices: ["A prison", "A port", "A slave market"],
            answer: "A prison"
          },
          ];
        break;
        
        case 2:
          questions = [
          {
            id: 0,
            mid: monumentId,
            question: 'What material is the "Lange Wapper" statue made of',
            choices: ["Stone", "Silver", "Bronze"],
            answer: "Bronze"
          },
          {
            id: 1,
            mid: monumentId,
            question: 'What is the origin of the "Lange Wapper" legend',
            choices: ["Wooden appliances", "He was a publican", "He was a serial killer"],
            answer: "Wooden appliances"
          },
          {
            id: 2,
            mid: monumentId,
            question: 'What kind of spirit was "De Lange Wapper"',
            choices: ["A guardian", "An evil spirit", "A poltergeist"],
            answer: "An evil spirit"
          },
          ];
        break;
      }
      return questions;
    }
  };
})

.factory('Achievements', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var achievements = [
  {
    id: 0,
    name: 'Cathedral',
    lastText: 'The famous Cathedral of Antwerp',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum leo risus, pellentesque eget ultricies et, \nefficitur malesuada turpis. Duis sollicitudin nulla in hendrerit ultricies. Suspendisse potenti. \nNulla tristique leo sed urna rutrum, id commodo nisl convallis. Vestibulum ante ipsum primis in faucibus orci luctus \net ultrices posuere cubilia Curae; Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; \nPhasellus eget venenatis libero. Fusce vitae leo eget eros mattis blandit. Mauris id lacus a turpis venenatis vestibulum \nultrices ut justo. Pellentesque auctor ornare bibendum. Duis sollicitudin dolor orci, vel aliquet tortor mattis id. \nPraesent facilisis vehicula sem ac pretium. Vestibulum quis ultricies quam. Vestibulum finibus metus vel eros feugiat \nsollicitudin. Proin nec diam turpis. Quisque at tortor non augue bibendum tincidunt. Suspendisse vestibulum non tellus \neu congue. Vivamus eleifend ornare neque, sit amet auctor lorem semper at. \nNulla rhoncus ex velit, quis rutrum sapien eleifend eget.",
    face: 'img/culture/Cathedral/Cathedral'
  }, 
  {
    id: 1,
    name: 'Het Steen',
    lastText: 'The prison Het Steen',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum leo risus, pellentesque eget ultricies et, \nefficitur malesuada turpis. Duis sollicitudin nulla in hendrerit ultricies. Suspendisse potenti. \nNulla tristique leo sed urna rutrum, id commodo nisl convallis. Vestibulum ante ipsum primis in faucibus orci luctus \net ultrices posuere cubilia Curae; Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; \nPhasellus eget venenatis libero. Fusce vitae leo eget eros mattis blandit. Mauris id lacus a turpis venenatis vestibulum \nultrices ut justo. Pellentesque auctor ornare bibendum. Duis sollicitudin dolor orci, vel aliquet tortor mattis id. \nPraesent facilisis vehicula sem ac pretium. Vestibulum quis ultricies quam. Vestibulum finibus metus vel eros feugiat \nsollicitudin. Proin nec diam turpis. Quisque at tortor non augue bibendum tincidunt. Suspendisse vestibulum non tellus \neu congue. Vivamus eleifend ornare neque, sit amet auctor lorem semper at. \nNulla rhoncus ex velit, quis rutrum sapien eleifend eget.",
    face: 'img/culture/HetSteen/HetSteen'
  },
  {
    id: 2,
    name: 'The lange Wapper',
    lastText: 'The lange Wapper',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum leo risus, pellentesque eget ultricies et, \nefficitur malesuada turpis. Duis sollicitudin nulla in hendrerit ultricies. Suspendisse potenti. \nNulla tristique leo sed urna rutrum, id commodo nisl convallis. Vestibulum ante ipsum primis in faucibus orci luctus \net ultrices posuere cubilia Curae; Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; \nPhasellus eget venenatis libero. Fusce vitae leo eget eros mattis blandit. Mauris id lacus a turpis venenatis vestibulum \nultrices ut justo. Pellentesque auctor ornare bibendum. Duis sollicitudin dolor orci, vel aliquet tortor mattis id. \nPraesent facilisis vehicula sem ac pretium. Vestibulum quis ultricies quam. Vestibulum finibus metus vel eros feugiat \nsollicitudin. Proin nec diam turpis. Quisque at tortor non augue bibendum tincidunt. Suspendisse vestibulum non tellus \neu congue. Vivamus eleifend ornare neque, sit amet auctor lorem semper at. \nNulla rhoncus ex velit, quis rutrum sapien eleifend eget.",
    face: 'img/culture/WapperStatue/WapperStatue'
  }];

  return {
    all: function() {
      return achievements;
    },
    remove: function(achievement) {
      achievements.splice(achievements.indexOf(achievement), 1);
    },
    get: function(achievementId) {
      for (var i = 0; i < achievements.length; i++) {
        if (achievements[i].id === parseInt(achievementId)) {
          return achievements[i];
        }
      }
      return null;
    }
  };
});
