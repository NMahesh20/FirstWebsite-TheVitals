var urlForecast=localStorage.getItem("localStorageVarURL");
var stateDefault=localStorage.getItem("localStorageVarState");
var anchor=document.getElementById("setLoc");
var link=document.createAttribute("href");
link.value=urlForecast;
anchor.setAttributeNode(link);
var state=document.createAttribute("data-label_1");
state.value=stateDefault;
anchor.setAttributeNode(state);