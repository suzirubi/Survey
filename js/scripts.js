$(document).ready(function(){

  $("#survey form").submit(function(event) {
    var nameInput = $("input#name").val();
    var bornInput = $("input#born").val();
    var colorInput = $("input#color").val();
    var foodInput = $("select#food").val();
    var musicInput = $("input:radio[name=music]:checked").val();

    $(".name").text(nameInput);
    $(".born").text(bornInput);
    $(".color").text(colorInput);
    $(".food").text(foodInput);
    $(".music").text(musicInput);


    event.preventDefault();
  });
});
