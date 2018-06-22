$('#answers').click(function () {

    let question1 = "Horses Horses Horses"
    let question2 = "Dogs Dogs Dogs"
    let question3 = "Cats Cats Cats"
    let question4 = "More Animals Please"

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
            $('#myDiv').append("hello");
           
        } else {
            console.log('Post Attempt Failed');
        }
    });
});