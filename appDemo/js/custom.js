$(document).ready(function(){
   
    $.ajax(
          {
          method: "GET",
          url:"//lit-cliffs-5322.herokuapp.com/api/myName"
          }).done(function(responce)
            {
          var theNamesHTML ="<ul id=\allNames\">";
          for(var i = 0; i < responce.allNames.length; i++)
              {
                  theNamesHtml += "<li>" + responce.allNames[i] +"</li>";
              }
          console.log(responce.allNames); 
          $('div#myNameResponce').html(theNamesHTML);
            }).fail(function(msg){
          console.log("Error");
        });
    
 
  $('button#yourNameButton').click(function(){
      console.log("Your Name Button Has Been Clicked");
      $.ajax({
          method: "GET",
          url:"//lit-cliffs-5322.herokuapp.com/api/yourName"
      }).done(function(responce){
          console.log(responce.name); 
          $('div#yourName').html(responce.name);
      }).fail(function(msg){
          console.log("Error");
          
      });
                  
  });
  $('button#myNameButton').click(function()
   {
      console.log("My Name Button Has Been Clicked");
      $('input#myName').val("");
      $.ajax(
          {
          method: "POST",
          data:{myName: theName},
          url:"//lit-cliffs-5322.herokuapp.com/api/myName"
          }).done(function(responce)
            {
          var theNamesHTML ="<ul id=\allNames\">";
          for(var i = 0; i < responce.allNames.length; i++)
              {
                  theNamesHtml += "<li>" + responce.allNames[i] +"</li>";
              }
          console.log(responce.allNames); 
          $('div#myNameResponce').html(theNamesHTML);
            }).fail(function(msg){
          console.log("Error");
           });
                  
    });
});