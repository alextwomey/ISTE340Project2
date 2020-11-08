function getData(pathName){
    return $.ajax({
            type: 'get',
            url:'http://solace.ist.rit.edu/~plgics/proxy.php',
            dataType:'json',
            data: pathName,
            cache:false,
            async:true
            })
}

// The value you assign to the 'path' parameter, in this example '/people/faculty', is the 'ist.rit.edu/api'
// endpoint you wish to retrieve data from.
// Starting on line 16, you will write code to parse the returned data and display it in a jQueryUI widget of
// your choosing.
// //FACULTY SECTION***********************************************************
getData({path:'/people/faculty'}).done(function(output){
      //console.log(output);
    $.each(output.faculty,function(index,value){
      //console.log(value);
      var butt = $("<button></button").attr("id","butt"+index);
      $("#faculty").append(butt);
      $("#butt"+index).text(value.name);
      $("#butt"+index).click(function(temp){
         //console.log(value);
         var dia = $("<div></div>").attr("id","dia");
         $("#faculty").append(dia);
         var text1 = "<strong>"+value.title+"</strong>";
         var text2 = "<br>";
         var text3 = value.email;
         //$("#dia").text(value.email+"<br>"+value.title);
         $("#dia").append(text1);
         $("#dia").append(text2);
         $("#dia").append(text3);
         var pic = $("<img></img>").attr("src",value.imagePath);
         $("#dia").append(pic);
         $("#dia").dialog({
            title: ""+value.name+"",
            dialogClass: "dialogClass",
            closeOnEscape: false
         });
      });
   });
});//end of getData
//END OF FACULTY SECTION****************************************************

//FOOTER SECTION ***********************************************************
getData({path:'/footer'}).done(function(output){
   //console.log(output);
   $("#footer").append(output.copyright.html);
});//end of getdata
//END OF FOOTER**************************************************************

//HEADER SECTION************************************************************
getData({path:'/about'}).done(function(output){
   //console.log(output);
   $("#header").append($("<h1></h1>").attr("id","title"));
   $("#header").append($("<p></p>").attr("id","desc"));
   $("#title").append(output.title);
   $("#desc").append(output.description);
});
//END OF HEADER*************************************************************

//UNDERGRAD SECTION*********************************************************0
getData({path:'/degrees/undergraduate'}).done(function(output){
   //console.log(output);
   $.each(output.undergraduate,function(index,value){
      var head = value.title;
      var desc = value.description;
      $("#under").append($("<h3></h3>").attr("id","chead"+index));
      $("#chead"+index).append(head);
      $("#under").append($("<div></div>").attr("id","cdesc"+index).append($("<p></p>").attr("id","cpdesc").append(desc)));
      $("#cpdesc").append($("<ol></ol>").attr("id","ol"+index));
  });
   $(function(){
      $("#under").accordion();
   });
});
//END OF UNDERGRAD**********************************************************

//GRADUTE section**********************************************************
getData({path:'/degrees/graduate'}).done(function(output){
   //console.log(output);
   $.each(output.graduate,function(index,value){
      var head = value.title;
      var desc = value.description;
      $("#grad").append($("<h3></h3>").attr("id","cheadg"+index));
      $("#cheadg"+index).append(head);
      $("#grad").append($("<div></div>").attr("id","cdescg"+index).append($("<p></p>").attr("id","cpdescg").append(desc)));
      $("#cpdescg").append($("<ol></ol>").attr("id","ol"+index));
  });
  $("#cheadg"+3).hide();
  $("#cdescg"+3).hide();
   $(function(){
      $("#grad").accordion();
   });
});
//END OF GRADUATE**********************************************************

//Minor SECTION************************************************************
getData({path:'/minors'}).done(function(output){
   //console.log(output);
   $.each(output.UgMinors,function(index,value){
      var head = value.title;
      var desc = value.description;
      $("#minor").append($("<h3></h3>").attr("id","cheadm"+index));
      $("#cheadm"+index).append(head);
      $("#minor").append($("<div></div>").attr("id","cdescg"+index).append($("<p></p>").attr("id","cpdescm").append(desc)));
      $("#cpdescm").append($("<ol></ol>").attr("id","ol"+index));
  });
  $("#cheadm"+3).hide();
  $("#cdescm"+3).hide();
   $(function(){
      $("#minor").accordion();
   });
});

//end minor section********************************************************
//
////scrollnav SECTION
$( window ).on('load', function() {
   console.log("loaded");
   $("#content").scrollNav({
      headlineText:"",
      animated:true,
      fixedMargin: 500
   });
   $(".scroll-nav").sticky({topSpacing:90});
});
