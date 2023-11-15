/*// Hotel Registrations - Store In Object
var test = {
    hotelName: "Marriot", 
    room: 456,
    booked: 123,
    display: function(){
        return this.hotelName;
    }
};

// Access the Property
console.log(test.hotelName);
console.log(test.booked);
test.booked = 144;*/

// Start Program
var groupList = [];
function reservation() {
    // Get Values from Form and Place in Object
    var guest = {
        guestName: $('#name').val(),
        numberOfGuest: $('#number').val(),
        checkIn: $('#checkin').val(),
        checkOut: $('#checkout').val(),
        roomType: $('#room').val()
    };

    groupList.push(guest);
    console.log(guest);
}

function displayList() {
    $('#reservationList').html("");
    $("#reservationList").append("<table>");
    for (var i in reservationList) {
        $('#reservationList').append("<tr><td>" + reservationList[i].guestName + "</td>");
        $('#reservationList').append("<td>" + reservationList[i].numberOfGuest + "</td>");
        $('#reservationList').append("<td>" + reservationList[i].checkIn + "</td>");
        $('#reservationList').append("<td>" + reservationList[i].checkOut + "</td>");
        $('#reservationList').append("<td>" + reservationList[i].roomType + "</td></tr>");
    }
    $("#reservationList").append("</table");
}

// Register Event Handler 
$('#submit').click(reservation);
$('#lists').click(displayList);