// April 30, 2019 Addend V2
// April 30, 2019 Addend
// AUG 15, 2019 v1
$(function() {

	var output = document.getElementById('output');
	var ajaxhttp =  new XMLHttpRequest();

	var urlSegmentFromParentDocument = urlSegment; 	//	"true-food-kitchen-33";
	var url = "https://www.truefoodkitchen.com/singleplatform/sp-auth-all.php?seg="+urlSegmentFromParentDocument;

	ajaxhttp.open("GET", url, true);
	ajaxhttp.setRequestHeader("content-type", "application/json");

	ajaxhttp.onreadystatechange = function() {

		//	col-md-push-1
		//$( "#output" ).removeClass( "col-md-push-1" );
		$( "#output" ).removeClass( "col-md-10" );
		$( "#output" ).addClass( "col-md-11" );

		if (ajaxhttp.readyState == 4 && ajaxhttp.status == 200) {

			var singleplatformResponse = JSON.parse(ajaxhttp.responseText);

			if (singleplatformResponse.code != 200) {

				$( "#output" ).append( "We're sorry there was a problem retrieving the menu. Please try again." );
				return;

			}

	    	var dataObjectsArray = singleplatformResponse.data;

			$.each(dataObjectsArray, function(idx, category) {

				var a = category.name;
				var display_name = a.replace(/menu/gi, "");
				var display_name = display_name.replace(/menu|winter|spring|fall|summer/gi, "");

				var div_id = display_name.replace(/[^a-z0-9]/gi,'');

				var hidden = "true";

				var initial_class = "inactive";
				var display = "display:none;";
				var tabIndex = "-1";
				var button_id = "button_"+div_id;
				var dev = "";
				var aria_selected = "false";
				var aria_hidden = "true";

				if (idx == 0) {
					hidden = "false";
					tabIndex = "0";
					initial_class = "active";
					display = "";
					aria_selected = "true";
					aria_hidden = "false";
				}

				tabIndex = idx + 10

				$( "#menu_tabs" ).append('<li class="'+initial_class+' primary_menu_tab" role="tab" aria-selected="'+aria_selected+'" rel="'+div_id+'" tabindex="'+tabIndex+'" >'+display_name+'</li>');
				$( "#output" ).append('<div id="'+div_id+'" class="tabpanel active row" role="tabpanel" aria-hidden="'+aria_hidden+'" style="'+display+'" ></div>');
				$( "#"+div_id ).append(formatCategory(category));

				//	console.log("category.name : "+category.name);

			});

			forceIcons();

		}

	} //end ajaxhttp

	ajaxhttp.send();

/////////////

$('#menu_tabs').delegate('.primary_menu_tab','focus click',function(event){

	var target = $(this).attr('rel');

	$( "#output" ).children().hide();

	$( "#output" ).children().attr('aria-hidden', true);
	$( "#output" ).children().attr('aria-selected', false);

	$( "#menu_tabs" ).children().removeClass('active');
	$( "#menu_tabs" ).children().addClass('inactive');
	$( "#menu_tabs" ).children().attr('aria-selected', false);

	$( this ).removeClass('inactive');
	$( this ).addClass('active');
	$( this ).attr('aria-selected', true);

	$('#'+target).show();
	$('#'+target).attr('aria-selected', true);
	$('#'+target).attr('aria-hidden', false);

});

////////////

	function formatCategory(category){

		var disclaimer = "";

		// this has changed so I'm just matching 'Wine' below
		var category_id_wine = 3256185;
		// this is an array because of the likely hood we will need to show others
		var category_ids_that_display_the_footnote = [category_id_wine];

		console.log(category.name);
		// disclaimer/footnote for the wine category

		if (( category.name == "Wine" ) || ( category.name == "Wine Menu" )) {
			disclaimer = '<div style="text-align:left; padding-left:20px" class="small"><span style="color:#477C31;font-weight:bold!important;">S</span> Sustainable | <span style="color:#477C31;font-weight:bold!important;">B</span> Bio-dynamic | <span style="color:#477C31;font-weight:bold!important;">O</span> Organic</span></div>'
		}


		if (( category.name == "BeerCider" ) || ( category.name == "Beer & Cider" ) || ( category.name == "Beer & Cider Menu" )) {
			disclaimer = '<div style="text-align:left; padding-left:20px" class="small"><span style="color:#477C31;font-weight:bold!important;">O</span> Organic</span></div>'
		}

		if ( category.name == "True on the Go" ) {
			disclaimer = '<div style="text-align:left; padding-left:20px" class="small"><span style="color:#477C31;font-weight:bold!important;">***</span> Contains Nuts</div>'
		}


		//	var fieldset = "<fieldset style='margin-left:40px;' class='category_root' id='menu-" + category.id + "'>"
		var fieldset = "<fieldset class='category_root' id='menu-" + category.id + "' style='padding:2px;'>"
						+"<legend>" + category.name + " </legend>"
						+formatSectionsData(category)
						+" "
						+disclaimer
						+"</fieldset>";

		return fieldset;

	}

	function formatSectionsData(category){

		var list_of_sections = "";

		$.each(category.sections, function(idx, section) {

			//	console.log(" - section.name : "+section.name);

			list_of_sections = list_of_sections;

			if (section.items.length > 0) {

		        name = section.name;

				list_of_sections = list_of_sections + "<div class='col-md-12 col-sm-12 pb-2'>"
                                              +"  <h3 class='section_name' style='color:#477C31; font-size:18px; font-weight:600; margin:4px; padding:4px;'>" + name + "</h3>"
                                              +"  <p class='small'>"+section.description+"</p>"+ formatItemsData(category.name, section) +
                                              "</div>";

			}

		});

		var returnString = "<div class='category_sections'>"  + list_of_sections + "</div>"

		return returnString;

	}

	function formatItemsData(category_name, section){

		var list_of_items = "";

		$.each(section.items, function(idx, item) {
			//	console.log(" - - item.name : "+item.name);

		var section_name = section.name;
		var price_info = "";
		var calories_info = "";
		var veganIDString = " &nbsp;(V) ";
		var glutenFreeIDString = " &nbsp;(GF) ";
		var vegetarianIDString = " &nbsp;(VEG) ";

		var description = "";
		var attributeVegan = "";
		var attributeGlutenFree = "";
		var attributeVegetarian = "";

		var item_name = item.name;

		if (( category_name == "Wine" ) || ( category_name == "Wine Menu" ) || ( category_name == "Beer & Cider" ) || ( category_name == "Beer & Cider Menu" )) {

        	item_name = item_name.replace(/\^\^\^/g, ' <span style="color:#477C31;font-weight:bold!important;">O</span>');
        	item_name = item_name.replace(/\^\^/g, ' <span style="color:#477C31;font-weight:bold!important;">B</span>');
        	item_name = item_name.replace(/\^/g, ' <span style="color:#477C31;font-weight:bold!important;">S</span>');
        	//	item_name = "√"+item_name;

      	}

		if (item.description){
			description = item.description;
		}

      if (item.choices != null){

		if (( category_name == "Wine" ) || ( category_name == "Wine Menu" )) {
			price_info = "<p>"
		}

		for (index = 0; index < item.choices.length; index++) {

            var choice = item.choices[index];

  	        if (choice != null){

				price_info = price_info+""+priceInfo(choice)+"<br>";
				calories_info = calorieInfo(choice);

  	        }

          }

		}

        if (item.attributes != null){

          if (item.attributes.vegan != null){
            attributeVegan = veganIDString;
          }
          if (item.attributes["gluten-free"] != null){
            attributeGlutenFree = glutenFreeIDString;
          }
          if (item.attributes.vegetarian != null){
            attributeVegetarian = vegetarianIDString;
          }
        }

        list_of_items = list_of_items + "<li><div class='item_container'><p class='item_name'>" + item_name + " </p><span class='item_diet'>"+attributeVegan+""+attributeGlutenFree+""+attributeVegetarian+"</span> &nbsp;"+price_info+"</div><p class='item_description'>" + description + ""+calories_info+"</p></li>";

	    });

		var returnString = "<ul class='section_items'>" + list_of_items + "</ul>";

		return returnString;

	}

	function priceInfo(choice){

		var _price_info = "";
		var min = '';
		var max = '';

    if (choice.prices.min != null) {
      min = choice.prices.min;
    }
    if (choice.prices.max != null) {
      max = choice.prices.max;
    }

    _price_info = min;
    if (max != ''){
      _price_info = min+" - "+max;
    }

    if (_price_info != ''){
      _price_info = choice.name+" $"+_price_info;
    }

		return _price_info;

	}

	function calorieInfo(choice){

		var _calorie_info = "";

		var min = '';
		var max = '';

		if (choice.calories.min != null) {
		  min = choice.calories.min;
		}

		if (choice.calories.max != null) {
		  max = choice.calories.max;
		}

	    _calorie_info = min;

		if (max != ''){
		  _calorie_info = min+" - "+max;
		}

	    if (_calorie_info != ''){
    	  _calorie_info = " <p class='calorie_info'>"+_calorie_info+ " cal </p>";
	    }

		return _calorie_info;

	}

	function forceIcons(){

		$(".item_name").text(function (){

			var displayName = $(this).text();
			var targeted = displayName.includes("***");
			if (targeted == true){

				var scrubbed = displayName.replace(/\*\*\*/g, "");
				$(this).text(scrubbed);
				$(this).append("&#42;&#42;&#42;");

			} else {

				var displayName = $(this).text();
				var targeted = displayName.includes("**");
				if (targeted == true){

					var scrubbed = displayName.replace(/\*\*/g, " ");
					$(this).text(scrubbed);

					// Sorry J I'm leaving this style nastiness for you to fix ;)
					$(this).prepend($('<img>',{id:'seasonal-img',src:'/images/icon_menu_seasonal.png'}));

				}

			}

		});

	}

	function wrapCategoryFootnote(footnote){

	    return "<div class='category_footnote col-md-12' style='display:block;' rel='category_footnote'><p>"+footnote+"</p></div>";

	}

});
