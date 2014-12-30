// YOUR CODE HERE:


  var app = {};
  var message = {
    'username': 'BryanJake',
    'text': 'we out here',
    'roomname': 'floor6'
  };
$(document).ready(function(){


  app.server = 'https://api.parse.com/1/classes/chatterbox';
  app.init = function(){
    //maybe call fetch, should initialize the data

    setInterval(app.fetch, 1000);
  };

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
      //append data to id chats
      console.log(data);
      $("#chats").append(data.results[1].text);

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
    $('#chats').append('<p>' + message + '</p>');
    this.send(message);
  };

  app.addRoom = function(room){
    //iterate through messages and check if room already exists
    $('#roomSelect').append('<p>' + room + '</p>');
  };

  app.addFriend = function(friend){

  };

  app.handleSubmit = function(){

  };

  // Make buttons work here
  // $('.addRoomButton').submit
});
// $.get('https://api.parse.com/1/classes/chatterbox',)
