function getTimezone(){
var s=Date()
var arr=s.split(" ")
a=arr[5]
a.replace("+","")
var link="https://www.clocklink.com/html5embed.php?clock=048&timezone="+a+"&color=orange&size=450&Title=&Message=&Target=&From=2020,1,1,0,0,0&Color=orange"
return link;
}
document.getElementById("setTimezone").src=getTimezone();