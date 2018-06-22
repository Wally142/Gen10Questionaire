hideQuestions()

function hideQuestions() {
    $('#question2').hide()
    $('#question3').hide()
    $('#question4').hide()
}

$('#question1Button').click(function(){
    $('#question1').hide()
    $('#question2').show()
    console.log('question 1 answered')
})

$('#question2NextButton').click(function () {
    $('#question2').hide()
    $('#question3').show()
    console.log('question 2 answered')
})

$('#question3NextButton').click(function () {
    $('#question3').hide()
    $('#question4').show()
    console.log(' question 3 answered ')
})

$('#question4PreviousButton').click(function () {
    $('#question3').show()
    $('#question4').hide()
    console.log('Back to question 3')
})

$('#question3PreviousButton').click(function () {
    $('#question3').hide()
    $('#question2').show()
    console.log('Back to question 2')
})

$('#question2PreviousButton').click(function () {
    $('#question2').hide()
    $('#question1').show()
    console.log('back to question 1')
})

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