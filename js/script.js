$(document).ready(function(){
    // The tags on the home page(switch between different pages)
    var tabs        = $(".nav ul li a"),
        tabContents = $(".main");
    
    tabs.each(function(i){
        $(this).click(function(){
            var clickedTab = this;
            tabs.each(function(i){
                var tab = $(this);
                if (this === clickedTab) {
                    tab.addClass("actived");
                    $(tabContents[i]).css({"display":"block"});
                }else{
                    tab.removeClass("actived")
                    $(tabContents[i]).css({"display":"none"});
                }
            })
        })
    })
// Typeahead function (used to quick fill the word in the search bar ) 

    var substringMatcher = function(strs) {
        return function findMatches(q, cb) {
          var matches, substringRegex;
      
          matches = [];
      
          substrRegex = new RegExp(q, 'i');
      
          $.each(strs, function(i, str) {
            if (substrRegex.test(str)) {
              matches.push(str);
            }
          });
      
          cb(matches);
        };
      };
      
      var states = ['King Henry IV', 'King Henry V', 'King Henry VI', 'King Henry VII', 'John of Gaunt',
        'Edward IV', 'Richard III', 'Edward V', 'Other',
        'Richard II', 'Marguerite', 'Edward III'
      ];
      
      $('#the-basics .typeahead').typeahead({
        hint: true,
        highlight: true,
        minLength: 1
      },
      {
        name: 'states',
        source: substringMatcher(states)
      });

// ##### Search bar ##### match the search bar key words to specific pages

var searchVal = $("#searchBar").val();
$(".searchButton").click(function(){
    if ($("#searchBar").val()==="King Henry IV"){
        event.preventDefault();
        $("#chara").trigger('click');
        $("body").toggleClass("popup");
        $(".charaInfo .popup-information:nth-child(1)").toggleClass("activated");
    } else if ($("#searchBar").val()==="King Henry V"){
        event.preventDefault();
        $("#chara").trigger('click');
        $("body").toggleClass("popup");
        $(".charaInfo .popup-information:nth-child(2)").toggleClass("activated");
    } else if ($("#searchBar").val()==="King Henry VI"){
        event.preventDefault();
        $("#chara").trigger('click');
        $("body").toggleClass("popup");
        $(".charaInfo .popup-information:nth-child(3)").toggleClass("activated"); 
    } else if ($("#searchBar").val()==="King Henry VII"){
        event.preventDefault();
        $("#chara").trigger('click');
        $("body").toggleClass("popup");
        $(".charaInfo .popup-information:nth-child(4)").toggleClass("activated"); 
    } else if ($("#searchBar").val()==="John of Gaunt") {
        event.preventDefault();
        $("#chara").trigger('click');
        $("body").toggleClass("popup");
        $(".charaInfo .popup-information:nth-child(5)").toggleClass("activated"); 
    } else if ($("#searchBar").val()==="Edward IV") {
        event.preventDefault();
        $("#chara").trigger('click');
        $("body").toggleClass("popup");
        $(".charaInfo .popup-information:nth-child(6)").toggleClass("activated"); 
    } else if ($("#searchBar").val()==="Richard III") {
        event.preventDefault();
        $("#chara").trigger('click');
        $("body").toggleClass("popup");
        $(".charaInfo .popup-information:nth-child(7)").toggleClass("activated"); 
    } else if ($("#searchBar").val()==="Edward V") {
        event.preventDefault();
        $("#chara").trigger('click');
        $("body").toggleClass("popup");
        $(".charaInfo .popup-information:nth-child(8)").toggleClass("activated"); 
    } else if ($("#searchBar").val()==="Richard II") {
        event.preventDefault();
        $("#chara").trigger('click');
        $("body").toggleClass("popup");
        $(".charaInfo .popup-information:nth-child(9)").toggleClass("activated"); 
    } else if ($("#searchBar").val()==="Marguerite") {
        event.preventDefault();
        $("#chara").trigger('click');
        $("body").toggleClass("popup");
        $(".charaInfo .popup-information:nth-child(10)").toggleClass("activated"); 
    } else if ($("#searchBar").val()==="Edward III") {
        event.preventDefault();
        $("#chara").trigger('click');
        $("body").toggleClass("popup");
        $(".charaInfo .popup-information:nth-child(11)").toggleClass("activated"); 
    }
});


// ##### POPUP PAGES ##### to make sure each time we click the character or history button some educational content will pop up.
    $(".characterIntro .henryfour").click(function(){
		event.preventDefault();
        $("body").toggleClass("popup");
        $(".charaInfo .popup-information:nth-child(1)").toggleClass("activated");
    });

    $(".charaInfo .popup-information:nth-child(1) .close").click(function(){
		event.preventDefault();
        $("body").toggleClass("popup");
        $(".charaInfo .popup-information:nth-child(1)").toggleClass("activated");
    });
    

    $(".characterIntro .henryfive").click(function(){
		event.preventDefault();
        $("body").toggleClass("popup");
        $(".charaInfo .popup-information:nth-child(2)").toggleClass("activated");
    });

    $(".charaInfo .popup-information:nth-child(2) .close").click(function(){
		event.preventDefault();
        $("body").toggleClass("popup");
        $(".charaInfo .popup-information:nth-child(2)").toggleClass("activated");
    });
    
    $(".characterIntro .henrysix").click(function(){
		event.preventDefault();
        $("body").toggleClass("popup");
        $(".charaInfo .popup-information:nth-child(3)").toggleClass("activated");
    });

    $(".charaInfo .popup-information:nth-child(3) .close").click(function(){
		event.preventDefault();
        $("body").toggleClass("popup");
        $(".charaInfo .popup-information:nth-child(3)").toggleClass("activated");
    });
    
    $(".characterIntro .henryseven").click(function(){
		event.preventDefault();
        $("body").toggleClass("popup");
        $(".charaInfo .popup-information:nth-child(4)").toggleClass("activated");
    });

    $(".charaInfo .popup-information:nth-child(4) .close").click(function(){
		event.preventDefault();
        $("body").toggleClass("popup");
        $(".charaInfo .popup-information:nth-child(4)").toggleClass("activated");
    });

    $(".characterIntro .johnOfGaunt").click(function(){
		event.preventDefault();
        $("body").toggleClass("popup");
        $(".charaInfo .popup-information:nth-child(5)").toggleClass("activated");
    });

    $(".charaInfo .popup-information:nth-child(5) .close").click(function(){
		event.preventDefault();
        $("body").toggleClass("popup");
        $(".charaInfo .popup-information:nth-child(5)").toggleClass("activated");
    });

    $(".characterIntro .edward").click(function(){
		event.preventDefault();
        $("body").toggleClass("popup");
        $(".charaInfo .popup-information:nth-child(6)").toggleClass("activated");
    });

    $(".charaInfo .popup-information:nth-child(6) .close").click(function(){
		event.preventDefault();
        $("body").toggleClass("popup");
        $(".charaInfo .popup-information:nth-child(6)").toggleClass("activated");
    });

    $(".characterIntro .richard").click(function(){
		event.preventDefault();
        $("body").toggleClass("popup");
        $(".charaInfo .popup-information:nth-child(7)").toggleClass("activated");
    });

    $(".charaInfo .popup-information:nth-child(7) .close").click(function(){
		event.preventDefault();
        $("body").toggleClass("popup");
        $(".charaInfo .popup-information:nth-child(7)").toggleClass("activated");
    });

    $(".characterIntro .edwardV").click(function(){
		event.preventDefault();
        $("body").toggleClass("popup");
        $(".charaInfo .popup-information:nth-child(8)").toggleClass("activated");
    });

    $(".charaInfo .popup-information:nth-child(8) .close").click(function(){
		event.preventDefault();
        $("body").toggleClass("popup");
        $(".charaInfo .popup-information:nth-child(8)").toggleClass("activated");
    });

    $(".characterIntro .richardII").click(function(){
		event.preventDefault();
        $("body").toggleClass("popup");
        $(".charaInfo .popup-information:nth-child(9)").toggleClass("activated");
    });

    $(".charaInfo .popup-information:nth-child(9) .close").click(function(){
		event.preventDefault();
        $("body").toggleClass("popup");
        $(".charaInfo .popup-information:nth-child(9)").toggleClass("activated");
    });

    $(".characterIntro .marguerite").click(function(){
		event.preventDefault();
        $("body").toggleClass("popup");
        $(".charaInfo .popup-information:nth-child(10)").toggleClass("activated");
    });

    $(".charaInfo .popup-information:nth-child(10) .close").click(function(){
		event.preventDefault();
        $("body").toggleClass("popup");
        $(".charaInfo .popup-information:nth-child(10)").toggleClass("activated");
    });

    $(".characterIntro .edwardIII").click(function(){
		event.preventDefault();
        $("body").toggleClass("popup");
        $(".charaInfo .popup-information:nth-child(11)").toggleClass("activated");
    });

    $(".charaInfo .popup-information:nth-child(11) .close").click(function(){
		event.preventDefault();
        $("body").toggleClass("popup");
        $(".charaInfo .popup-information:nth-child(11)").toggleClass("activated");
    });

    $(".hisPage .civilWar").click(function(){
		event.preventDefault();
        $("body").toggleClass("popup");
        $(".hisInfo .popup-information:nth-child(1)").toggleClass("activated");
    });

    $(".hisInfo .popup-information:nth-child(1) .close").click(function(){
		event.preventDefault();
        $("body").toggleClass("popup");
        $(".hisInfo .popup-information:nth-child(1)").toggleClass("activated");
    });

    $(".hisPage .ascendancyOfWarwick").click(function(){
		event.preventDefault();
        $("body").toggleClass("popup");
        $(".hisInfo .popup-information:nth-child(2)").toggleClass("activated");
    });

    $(".hisInfo .popup-information:nth-child(2) .close").click(function(){
		event.preventDefault();
        $("body").toggleClass("popup");
        $(".hisInfo .popup-information:nth-child(2)").toggleClass("activated");
    });

    $(".hisPage .triumph").click(function(){
		event.preventDefault();
        $("body").toggleClass("popup");
        $(".hisInfo .popup-information:nth-child(3)").toggleClass("activated");
    });

    $(".hisInfo .popup-information:nth-child(3) .close").click(function(){
		event.preventDefault();
        $("body").toggleClass("popup");
        $(".hisInfo .popup-information:nth-child(3)").toggleClass("activated");
    });

    $(".otherPage .articleBlock:nth-child(1)").click(function(){
		event.preventDefault();
        $("body").toggleClass("popup");
        $(".articleInfo .popup-information:nth-child(1)").toggleClass("activated");
    });

    $(".articleInfo .popup-information:nth-child(1) .close").click(function(){
		event.preventDefault();
        $("body").toggleClass("popup");
        $(".articleInfo .popup-information:nth-child(1)").toggleClass("activated");
    });

    $(".otherPage .articleBlock:nth-child(2)").click(function(){
		event.preventDefault();
        $("body").toggleClass("popup");
        $(".articleInfo .popup-information:nth-child(2)").toggleClass("activated");
    });

    $(".articleInfo .popup-information:nth-child(2) .close").click(function(){
		event.preventDefault();
        $("body").toggleClass("popup");
        $(".articleInfo .popup-information:nth-child(2)").toggleClass("activated");
    });

  
    
//    Tabs on the "other page"  
    
    var oTabs        = $(".otherTabs p"),
        oTabContents = $(".oPage");
    
    oTabs.each(function(i){
        $(this).click(function(){
            var clickedTab = this;
            oTabs.each(function(i){
                var oTab = $(this);
                if (this === clickedTab) {
                    oTab.addClass("selected");
                    $(oTabContents[i]).css({"display":"block"});
                }else{
                    oTab.removeClass("selected")
                    $(oTabContents[i]).css({"display":"none"});
                }
            })
        })
    })

// quiz page
    $(".quiz .quizBlock:nth-child(1) .options p:nth-child(1)").click(function(){
        alert("Sorry, your answer is wrong");
        $(".quiz .quizBlock:nth-child(1) .options p:nth-child(1)").css("color","red")
    })

    $(".quiz .quizBlock:nth-child(1) .options p:nth-child(2)").click(function(){
        alert("Congratulation! Your answer is correct");
        $(".quiz .quizBlock:nth-child(1) .options p:nth-child(2)").css("color","green")
    })

    $(".quiz .quizBlock:nth-child(2) .options p:nth-child(1)").click(function(){
        alert("Sorry, your answer is wrong");
        $(".quiz .quizBlock:nth-child(2) .options p:nth-child(1)").css("color","red")
    })

    $(".quiz .quizBlock:nth-child(2) .options p:nth-child(2)").click(function(){
        alert("Congratulation! Your answer is correct");
        $(".quiz .quizBlock:nth-child(2) .options p:nth-child(2)").css("color","green")
    })

    $(".quiz .quizBlock:nth-child(3) .options p:nth-child(1)").click(function(){
        alert("Sorry, your answer is wrong");
        $(".quiz .quizBlock:nth-child(3) .options p:nth-child(1)").css("color","red")
    })

    $(".quiz .quizBlock:nth-child(3) .options p:nth-child(2)").click(function(){
        alert("Congratulation! Your answer is correct");
        $(".quiz .quizBlock:nth-child(3) .options p:nth-child(2)").css("color","green")
    })



})

