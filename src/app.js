/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vector2 = require('vector2');
var ajax = require('ajax');

//Menu Screen
var menu = new UI.Card({
  title:'Fluffy',
  subtitle:'Your Caring Cabbit',
  banner:'images/static-pet.png',
});
menu.show();

//To exit an activity
var Exit = new UI.Window();
var finish = new UI.Text({
      position: new Vector2(0, 0),
      size: new Vector2(144, 168),
      text:'Press any button to return to main.',
      font:'GOTHIC_18_BOLD',
      color:'black',
      textOverflow:'wrap',
      textAlign:'center',
      backgroundColor:'white'
});
var static_image = new UI.Image({
      position: new Vector2(40,70),
      size: new Vector2(64,75),
      image: 'images/static-pet.png',
      backgroundColor:'white'
});

Exit.add(finish);
Exit.add(static_image);


//DEEP BREATHING EXERCISE

menu.on('click', 'down', function(){

  //instructions for breating exercise
  var breathingIntro = new UI.Window();
  
  //text for breathingIntro
  var text = new UI.Text({
      position: new Vector2(0, 0),
      size: new Vector2(144, 168),
      text:'Press any button to start breathing exercise. Remember to inhale from the nose and exhale from the mouth.',
      font:'GOTHIC_14_BOLD',
      color:'black',
      textOverflow:'wrap',
      textAlign:'center',
      backgroundColor:'white'
  });
  
   var static_image = new UI.Image({
      position: new Vector2(40,95),
      size: new Vector2(64,75),
      image: 'images/static-pet.png',
      backgroundColor:'white'
  });
  
  var finished = new UI.Window();
     var textFinish = new UI.Text({
      position: new Vector2(0, 0),
      size: new Vector2(144, 168),
      text:'Breathing exercise complete. Press any button to go back to main.',
      font:'GOTHIC_18_BOLD',
      color:'black',
      textOverflow:'wrap',
      textAlign:'center',
      backgroundColor:'white'
  });
    
    finished.add(textFinish);
    finished.add(static_image);
  
  breathingIntro.add(text);
  breathingIntro.add(static_image);
  breathingIntro.show();
  
  //Begin breathing exercise
  
  breathingIntro.on('click',function(){
    
    
    var breathingInhale = new UI.Window();
    var breathingExhale = new UI.Window();
    
    var inhale = new UI.Text({
      position: new Vector2(0, 0),
      size: new Vector2(144, 168),
      text:'INHALE',
      font:'GOTHIC_18_BOLD',
      color:'black',
      textOverflow:'wrap',
      textAlign:'center',
      backgroundColor:'white'
  });

  var inhale_image = new UI.Image({
      position: new Vector2(40,70),
      size: new Vector2(64,75),
      image: 'images/fluffyinhale.png',
      backgroundColor:'white'
  });
    
    breathingInhale.add(inhale);
    breathingInhale.add(inhale_image);
    
    
    
  var exhale = new UI.Text({
      position: new Vector2(0, 0),
      size: new Vector2(144, 168),
      text:'EXHALE',
      font:'GOTHIC_18_BOLD',
      color:'black',
      textOverflow:'wrap',
      textAlign:'center',
      backgroundColor:'white'
  });

  var exhale_image = new UI.Image({
      position: new Vector2(40,70),
      size: new Vector2(64,75),
      image: 'images/fluffyexhale.png',
      backgroundColor:'white'
  });
    
    breathingExhale.add(exhale);
    breathingExhale.add(exhale_image);
    
    setTimeout(
      function(callback){
        breathingInhale.show();
        console.log('inhale showing!');
    }, 500);
    setTimeout(function(callback){
      breathingExhale.show();
      console.log('exhale showing!');
    },10000);
    setTimeout(
      function(callback){
        breathingInhale.show();
        console.log('inhale showing!');
    },17000);
    setTimeout(function(callback){
          breathingExhale.show();
          console.log('exhale showing!');
    },22000);
        setTimeout(
      function(callback){
        breathingInhale.show();
        console.log('inhale showing!');
    },29000);
    setTimeout(function(callback){
          breathingExhale.show();
          console.log('exhale showing!');
    },34000);
        setTimeout(
      function(callback){
        breathingInhale.show();
        console.log('inhale showing!');
    },41000);
    setTimeout(function(callback){
          breathingExhale.show();
          console.log('exhale showing!');
    },46000);
        setTimeout(
      function(callback){
        breathingInhale.show();
        console.log('inhale showing!');
    },53000);
    setTimeout(function(callback){
          breathingExhale.show();
          console.log('exhale showing!');
    },58000);
        setTimeout(
      function(callback){
        breathingInhale.show();
        console.log('inhale showing!');
    },65000);
    setTimeout(function(callback){
          breathingExhale.show();
          console.log('exhale showing!');
    },72000);
        setTimeout(
      function(callback){
        breathingInhale.show();
        console.log('inhale showing!');
    },77000);
    setTimeout(function(callback){
          breathingExhale.show();
          console.log('exhale showing!');
    },84000);
        setTimeout(
      function(callback){
        breathingInhale.show();
        console.log('inhale showing!');
    },89000);
    setTimeout(function(callback){
          breathingExhale.show();
          console.log('exhale showing!');
    },96000);
        setTimeout(
      function(callback){
        breathingInhale.show();
        console.log('inhale showing!');
    },110000);
    setTimeout(function(callback){
          breathingExhale.show();
          console.log('exhale showing!');
    },117000);
        setTimeout(
      function(callback){
        finished.show();
    },122000);
    
    finished.on('click',function(){menu.show();});
    });
  
});

//MOTIVATION

menu.on('click', 'up', function(){

var Accel = require('ui/accel');
Accel.init();

var wind = new UI.Window({
  backgroundColor: 'white'
});

var quote = new UI.Text({
  position: new Vector2(0,0),
  size: new Vector2(144,168),
  font: 'gothic-18-bold',
  color:'black',
  text:'"Shake for a motivational quote! Press any button to go back to main."',
  textAlign:'left'
});

var author = new UI.Text({
  position: new Vector2(0,90),
  size: new Vector2(144,168),
  font: 'gothic-14-bold',
  color:'black',
  text:'-Fluffy the Cabbit',
  textAlign:'right'
});

var fluffy = new UI.Image({
  position: new Vector2(40,110),
  size: new Vector2(64,75),
  image:'images/fluffyb12.png'
});

wind.add(quote);
wind.add(author);
wind.add(fluffy);

wind.on('accelTap',function(e){
  ajax(
    {
      url: 'https://api.myjson.com/bins/19um1',
      type: 'json'
    },
    function(data){
      var i = Math.floor(Math.random() * 10);
      quote.text('"'+data.quotes[i].quote+'"');
      author.text("-"+data.quotes[i].author);
    },
    function(error){
      wind.title('Ajax request failed: '+error);
    }
  );
});

wind.show();
wind.on('click', function(){menu.show();});
   
});

//EXERCISE

menu.on('click', 'select', function(){
  
  var exerciseIntro = new UI.Window();
  var text = new UI.Text({
    position: new Vector2(0, 0),
    size: new Vector2(144, 168),
    text:'Press any button to start moving!',
    font:'GOTHIC_18_BOLD',
    color:'black',
    textOverflow:'wrap',
    textAlign:'center',
    backgroundColor:'white'
  });
  
  var image = new UI.Image({
      position: new Vector2(40,70),
      size: new Vector2(64,75),
      image: 'images/static-pet.png',
      backgroundColor:'white'
  });
  
  exerciseIntro.add(text);
  exerciseIntro.add(image);
  exerciseIntro.show();
  

  exerciseIntro.on('click', function(){
    
    
    var squats = new UI.Card({
      title:'Squats!',
      banner:'images/fluffyb02.png',
      subbanner: 'Shake for a new exercise.'
    });
    
    var jumpingJacks = new UI.Card({
      title:'Jumping Jacks!',
      banner:'images/fluffyb12.png',
      subbanner: 'Shake for a new exercise.'
    });
    
    var punches = new UI.Card({
      title:'Punches!',
      banner:'images/fluffyboxing.png',
      subbanner: 'Shake for a new exercise.'
    });
  
    var run = new UI.Card({
      title:'Run in Place!',
      banner:'images/fluffyrunning.png',
      subbanner: 'Shake for a new exercise.'
    });
    
    var exerciseOptions = [squats, jumpingJacks, punches, run];
    var rand = Math.floor(Math.random()*exerciseOptions.length);
 
    exerciseOptions[rand].show();
    exerciseOptions[rand].on('click',function(){menu.show();});
    
    });
                                   

});
