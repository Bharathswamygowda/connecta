
// organization details

$('#organization_details .edit').on('click', function(){
$("#organization_details table input").removeAttr("disabled")
$("#organization_details table select").removeAttr("disabled")
$("#organization_details .save").show()
})

$('#organization_details .save').on('click', function(){
$("#organization_details table input").attr("disabled", "disabled");
$("#organization_details table select").attr("disabled", "disabled")

$(this).hide()

 Snackbar.show({
text: 'Organization details saved sucessfully',
pos: 'top-right'
});

})


// contact details

$('#contact_details .edit').on('click', function(){
$("#contact_details table input").removeAttr("disabled")
$("#contact_details table select").removeAttr("disabled")
$("#contact_details .save").show()
})

$('#contact_details .save').on('click', function(){
$("#contact_details table input").attr("disabled", "disabled");
$("#contact_details table select").attr("disabled", "disabled")

$(this).hide()

 Snackbar.show({
text: 'Contact details saved sucessfully',
pos: 'top-right'
});

})


// sales communication detaiils
$('#sales_communication .save').on('click', function(){

 Snackbar.show({
text: 'Sales Communication Details saved sucessfully',
pos: 'top-right'
});

})