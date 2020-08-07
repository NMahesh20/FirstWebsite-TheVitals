var urlForecast="https://forecast7.com/en/20d9885d75/odisha/"
var stateDefault="ODISHA"
var userName="Viewer";
$(document).ready(function(){
    $('#userName').focus(function(){
        
var wid=$("#aligner").width();
$('#userInfo').outerWidth(wid);
$("#locInfo").outerWidth(wid);
        $('#userInfo').addClass("anime");
        setTimeout(
            function(){
                $('#userInfo').removeClass("anime");
            },3000
        )
    });
    $('#userLoc').focus(function(){
        $('#locInfo').addClass('anime');
        setTimeout(
            function(){
                $('#locInfo').removeClass("anime");
            },3500
        )
    })
    
    $('#getLoc').click(function(){
        var state=$("#userLoc").val().trim();
        var temp=$('#userName').val().trim().toUpperCase();
        if(temp!=""){userName=temp;}

        $("#aligner").toggleClass("displayNone");
        $("body").removeClass("body")
        $("body").addClass("bodyLoading");
        $("#loader").removeClass("displayNone");
        $("#loader").addClass("loading")
        var query = state+" forecast7";


        var api="AIzaSyDJlzSrE1-ZoLt0A0XNPnxqCKk2V5Uid-I";  //Google's api for Custom search
        var searchEngine="005238064938442562638:zr6-tzoyzzu";   //Create search engine
        var url="https://www.googleapis.com/customsearch/v1?key="+api+"&cx="+searchEngine+"&q="+query;
        var getLink=false;
        if(state!=""){
        $.get(url, function(response) {
            if(response.hasOwnProperty("items")){
                for(i=0;i<response.items.length;i++){
                    if(response.items[i]["displayLink"]=="forecast7.com"){
                        getLink=true;
                        urlForecast=response.items[i].link;
                        urlForecast=urlForecast.replace("?unit=us","")
                        temparr=urlForecast.split("/")
                        state=temparr[temparr.length-2]
                        stateDefault=state.toUpperCase();
                        localStorage.setItem("localStorageVarName",userName);
                        localStorage.setItem("localStorageVarURL",urlForecast);
                        localStorage.setItem("localStorageVarState",stateDefault);
                         
                      window.open("main.html","_top");
                        return;
                
                    }
                    else if(!getLink && i==response.items.length-1){
                            console.log("Location not found. Switching to default values");
                            localStorage.setItem("localStorageVarName",userName);
                      localStorage.setItem("localStorageVarURL",urlForecast);
                      localStorage.setItem("localStorageVarState",stateDefault);
                            window.alert("Sorry the Location entered was not found.\nSwitching to Default values.");
                            window.open("main.html","_top");
                        
                    }
                  }


                
            
        }
            else {
                console.log("Api key is wrong/ calls exceeded. Or the Domain in not included in API settings.\n Switching to default values");
                localStorage.setItem("localStorageVarName",userName);
          localStorage.setItem("localStorageVarURL",urlForecast);
          localStorage.setItem("localStorageVarState",stateDefault);
          window.alert("Sorry the API calls made has exceeded.\nSwitching to Default values")
                window.open("main.html","_top");

            }
        
          });}
          else{
              console.log("Location not entered, switching to default")
              localStorage.setItem("localStorageVarName",userName);
          localStorage.setItem("localStorageVarURL",urlForecast);
          localStorage.setItem("localStorageVarState",stateDefault);
          window.open("main.html","_top");

          }
          
    })

});
