$(document).ready(function(){
  $('button#yourNameButton').click(function(){
      console.log("Your Name Button Has Been Clicked");
      $.ajax({
          method: "GET",
          url:"//lit-cliffs-5322.herokuapp.com/api/yourName"
      }).done(function(responce){
          console.log(responce.name); 
          $('div#yourName').html("<p>"+responce.name"</p>");
      }).fail(function(msg){
          console.log("Error");
          
      });
                  
  });
});