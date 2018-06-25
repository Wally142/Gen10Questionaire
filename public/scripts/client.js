
function hideQuestions() {
    $('#question1').hide();
    $('#question2').hide();
    $('#question3').hide();
    $('#question4').hide();
}

function questionView(number) {
  var progressAmount = ((number*25)-25);
  hideQuestions();
  $('#question' + number).show();
  $('#myBar').css('width', progressAmount + '%');
}

$('#question1NextButton').click(function(){
    questionView(2);
})

$('#question2NextButton').click(function () {
    questionView(3);
})

$('#question3NextButton').click(function () {
    questionView(4);
})

$('#question4PreviousButton').click(function () {
    questionView(3);
})

$('#question3PreviousButton').click(function () {
    questionView(2);
})

$('#question2PreviousButton').click(function () {
    questionView(1);
})

$('#navigationOne').click(function () {
    questionView(1);
})
$('#navigationTwo').click(function () {
    questionView(2);
})
$('#navigationThree').click(function () {
    questionView(3);
})
$('#navigationFour').click(function () {
    questionView(4);
})


// $('.prog').css('color: white');
// $('.prog').css('color: white');
// $('.prog').css('color: white');

$('#answers').click(function () {

    let question1 = $('#questionOne').val()
    let question2 = $('#questionTwo').val()
    let question3 = $('#questionThree').val()
    let question4 = $('#questionFour').val()

    $.ajax({
        type: 'POST',
        url: 'http://localhost:5000/questions',
        data: JSON.stringify({
            question1: question1,
            question2: question2,
            question3: question3,
            question4: question4
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        dataType: 'json',
    }).always(function (xhr) {
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log('Post in Questionaire Table Successful!');
            window.location.href = 'video.html';

        } else {
            console.log('Post Attempt Failed');
        }
    });
});
