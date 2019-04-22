$('#submit').on('click', function (e) {
    e.preventDefault();
    var input1 = $('#input1').val();
    var input2 = $('#input2').val();
    var req1 = $.get(`https://restcountries.eu/rest/v2/name/${input1}`);
    var req2 = $.get(`https://restcountries.eu/rest/v2/name/${input2}`);
    // console.log(req1.responseJSON[0].latlng)
    // console.log(req2)
    // deferred1.done(function(){
    //     var input1 = $('#input1').val();
    //     $.get(`https://restcountries.eu/rest/v2/name/${input1}`)
    // })

    // deferred2.done(function(){
    //     var input2 = $('#input2').val();
    //     $.get(`https://restcountries.eu/rest/v2/name/${input2}`)
    // })
    
    // console.log(deferred1)
    // console.log(deferred2)




    var combined = $.when(req1, req2).done(function (data1, data2) {
        console.log("This function will be run if the ajax is successful")
        // console.log(combined)
        // console.log(data1)
        // console.log(data2)
        console.log(data1[0][0].latlng)
        // console.log(data2[0][0].latlng)
        
        let latlng1 = data1[0][0].latlng;
        console.log(latlng1)
        let latlng3 = latlng1[0];
        let latlng4 = latlng[1];
        console.log(latlng3)
        console.log(latlng4)
        let latlng2 = data2[0][0].latlng;

        
        // console.log(sunrise)
        // console.log(sunriseHk)
        // let diff = ((sunrise - sunriseHk) / 3600000).toFixed(1);
        // console.log(diff)
}).fail(function (error1, error2) {
    console.log("This function will be run if the ajax if failed")
}).always(function (data) {
    console.log("This function runs no matter success or fail.")
});

});