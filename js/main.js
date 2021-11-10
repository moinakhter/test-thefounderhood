      //cloning the form field
		var cloneFields = $("form .clone").html();

		//add the field
		$("body").delegate(".add",'click',function(argument) {
			$("#form .append").append('<div class="row">'+cloneFields+'<div>');
		});

		//remove the field
		$("body").delegate(".remove",'click',function(argument) {
			if($('.remove').length > 1){
				$(this).parent().parent().remove();
			}else{
				alert("You can not remove all form fields");
			}
			
		});

		$(document).on('submit','#form',function(e){
 			e.preventDefault();

 			var name = $('input[name="full_name[]"]').val();
 			var htmlTable = "";

 			//collecting data from the form for displying in the table.
 			const subject = $.map($('select[name="subject[]"]'), function(el) { return el.value; });
 			$('input[name="full_name[]"]').each(function($k,$v) {
 				htmlTable += "<tr>" ;
 				htmlTable += "<td>"+($k+1)+"</td>" ;
 				htmlTable += "<td>"+$(this).val()+"</td>" ;
 				htmlTable += "<td>"+subject[$k]+"</td>" ;
 				htmlTable += "</tr>" ;
 			});
			
 			
 			$(".displayData").html(htmlTable);

 			//success msg
 			$("#form").append("<div class='alert alert-primary'>Details Saved, We are going to display the details, Please wait...</div>");
 			
 			//after a few second form will hide and display the data on the web.
 			setTimeout(function() {
 				$('#form').hide(100);
 				$('.table').show(1000);
 			},2500);

        });