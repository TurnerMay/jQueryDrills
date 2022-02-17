$(document).ready(() => {
    $("#btnSubmit").click(function (event) {
        event.preventDefault();
        let text = $("input").val();
        let $newList = $("<ul></ul>")
        $("body").append($newList)
        let $newItem = $("<li>" + text + "</li>")
        $newList.append($newItem)
        $newItem.on("click", function(){
            $(this).css({
                color: "#" + Math.floor(Math.random()*16777215).toString(16)
            })
        $newItem.on("dblclick", function(){
                $($newList).remove()})

        
        
})
    //     let newH2 = $("<h2>" + text + "</h2>");
    //     $newDiv.append(newH2);
    //     newH2.on("mouseover", function () {
    //       $(this).css({
    //         color: "yellow",
    //         "font-weight": "bolder",
    //       });
    //     })
    //     .on( "mouseleave", function() {
    //         var styles = {
    //             color: "initial",
    //         "font-weight": "initial",
    //         };
    //         $( this ).css( styles );
    //       });
    // });
    
    $("#btnSubmit").attr("disabled", true);

  $("#inputText").keyup(function () {
    if ($("#inputText").val() == "") {
      $("#btnSubmit").attr("disabled", true);
    } else {
      $("#btnSubmit").attr("disabled", false);
    }
  });



//   let $newDiv = $("<div></div>");
//   $("body").append($newDiv);
});
})