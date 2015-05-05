angular.module('ACT.services', [])

.factory('Achievements', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var achievements = [
  {
    id: 0,
    name: 'Cathedral',
    lastText: 'The famous Cathedral of Antwerp',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum leo risus, pellentesque eget ultricies et, \nefficitur malesuada turpis. Duis sollicitudin nulla in hendrerit ultricies. Suspendisse potenti. \nNulla tristique leo sed urna rutrum, id commodo nisl convallis. Vestibulum ante ipsum primis in faucibus orci luctus \net ultrices posuere cubilia Curae; Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; \nPhasellus eget venenatis libero. Fusce vitae leo eget eros mattis blandit. Mauris id lacus a turpis venenatis vestibulum \nultrices ut justo. Pellentesque auctor ornare bibendum. Duis sollicitudin dolor orci, vel aliquet tortor mattis id. \nPraesent facilisis vehicula sem ac pretium. Vestibulum quis ultricies quam. Vestibulum finibus metus vel eros feugiat \nsollicitudin. Proin nec diam turpis. Quisque at tortor non augue bibendum tincidunt. Suspendisse vestibulum non tellus \neu congue. Vivamus eleifend ornare neque, sit amet auctor lorem semper at. \nNulla rhoncus ex velit, quis rutrum sapien eleifend eget.",
    face: 'img/Culture/Cathedral/Cathedral'
  }, 
  {
    id: 1,
    name: 'Het Steen',
    lastText: 'The prison Het Steen',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum leo risus, pellentesque eget ultricies et, \nefficitur malesuada turpis. Duis sollicitudin nulla in hendrerit ultricies. Suspendisse potenti. \nNulla tristique leo sed urna rutrum, id commodo nisl convallis. Vestibulum ante ipsum primis in faucibus orci luctus \net ultrices posuere cubilia Curae; Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; \nPhasellus eget venenatis libero. Fusce vitae leo eget eros mattis blandit. Mauris id lacus a turpis venenatis vestibulum \nultrices ut justo. Pellentesque auctor ornare bibendum. Duis sollicitudin dolor orci, vel aliquet tortor mattis id. \nPraesent facilisis vehicula sem ac pretium. Vestibulum quis ultricies quam. Vestibulum finibus metus vel eros feugiat \nsollicitudin. Proin nec diam turpis. Quisque at tortor non augue bibendum tincidunt. Suspendisse vestibulum non tellus \neu congue. Vivamus eleifend ornare neque, sit amet auctor lorem semper at. \nNulla rhoncus ex velit, quis rutrum sapien eleifend eget.",
    face: 'img/Culture/HetSteen/HetSteen'
  },
  {
    id: 2,
    name: 'Brabo and the giant',
    lastText: 'The statue of Brabo defeating the giant',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum leo risus, pellentesque eget ultricies et, \nefficitur malesuada turpis. Duis sollicitudin nulla in hendrerit ultricies. Suspendisse potenti. \nNulla tristique leo sed urna rutrum, id commodo nisl convallis. Vestibulum ante ipsum primis in faucibus orci luctus \net ultrices posuere cubilia Curae; Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; \nPhasellus eget venenatis libero. Fusce vitae leo eget eros mattis blandit. Mauris id lacus a turpis venenatis vestibulum \nultrices ut justo. Pellentesque auctor ornare bibendum. Duis sollicitudin dolor orci, vel aliquet tortor mattis id. \nPraesent facilisis vehicula sem ac pretium. Vestibulum quis ultricies quam. Vestibulum finibus metus vel eros feugiat \nsollicitudin. Proin nec diam turpis. Quisque at tortor non augue bibendum tincidunt. Suspendisse vestibulum non tellus \neu congue. Vivamus eleifend ornare neque, sit amet auctor lorem semper at. \nNulla rhoncus ex velit, quis rutrum sapien eleifend eget.",
    face: 'img/Culture/BraboStatue/BraboStatue'
  },
  {
    id: 3,
    name: 'Rubens statue',
    lastText: 'The statue of Ruben',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum leo risus, pellentesque eget ultricies et, \nefficitur malesuada turpis. Duis sollicitudin nulla in hendrerit ultricies. Suspendisse potenti. \nNulla tristique leo sed urna rutrum, id commodo nisl convallis. Vestibulum ante ipsum primis in faucibus orci luctus \net ultrices posuere cubilia Curae; Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; \nPhasellus eget venenatis libero. Fusce vitae leo eget eros mattis blandit. Mauris id lacus a turpis venenatis vestibulum \nultrices ut justo. Pellentesque auctor ornare bibendum. Duis sollicitudin dolor orci, vel aliquet tortor mattis id. \nPraesent facilisis vehicula sem ac pretium. Vestibulum quis ultricies quam. Vestibulum finibus metus vel eros feugiat \nsollicitudin. Proin nec diam turpis. Quisque at tortor non augue bibendum tincidunt. Suspendisse vestibulum non tellus \neu congue. Vivamus eleifend ornare neque, sit amet auctor lorem semper at. \nNulla rhoncus ex velit, quis rutrum sapien eleifend eget.",
    face: 'img/Culture/RubensStatue/RubensStatue'
  },
  {
    id: 4,
    name: 'The lange Wapper',
    lastText: 'The lange Wapper',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum leo risus, pellentesque eget ultricies et, \nefficitur malesuada turpis. Duis sollicitudin nulla in hendrerit ultricies. Suspendisse potenti. \nNulla tristique leo sed urna rutrum, id commodo nisl convallis. Vestibulum ante ipsum primis in faucibus orci luctus \net ultrices posuere cubilia Curae; Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; \nPhasellus eget venenatis libero. Fusce vitae leo eget eros mattis blandit. Mauris id lacus a turpis venenatis vestibulum \nultrices ut justo. Pellentesque auctor ornare bibendum. Duis sollicitudin dolor orci, vel aliquet tortor mattis id. \nPraesent facilisis vehicula sem ac pretium. Vestibulum quis ultricies quam. Vestibulum finibus metus vel eros feugiat \nsollicitudin. Proin nec diam turpis. Quisque at tortor non augue bibendum tincidunt. Suspendisse vestibulum non tellus \neu congue. Vivamus eleifend ornare neque, sit amet auctor lorem semper at. \nNulla rhoncus ex velit, quis rutrum sapien eleifend eget.",
    face: 'img/Culture/WapperStatue/WapperStatue'
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
