$(document).ready(function(){

    $("#button1").click(function(){
        $.ajax({
        	url: "http://localhost:4479/Service1.svc/GetMembers/",
        	success: function(result){
            	console.log(result);
            	//$('#id2').html(result);
            
            	var namesservice = JSON.parse(result);
            	console.log(typeof namesservice);

            	for(var i=0; i< namesservice.length;i++)
            	{         	
            		var abc = namesservice[i];
              		$('#id2 select').append("<option>"+abc+"</option>");
            	}
        	}
    	});
    });
	var names = ['Rekha', 'Asha', 'hari','chinnu'];
	var tableData = {
		header:['From','To','Amount','Description','Date'],
		rowData:[
					['Me','Hari',200,'Birthday treat','22/01/2015'],
					['Me','Hari',800,'Birthday treat','22/01/2015'],
					['Me','Hari',900,'Birthday treat','22/01/2015']
				]
	};
	for(var i=0; i<tableData.header.length; i++){
		$(document).find('table').append('<th><b>'+tableData.header[i]+'</b></th>');
	}

	for(var i=0; i<tableData.rowData.length; i++){
		$(document).find('table').append('<tr id='+i+'></tr>');
		for(var j=0; j<tableData.rowData[i].length; j++){
			$(document).find('table tr#'+i).append('<td><b>'+tableData.rowData[i][j]+'</b></td>');
		}
	}
	

	// $("#button1").click(function(){
	// 	var showDetailsNames = [];
	// 	showDetailsNames = names;
	// 	$('#id2 select').empty();
	// 	$('#id2 select').append('<option selected >select</option>');
	// 	for(var i=0; i< showDetailsNames.length;i++)
 //        {         	
 //            $('#id2 select').append("<option>"+showDetailsNames[i]+"</option>");
 //        }
 //    });

	$('#id2 select').on('change', function() {
		var optionSelected = $("#id2 select option:selected").text();
  		alert(optionSelected);
	});

	$("#button3").click(function(e){
		e.preventDefault();



$( "#id2 #tableselect" ).replaceWith( $( "#transaction" ) );

		 $( "#transaction" ).css('display','block');

	});

    $('#transaction .tabsDiv .tabsList a').on('click', function(e)  {
        var currentAttrValue =$(this).attr('href');
 
        // Show/Hide Tabs
        $('.tabsDiv ' + currentAttrValue).show().siblings().hide();
 
        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });

});