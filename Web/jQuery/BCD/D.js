$('#row-name input').on('keydown', function(n){
    const name = n.target.value;
    if (name.length > 50){
        $('#row-name input').css("border", "solid 2px red")
    } else {
        $('#row-name input').css("border", "solid 1px black")
    };
});

$('#row-phone input').on('blur', function(p){
    const phone = p.target.value;
    if (phone.length < 6 || phone.length > 16 || isNaN(phone)){
        $('#row-phone input').css("border", "solid 2px red")
    } else {
        $('#row-phone input').css("border", "solid 1px black")
    };
});



$('#contact-list').on('click', '.row', function(e){
    var data = $(this).children();
    var updateForm = $('#update-form input').slice(0,data.length);
    // console.log($(this).children()[0], $(this).children()[1], $(this).children()[2] )

    // console.log($(this).children()[0])
    for(var i =0; i < data.length; i++) {
        $(updateForm[i]).val($(data[i]).html()); //use the for loop to iterate over each element in the new array, assign the values from the rowElements into updateFormElements using .val() 
        //Set the value of each element in the set of matched elements from rowElements.
    };
});

let rowIdCounter = $('#contact-list tbody').find('tr').length; 

$('.contact-form').submit(function(e){

    e.preventDefault();
    var formId = e.target.id;
    var name = e.target.name.value;
    var phone = e.target.phone.value;
    var email = e.target.email.value;
    const row = $(`
        <tr class="row">
            <td>${name}</td>
            <td>${phone}</td>
            <td>${email}</td>
        </tr>
    `)
    $('tbody').last().append(row);
    alert(`Name is ${name},Phone is ${phone},Email is ${email}`);
});

// $('.contact-form').submit(function(e) {
//     e.preventDefault();
//     var formId = e.target.id;
//     var name = e.target.name.value;
//     var phone = e.target.phone.value;
//     var email = e.target.email.value;
//     const row = $(`
//         <tr class="row>
//             <td>${name}</td>
//             <td>${phone}</td>
//             <td>${email}</td>
//         </tr>`

// );
// if(formId === 'create-form') { //if the form that is submitted is called 'create-form do this:
//         $(row).attr("id",`row-${rowIdCounter++}`); //increase the number in row-id
//         $('tbody').append(row); //append the object that was created (in row) to the 'tbody'
//         $(this).find('.clear').click(); //clear the information from the inputs (reset input fields)
//     } else {
//         $(row).attr("id",$(this).prop('row-id'));
//         // if you want to update a contact, find the relevant row and replace that row with updated information. 
//         $('#'+$(this).prop('row-id')).replaceWith(row);
//         // logic above pushes the information created in row over the attribute that was previously selected
// })
//     }
//     alert(`Name is ${name},Phone is ${phone},Email is ${email}`);