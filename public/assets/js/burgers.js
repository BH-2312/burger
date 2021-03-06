$(function() {
    $(".devoured").on("click", function(event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("newdevour");
    
        var newDevouredState = {
          devoured: newDevour
        };
    
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          // data: newDevouredState
          data: {
      			devoured: true
      		}
        }).then(
          function() {
            console.log("changed burger to", newDevour);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
    $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burg").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});