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


.factory('Hints', function(){
  var hints = [
    {
      id: 0,
      hint: "This alley is considered as an oasis of tranquility in busy Antwerp city."
    },
     {
      id: 1,
      hint: "Time has stopped here. The cobblestone streets and white facades are picture perfect."
    },
     {
      id: 2,
      hint: "In the 16th century, the wealthy came here to donate bread to the poor, who valued the buns as much as they would pies or 'vlaaien'."
    },
     {
      id: 3,
      hint: "Axel Vervoordt, an antiquarian, bought this part of town and saved it from demolition."
    },
     {
      id: 4,
      hint: "amous restaurants such as Sir Anthony Van Dyck and ‘THofke are located here."
    },
     {
      id: 5,
      hint: "It is the perfect spot to listen to Monday-morning cathedral carillon concerts."
    },
     {
      id: 6,
      hint: "This alley connects Hoogstraat, the Oude Koornmarkt and de Pelgrimstraat."
    },
     {
      id: 7,
      hint: "The entrance to this alley is not smaller than a doorway, make sure you don’t pass it!"
    },
     {
      id: 8,
      hint: "Isn’t that the house of the drunk Lange Wapper chased? The lock looks particularly drunk-proof..."
    }
  ];

  return {
    get: function(score){
      if(score > 0) {
        return hints.slice(0, score);
      }
      return "No hints available yet!";
    }
  }
})

.factory('Achievements', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var achievements = [
  {
    id: 0,
    name: 'Cathedral',
    when: "1521",
    type: "Monument",
    description: "The Cathedral of Our Lady in Antwerp in Belgium, dedicated to the Virgin Mary, is the cathedral of the diocese of the same name."+
                " Built from 1352 to 1521 is one of the five major religious monuments of the city with St. Charles Borromeo Church, St. Andrew's Church, St. Jacques Church and St. Paul's Church."+
                " The bell tower of Our Lady in Antwerp is part of a group of 56 belfries and steeples of Belgium and France on the list of UNESCO World Heritage."+
                " The current church, completed in 1521, after 170 years of construction, replaces an old Romanesque chapel built in the tenth century in the same place"+
                "dedicated to Mary, converted into a Romanesque church in 1124 on the occasion of the founding of the parish. From 1350 to 1520, the Antwerp raise the largest Gothic church in the Netherlands.",
    face: 'img/culture/Cathedral/Cathedral'
  }, 
  {
    id: 1,
    name: 'Het Steen',
    when: "1520",
    type: "Monument",
    description: "Het Steen a medieval fortress in the center of the Old Town of Antwerp. It’s the first stone fortress built in city and it’s also the oldest building in Antwerp."+
                " It’s first name was Antwerp Burcht , gained its present name after alterations by Charles V. It was around 1520."+
                " In the past ther was a prison , Currently, there is a museum and a monument commemorating Soldiers of the Canadian II World War."+
                " At the entrance to Het Steen there is a relief Scandinavian God of youth and fertility. Table near the castle explains , at a time of demographic decline that women asked for help Semini."+
                " For this reason, the people of Antwerp sometime called 'children of Semini'."+
                " Before entering make the castle stands the Monument Depicting Lange Wapper who once terrorized Residents in the Middle Ages.",
    face: 'img/culture/HetSteen/HetSteen'
  },
  {
    id: 2,
    name: 'The lange Wapper',
    when: "1963",
    type: "Statue",
    description: "The Lange Wapper statue is placed in front of the Steen. The statue was made in 1963 by jewelry designer, Albert Poels and presents playful ghost, the Antwerp version of boogie man called ‘Lange Wapper’."+
                " According to legends, Lange Wapper could change his size – either become tall enough to peep through the windows of the castle’s upper floors or disguise himself as a child to drink milk from mother’s breast."+
                " The statue portrays him as giant to chase drunks away. In other version of the legend, Lange Wapper appeared as the shadow in front of a drunken man."+
                " In fear for this giant man constantly ‘walking behind’ him, the drunken man ran off and drowned in the river Scheldt."+
                " Another legend associated with Lange Wapper explains why there are so many statues of the Virgin Mary on the facades in the city centre."+
                " According to that tale, Lange Wapper hated Mary Virgin and it was him who scared of her statutes everywhere fell in the river Scheldt and drowned."+
                " Apart from presenting a shape-shifting ghost from folklore, the Lange Wapper statue was also popular because of its large penis which was venerated by women looking for a cure against infertility."+
                " In 17th Century the Jesuits found the statue too obscene and cut off the phallus.",
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
