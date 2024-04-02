var imgurl;
var autoSuggestionEnabled = false;
var appId = "E1FB6085899219CFB7F44E35A3FE49A00C4D6480";
var bingUrl = "https://www.bing.com/";

$(document).ready(function() {
	
	document.getElementById('sb_form_q').value="";
	
    $.ajax({
        url: "http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1",
        dataType: "text",
        success: function(response) {
            var obj = jQuery.parseJSON(response);
            // console.log(obj.images[0].url);
            imgurl = obj.images[0].url;
			
			var element = document.getElementById("msbinglogo");
			element.src ="white_logo.png";
			
            setTimeout(function() {
                document.getElementById("bg").style.backgroundImage = "url(https://www.bing.com" + imgurl + ")";
            }, 200);
        },
        error: function() {
			console.log("error");
			document.getElementById("msbinglogo").src = "gray_logo.png";
        }
    });
	
	$("#sb_form_q").autocomplete({
        source: function (request, response) {
            $.ajax({
                type: "GET",
				url: "https://www.bingapis.com/api/v7/suggestions?appid=" + appId + "&q=" + $('#sb_form_q').val(),
                processData: false,
                dataType: "json",
                success: function (data) {
                    if (autoSuggestionEnabled)
                        response(getSuggestionValues(data));
                },
                error: function (error) {
                    SendPing("AS");
                }
            });
        },
        select: function (event, ui) {
            $('#sb_form_go').trigger('click');
        }
    });
	
	function getSuggestionValues(jsonData) {
        var suggestions = [];
        $.each(jsonData.suggestionGroups[0].searchSuggestions, function (index, value) {
            suggestions.push(value.displayText);
        })

        //Removing the display content if more than 8
        if (suggestions.length > 8) {
            suggestions.splice(8, suggestions - 8);
        }
        return suggestions;
    }
	
	
});


document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('sb_form_q').addEventListener('input', function () {
        autoSuggestionEnabled = true;
    });

});