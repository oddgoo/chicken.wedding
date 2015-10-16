
$( document ).ready(function() {

    $('input, textarea').placeholder();

    var parseAPPID = "tSb3VndkOZyiSPdiQ2H8ZGW9VcG1MkcrDUq5aIfi";
  	var parseJSID = "inJFPPATJeCU5WaePQMJty4vZ7b5bCPDLT9Vrx3u";
  	Parse.initialize(parseAPPID, parseJSID);

    // ========= Form submit
  	$("#entry-form").on("submit", function(e) {

  		e.preventDefault();
      $(".error").hide();
  		//add error handling here
  		//gather the form data

  		var data = {};
  		data.invitee_name = $("#form-name").val();
  		data.contact = $("#form-contact").val();
      data.comments = $("#form-comments").val();
      // ========= Validation ==============
      showMessage("Sending...");

      // ========= Sending to server =======

      var EntryObject = Parse.Object.extend("Entry");
      var entry = new EntryObject();

      entry.save(data, {
        success:function() {
          $("#thank-you").show();
  				$("#entry-form").hide();
          $(document).scrollTop( $("#thank-you").offset().top );
        },
        error:function(request, error) {
          console.log(error);
          showMessage(error.message);
        }
      });
    });

    $('#chicken-photos').slick({
      dots:true,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 4000
    });
});

function showMessage(error){
  $(document).scrollTop( $('.error').offset().top );
  $('.error').show();
  $('.error').html(error);
}
