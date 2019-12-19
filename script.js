// Sets current date and current time
let m = moment();

var currentDayDisplay = m.format("dddd, MMMM, Do YYYY");

$("#currentDay").text(currentDayDisplay);

let currentHour = m.hours();

// Empty array to store values entered in textarea input by user
var agendaItems = [];

// Set hours of each timeblock to a moment object and displays in designated format
var nine = m.hour(9).format("hA");
$("#slot-9").text(nine);
var ten = m.hour(10).format("hA");
$("#slot-10").text(ten);
var eleven = m.hour(11).format("hA");
$("#slot-11").text(eleven);
var twelve = m.hour(12).format("hA");
$("#slot-12").text(twelve);
var one = m.hour(13).format("hA");
$("#slot-13").text(one);
var two = m.hour(14).format("hA");
$("#slot-14").text(two);
var three = m.hour(15).format("hA");
$("#slot-15").text(three);
var four = m.hour(16).format("hA");
$("#slot-16").text(four);
var five = m.hour(17).format("hA");
$("#slot-17").text(five);

// Toggle display feature 

initializeAgenda();

function initializeAgenda() {

    $("div .hour").each(function (){
        var hourChoices = parseInt($(this).attr("id").split("-")[1]);
            if (hourChoices < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("present", "future");
            } else if (hourChoices === currentHour) {
                $(this).addClass("present");
                $(this).removeClass("past", "future");
            } else {
                $(this).addClass("future");
                $(this).removeClass("past", "present");
            };
    })


    var storedAgendaItems = JSON.parse(localStorage.getItem("agendaItems"));

    if (storedAgendaItems !== "") {
        agendaItems = storedAgendaItems;
    };
};

function agendaSet(){
        event.preventDefault();
    
        var textEl = $("<p>");
        textEl.text(inputAgenda);
        $(".agenda-text").append(textEl);
    
        if(inputAgenda !== "") {
            for (var i = 0; i < agendaItems.length; i++) {
                var inputAgenda = $(".agenda").val();
        
                agendaItems.push(inputAgenda);
            
                localStorage.setItem("agendaItems", JSON.stringify(agendaItems));
                $(".agenda-text").text(agendaItems);
                $(".agenda-text").html(agendaItems[i]);
            }
        } else return;
 };


$("button").on("click", agendaSet());


