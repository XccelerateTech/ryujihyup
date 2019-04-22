
$(function () {
    // let lat = 22.28
    // let lng = 114.18
    // $('#input2').val(lat)
    // $('#input1').val(lng)


    $('#submit').on('click', function (e) {
        e.preventDefault();


        // console.log(sunrise)
        // console.log(sunset)

        let lat = $('#input2').val()
        let lng = $('#input1').val()

        $.get(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&formatted=0
            `,
        ).done(function (data) {
            console.log("This function will be run if the ajax is successful")
            console.log(data)
            let sunrise = new Date(data.results.sunrise);
            let sunset = new Date(data.results.sunset);



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
});