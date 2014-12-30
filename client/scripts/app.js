// YOUR CODE HERE:


  var app = {};
  var message = {
    'username': 'BryanJake',
    'text': 'hey devin!!!',
    'roomname': 'floor6'
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
  app.init = function(){
    //maybe call fetch, should initialize the data
    setInterval(app.fetch, 1000);
  };
  app.init();

  app.clearMessages = function(){
    // var elements = document.getElementsByClassName('#chats');
    $('#chats').empty();
  };

  app.addMessage = function(message){
    $('#chats').append('<p>' + message + '</p>');
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

  // Make buttons work here
  var displayMessages = function(data){
    for(var i = 0; i<data.results.length; i++){
      var messageUser = '<a href="#">' + data.results[i].username + '</a>';  //through an a tag around this
      var messageText = data.results[i].text;
      $('#chats').append('<p>' + messageUser + ': ' + messageText + '</p>');
  };
    };
  $('.clearButton').on("click", function(){
    app.clearMessages();
  });
  $('.addRoomButton').on('click', function(event){
    event.preventDefault();

    app.addRoom($('input.roomInput').val());
  });
  // $('.clearButton').on("click", function(){
  //   app.clearMessages();
  // });
});








