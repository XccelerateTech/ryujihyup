
$(function () {
    // let lat = 22.28
    // let lng = 114.18
    // $('#input2').val(lat)
    // $('#input1').val(lng)


    $('#submit').on('click', function (e) {
        e.preventDefault();

    

        let lat = $('#input2').val()
        let lng = $('#input1').val()

        $.get(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&formatted=0
            `,
        ).done(function (data) {
            console.log("This function will be run if the ajax is successful")
            console.log(data)
            let sunrise = new Date(data.results.sunrise);
            let sunset = new Date(data.results.sunset);
            let d1 = new Date();
            console.log(d1)
            let diff = Math.abs(d1 - sunrise)
            console.log(diff)

            $('#form1').append(`
                <p id="sunrise">Sunrise is at: ${sunrise}</p>
                <p id="sunset">Sunset is at : ${sunset}</p>`
            )
        
    }).fail(function (data) {
        console.log("This function will be run if the ajax if failed")
    }).always(function (data) {
        console.log("This function runs no matter success or fail.")
    });
})

$('#compare').on('click', function (e) {
    e.preventDefault();
    
    let lat = $('#input2').val()
    let lng = $('#input1').val()

    var req1 = $.get(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&formatted=0`);
    var req2 = $.get(`https://api.sunrise-sunset.org/json?lat=22.28&lng=114.18&formatted=0`);
    
    var combined = $.when(req1, req2);
    
    
    combined.done(function (data1, data2) {
        console.log("This function will be run if the ajax is successful")
        console.log(data1)
        console.log(data2)
        let sunrise = data1[0].results.day_length;
        let sunriseHk = data2[0].results.day_length;
        console.log(sunrise)
        console.log(sunriseHk)
        if(sunriseHk > sunrise){
            $('#form1').append(`
                <p id="timedif">Your input has a shorter day time than Hong Kong</p>`
            )
        } else {
            $('#form1').append(`
                <p id="timedif">Your input has a longer day time than Hong Kong</p>`
            )
        }
}).fail(function (error1, error2) {
    console.log("This function will be run if the ajax if failed")
}).always(function (data) {
    console.log("This function runs no matter success or fail.")
});
})
});