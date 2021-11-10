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



        // for add fields work ===============

        $(".addField").click(function() {
			var fieldType = $(".field_type option:selected").val();
			var inputField = '<div class="row"><div class="col-md-12">';
			inputField += '<input required="" placeholder="Full Name" class="form-control" type="text" name="full_name[]">';
			inputField += '<a href="javascript:void(0)" class="remove2">x</a>';
			inputField += '</div></div>';

			var selectField = '<div class="row"><div class="col-md-12">';
			selectField += '<select required="" name="subject[]" class="form-control">'+
					'<option disabled="" selected="" value="">Subject</option>'+
					'<option value="Computer">Computer</option>'+
					'<option value="English">English</option>'+
					'<option value="Physics">Physics</option>'+
				'</select>';
			selectField += '<a href="javascript:void(0)" class="remove2">x</a>'
			selectField += '</div></div>';

			if(fieldType == "text"){
				$(".clone-text").append(inputField);
			}else if(fieldType == "select"){
				$(".clone-select").append(selectField);
			}else{
				alert("please select field type.")
			}
		});

		var inputFieldCount	= 0;
		var selectFieldCount	= 0;
		$(document).on('submit','#form2',function(e){
 			e.preventDefault();
 			inputFieldCount = $('input[name="full_name[]"]').length;
 			selectFieldCount = $('select[name="subject[]"]').length;
 			if(inputFieldCount > 0 || selectFieldCount > 0){
				displayData();
 			}else{
 				alert("atleast one field required to add for save the details");
 			}

        });

        function displayData(){
        		var isSelectMax = false;
        		var htmlTable = "";
        		if(inputFieldCount < selectFieldCount){
        			isSelectMax = true;
        		}else{
					isSelectMax = false;
        		}
        		if(isSelectMax){
        			
		 			//collecting data from the form2 for displying in the table.
		 			const full_name = $.map($('input[name="full_name[]"]'), function(el) { return el.value; });
		 			$('select[name="subject[]"]').each(function($k,$v) {
		 				htmlTable += "<tr>" ;
		 				htmlTable += "<td>"+($k+1)+"</td>" ;
		 				htmlTable += "<td>"+((full_name[$k]) ? full_name[$k] : "N/A")+"</td>" ;
		 				htmlTable += "<td>"+$(this).val()+"</td>" ;
		 				htmlTable += "</tr>" ;
		 			});
				
        		}else{

        			var name = $('input[name="full_name[]"]').val();
		 			
		 			//collecting data from the form2 for displying in the table.
		 			const subject = $.map($('select[name="subject[]"]'), function(el) { return el.value; });
		 			$('input[name="full_name[]"]').each(function($k,$v) {
		 				htmlTable += "<tr>" ;
		 				htmlTable += "<td>"+($k+1)+"</td>" ;
		 				htmlTable += "<td>"+$(this).val()+"</td>" ;
		 				htmlTable += "<td>"+((subject[$k]) ? subject[$k] : "N/A")+"</td>" ;
		 				htmlTable += "</tr>" ;
		 			});
        		}

				
				$(".displayData").html(htmlTable);

	 			//success msg
	 			$("#form2").append("<div class='alert alert-primary'>Details Saved, We are going to display the details, Please wait...</div>");
	 			
	 			//after a few second form will hide and display the data on the web.
	 			setTimeout(function() {
	 				$(".field_type").parent().parent().hide(100);
	 				$('#form2').hide(100);
	 				$('.table').show(1000);
	 			},2500);
        }

        	//remove2 the field
		$("body").delegate(".remove2",'click',function(argument) {
				$(this).parent().parent().remove();
		});
