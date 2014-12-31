// YOUR CODE HERE:


  var app = {};
  var message = {
    'username': 'BryanJake',
    'text': 'hey devin!!!',
    'roomname': 'floor6',
    'friends': []
  };
$(document).ready(function(){


  app.server = 'https://api.parse.com/1/classes/chatterbox';

  app.send = function(message){
    $.ajax({
      url: app.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
      console.log('chatterbox: Message sent');
      },
      error: function (data) {
      // see: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message');
      }
    });
  };

  app.fetch = function(){
    $.ajax({
      url: app.server,
      type: 'GET',
      contentType: 'application/json',
      success: function (data) {
      console.log('chatterbox: Message recieved');
      displayMessages(data);
      },
      error: function (data) {
      // see: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to recieve message');
      }
    });
  };

  app.clearMessages = function(){
    // var elements = document.getElementsByClassName('#chats');
    $('#chats').empty();
  };

  app.addMessage = function(message){
    var username = getUsername();
    //username = '<a href="#">' + username + ;
    $('#chats').append('<p>' + username + ": " + message + '</p>');
    this.send(message);
  };

  app.addRoom = function(room){
    //iterate through messages and check if room already exists
    $('#roomSelect').append('<a href="#">' + room + '</a>');
  };

  app.addFriend = function(friend){

  };

  app.handleSubmit = function(){

  };

  // var filterByRoom = function(data, room){
  //   for(var i = 0; i<data.results.length; i++){
  //     if(data.results[i].roomname === room){
  //       var messageUser = '<a href="#">' + data.results[i].username + '</a>';  //through an a tag around this
  //       var messageText = data.results[i].text;
  //       $('#chats').append('<p>' + messageUser + ': ' + messageText + '</p>');
  //     }
  //   }
  // };
  var getUsername = function(){
    var myURL = document.URL;
    var userName = myURL.substring(myURL.lastIndexOf("=")+1);
    userName = userName.slice(0,-1);
    return userName;
  }

  // Make buttons work here
  var displayMessages = function(data){
    for(var i = 0; i<data.results.length; i++){
      var username = data.results[i].username;

      //$("a").addClass(username);
      var newMessage = '<p class=' + username + '>' + "<a href=#>" + username + "</a>" + ": " + data.results[i].text + '</p>'

      // var messageUser = '<a href="#">' + username + '</a>';  //through an a tag around this
      // var messageText = data.results[i].text;
      $('#chats').append(newMessage);
  };
    };
  $('.clearButton').on("click", function(){
    app.clearMessages();
  });
  $('.addRoomButton').on('click', function(event){
    event.preventDefault();

    app.addRoom($('input.roomInput').val());
  });

  $('.sendButton').on('click', function(event){
    event.preventDefault();
    app.addMessage($('input.sendInput').val());
  });

  $('#send').on('click', function(event){
    event.preventDefault();
    app.addMessage($('input.message').val());
  });

  app.init = function(){
    //maybe call fetch, should initialize the data
    //setInterval(app.fetch, 1000);
    // app.clearMessages();
    app.fetch();
    // setInterval(function(){
    //   var myDiv = document.getElementById('chats');
    //   myDiv.scrollTop = myDiv.scrollHeight;
    // },10);
  };
  // app.init();
  setInterval(app.init, 1000);

  // $('.clearButton').on("click", function(){
  //   app.clearMessages();
  // });
});








