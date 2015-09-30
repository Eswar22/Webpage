$('.alert').hide();

$('.submit').click(function () {
  // set variable that counts how many input fields are left blank
  var emptyInputs = $(this).closest('.panel').find('input').filter(function(){
                        return !$(this).val();
                    }).length;
  
  // if none of the input fields are left blank
  if (emptyInputs == 0) {
    // accept data and hide panel
    $(this).closest('.panel').hide();
  } 
  else {
    // within this panel, find all inputs
    $(this).closest('.panel').find("input").each(function () {
      var element = $(this);
      // if any input is empty  
      if (element.val() == "") {
        // add the has-error class to the .form-group parent div
        $(element).closest('.form-group').addClass('has-error');
        // and show alert box
        $(element).closest('.panel').find('.alert').show();
      }
    });
  }
});

// click reset to clear all fields, remove error class, hide alert
$('.reset').click(function () {
  $(this).closest('.panel').find("input").each(function () {
    $(this).val('');
    $(this).closest('.form-group').removeClass('has-error');
    $(this).closest('.panel').find('.alert').hide();
  });
})