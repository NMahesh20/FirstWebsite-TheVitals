document.onreadystatechange = () => {
    if(document.readyState=="interactive"){
        document.getElementById("bodyId").classList.add("bodyLoading");
        document.getElementById("id1").classList.add("displayNone");
        document.getElementById("id2").classList.add("displayNone");
        document.getElementById("id3").classList.add("displayNone");
        document.getElementById("id4").classList.add("displayNone");
        document.getElementById("id5").classList.add("displayNone");

        document.getElementById("loader").classList.add("loading");
    }
    if (document.readyState === 'complete') {
            document.getElementById("bodyId").classList.add("body");
            document.getElementById("loader").classList.remove("loading");
            document.getElementById("loader").classList.add("displayNone");
            document.getElementById("id1").classList.remove("displayNone");
            document.getElementById("id1").classList.add("topnavAnimation");  
            document.getElementById("id2").classList.remove("displayNone");
            document.getElementById("id2").classList.add("containerAnimation");  
            document.getElementById("id3").classList.remove("displayNone");
            document.getElementById("id3").classList.add("timeContainerAnimation");  
            document.getElementById("id4").classList.remove("displayNone");
            document.getElementById("id4").classList.add("weatherContainerAnimation");  
            document.getElementById("id5").classList.remove("displayNone");
            document.getElementById("id5").classList.add("quoteContainerAnimation"); 
            
    }
  };

