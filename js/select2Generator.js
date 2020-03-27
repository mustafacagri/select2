const select2g_noDataFound = "Hiçbir kayıt bulunamadı";
const select2g_maximumSelected = "En fazla args.maximum seçim yapabilirsiniz"; // args.maximum is a variable, which select2generator will replace it a number with maximumSelectedText
const select2g_minimumInputLength = 3; // you can set a default value for minimumInputLength here
const select2g_maximumInputLength = 0; // 0 is infinite
const select2g_inputTooShortText = "Lütfen args.minimum ve üzeri karakter girin"; // args.minimum is a variable, which select2generator will replace it a number with inputTooShortText. Also args.input is the user-typed text
const select2g_inputTooLongText = "En fazla args.maximum karakter girebilirsiniz"; // args.maximum is a variable, which select2generator will replace it a number with inputTooLongText. Also args.input is the user-typed text


//var URLPeopleJson = 'http://localhost/select2generator/datas/people.json';



const s2gWhatWeGot = ["id", "name", "multiple", "data-maximumSelectionLength", "data-maximumSelectedText", "data-url", "data-text", "data-value", "data-placeholder", "data-language", "data-noDataFound", "data-defaultOptionText", "data-defaultOptionValue", "data-allowClear",       "data-optGroup", "data-optGroupTitle", "data-optGroupData",          "data-ajaxSearch", "data-minimumInputLength", "data-maximumInputLength", "data-inputTooLongText", "data-inputTooShortText",                    "data-targetSelectId", "data-targetSelectUrl", "data-targetSelectParam", "data-targetSelectType", "data-targetSelectText", "data-targetSelectValue"];

function select2GeneratorTryCatchFunc(thisFromReady){
    try{
        var thisSelect = $(thisFromReady);

        if($(thisSelect).attr("data-maximumSelectedText")=="" || $(thisSelect).attr("data-maximumSelectedText")==undefined){$(thisSelect).attr("data-maximumSelectedText",select2g_maximumSelected);}
        if($(thisSelect).attr("data-inputTooShortText")=="" || $(thisSelect).attr("data-inputTooShortText")==undefined){$(thisSelect).attr("data-inputTooShortText",select2g_inputTooShortText);}
        if($(thisSelect).attr("data-inputTooLongText")=="" || $(thisSelect).attr("data-inputTooLongText")==undefined){$(thisSelect).attr("data-inputTooLongText",select2g_inputTooLongText);}

        if($(thisSelect).attr("data-ajaxSearch")=="true"){

            var dataText = thisSelect.attr("data-text");
            var dataValue = thisSelect.attr("data-value");
            
            $(thisSelect).select2({
                //dataAjaxSearchObject,  if our select2 has data-ajaxSearch, we created this object to show here
                "language": $(thisSelect).attr("data-language") != undefined ? $(thisSelect).attr("data-language") : "",
                "placeholder": $(thisSelect).attr("data-placeholder") != undefined ? $(thisSelect).attr("data-placeholder") : "",
                "language": {
                    noResults: function(){return $(thisSelect).attr("data-noDataFound") == undefined ? select2g_noDataFound : $(thisSelect).attr("data-noDataFound");},
                    maximumSelected: function (args) {return $(thisSelect).attr("data-maximumSelectedText").replace("args.maximum", args.maximum);},
                    inputTooShort: function(args) {return $(thisSelect).attr("data-inputTooShortText").replace("args.minimum", args.minimum);},
                    inputTooLong: function(args) {return $(thisSelect).attr("data-inputTooLongText").replace("args.maximum", args.maximum);},
                },
                "allowClear": ($(thisSelect).attr("data-allowClear") == undefined || $(thisSelect).attr("data-allowClear") == "")?false:true, // null or undefined => false, else anything is true! ex: a is true, asdasd is true, too!
                "maximumSelectionLength": ($(thisSelect).attr("data-maximumSelectionLength") == undefined || $(thisSelect).attr("data-maximumSelectionLength") == "0" || isNaN($(thisSelect).attr("data-maximumSelectionLength"))==true || $(thisSelect).attr("data-maximumSelectionLength")=="")?0:$(thisSelect).attr("data-maximumSelectionLength"),
                
                minimumInputLength: $(thisSelect).attr("data-minimumInputLength") == undefined ? select2g_minimumInputLength : $(thisSelect).attr("data-minimumInputLength"),
                maximumInputLength: $(thisSelect).attr("data-maximumInputLength") == undefined ? select2g_maximumInputLength : $(thisSelect).attr("data-maximumInputLength"),
                minimumResultsForSearch: 10,
                ajax: {
                    url: thisSelect.attr("data-url"),
                    dataType: "json",
                    type: "GET",
                    data: function (params) {
                        var queryParameters = {
                            term: params.term
                        }
                        return queryParameters;
                    },
                    processResults: function (data) {
                        return {
                            results: $.map(data, function (item) {
                                return {
                                    text: (dataText!="" && dataText!=undefined)?item[dataText]:item[Object.keys(item)[1]],
                                    id: (dataValue!="" && dataValue!=undefined)?item[dataValue]:item[Object.keys(item)[1]]
                                }
                            })
                        };
                    }
                }
            });

        
        }

        else{
            $(thisSelect).select2({
                "language": $(thisSelect).attr("data-language") != undefined ? $(thisSelect).attr("data-language") : "",
                "placeholder": $(thisSelect).attr("data-placeholder") != undefined ? $(thisSelect).attr("data-placeholder") : "",
                "language": {
                    "noResults": function(){
                        return $(thisSelect).attr("data-noDataFound") == undefined ? select2g_noDataFound : $(thisSelect).attr("data-noDataFound");
                    },
                    "maximumSelected": function (e) {
                        return $(thisSelect).attr("data-maximumSelectedText").replace("args.maximum", e.maximum);
                    }
                },
                "allowClear": ($(thisSelect).attr("data-allowClear") == undefined || $(thisSelect).attr("data-allowClear") == "")?false:true, // null or undefined => false, else anything is true! ex: a is true, asdasd is true, too!
                "maximumSelectionLength": ($(thisSelect).attr("data-maximumSelectionLength") == undefined || $(thisSelect).attr("data-maximumSelectionLength") == "0" || isNaN($(thisSelect).attr("data-maximumSelectionLength"))==true || $(thisSelect).attr("data-maximumSelectionLength")=="")?0:$(thisSelect).attr("data-maximumSelectionLength")
            });
        }
    }
    catch(err){
        console.log(`An error occured: ${err}`);
    }
}

function select2GeneratorCreatorFunc(thisFromReady){
    var dataUrl = $(thisFromReady).attr("data-url");
        //if(dataUrl==undefined || dataUrl==""){dataUrl="error";}
    var dataText = $(thisFromReady).attr("data-text");
    var dataValue = $(thisFromReady).attr("data-value");
    var thisSelect = $(thisFromReady);
    
    var dataTargetSelectId = $(thisFromReady).attr("data-targetSelectId");
    var dataTargetSelectText = $(thisFromReady).attr("data-targetSelectText");
    var dataTargetSelectValue = $(thisFromReady).attr("data-targetSelectValue");
    
    // console.log("dataUrl: " + dataUrl);
    // console.log("dataText: " + dataText);
    // console.log("dataValue: " + dataValue);

    if($(thisFromReady).attr("data-targetSelectId")!=undefined && $(thisFromReady).attr("data-targetSelectUrl")!=undefined){
        $(thisSelect).on('change', function(){
            //alert(thisFromReady.value);
            var datatargetselectparam = $(thisFromReady).attr("data-targetselectparam")==undefined?"id":$(thisFromReady).attr("data-targetSelectParam")
            $.ajax({
                url: $(thisFromReady).attr("data-targetSelectUrl"),
                type: $(thisFromReady).attr("data-targetSelectType")==undefined?"get":$(thisFromReady).attr("data-targetSelectType"),
                data: {[datatargetselectparam]: thisFromReady.value},
                success: function(data){
                    $("#"+dataTargetSelectId).empty();
                    $.each(data, function(i,item){
                        if( (dataTargetSelectText!="" && dataTargetSelectText!=undefined) && (dataTargetSelectValue!="" && dataTargetSelectValue!=undefined) ){$("#"+dataTargetSelectId).append(new Option(item[dataTargetSelectText], item[dataTargetSelectValue]));}
                        else if (Object.keys(item).length>1) {$("#"+dataTargetSelectId).append(new Option(item[Object.keys(item)[1]], item[Object.keys(item)[0]]   ));}
                    });
                },
                complete: function(){
                    select2GeneratorTryCatchFunc("#"+dataTargetSelectId);
                }
            });
        });
    }


    if($(thisFromReady).attr("data-defaultOptionText")!=undefined){
        $(thisSelect).append(`<option value="${$(thisFromReady).attr("data-defaultOptionValue")!=undefined?$(thisFromReady).attr("data-defaultOptionValue"):$(thisFromReady).attr("data-defaultOptionText")}" disabled="disabled" selected="selected">${$(thisFromReady).attr("data-defaultOptionText")}</option>`);
    }
    
    if(dataUrl!=undefined && dataUrl!=""){

        if($(thisSelect).attr("data-ajaxSearch")=="true"){
            select2GeneratorTryCatchFunc(thisFromReady);
        }

        else{
            $.ajax({
                url:dataUrl,
                success: function (data) {

                    if($(thisSelect).attr("data-optGroup")=="true"){
                        $.each(data, function(i,item){
                            var selectDatasForOptGroup = "";
                            var dataoptGroupOK = 0;
                            if( $(thisSelect).attr("data-optGroupTitle")!="" && $(thisSelect).attr("data-optGroupTitle")!=undefined){selectDatasForOptGroup += `<optgroup label="${item[$(thisSelect).attr("data-optGroupTitle")]}">`; dataoptGroupOK = 1;}
                            else if(Object.keys(item).length>1){selectDatasForOptGroup += `<optgroup label="${item[Object.keys(item)[0]]}">`; dataoptGroupOK = 1;}

                                var whichDataWillBeUsed = null;
                                var selectDatasForOptGroup2 = "";
                                whichDataWillBeUsed=($(thisSelect).attr("data-optGroupData")!="" && $(thisSelect).attr("data-optGroupData")!=undefined)?item[$(thisSelect).attr("data-optGroupData")]:item[Object.keys(item)[1]];
                                $.each(whichDataWillBeUsed, function(i2,item2){
                                    if( (dataText!="" && dataText!=undefined) && (dataValue!="" && dataValue!=undefined) ){selectDatasForOptGroup2 += `<option value="${item2[dataValue]}">${item2[dataText]}</option>`;}
                                    else if(Object.keys(item).length>1){selectDatasForOptGroup2 += `<option value="${item2[item2[Object.keys(item)[0]]]}">${item2[item2[Object.keys(item)[1]]]}</option>`;}
                                });
                                selectDatasForOptGroup += selectDatasForOptGroup2;


                            if( dataoptGroupOK==1){$(thisSelect).append(`${selectDatasForOptGroup}</optgroup>`);}
                        });
                    }

                    

                    else {
                        $.each(data, function(i, item){
                            if( (dataText!="" && dataText!=undefined) && (dataValue!="" && dataValue!=undefined) ){$(thisSelect).append(new Option(item[dataText], item[dataValue]));} // If json returns values with data-text and data-value values
                            else if(Object.keys(item).length>1){$(thisSelect).append(new Option(item[Object.keys(item)[1]], item[Object.keys(item)[0]]   ));} // If json returns more than one key and no data-value or data-text; we returns value with first key of object and text with second key of object
                            else {/* If something happenes wrong, we returns no data found message without any data or option. And you can modify the no data found message with data-nodatafound="your custom no data found message". If you do not define a custom message, "select2Generator_noDataFound" variable will be shown. */}
                        });
                    }
                },
                complete: function(){
                    select2GeneratorTryCatchFunc(thisFromReady);
                }
            });
        }
    }
    else{}
}

$( document ).ready(function() {
    $(".select2Generator").each(function(i,item){
        select2GeneratorCreatorFunc(this);
    });
    // .select2-container clasına z-index vermezseniz, açılır kısmında sorun yaşayabilirsiniz ====> .select2-container {z-index:9999999999;}
});



