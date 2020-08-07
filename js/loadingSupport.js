document.onreadystatechange = () => {
    if(document.readyState=="interactive"){
        document.getElementById("bodyId").classList.add("bodyLoading");
        document.getElementById("id0").classList.add("displayNone");
        document.getElementById("id1").classList.add("displayNone");
        document.getElementById("id2").classList.add("displayNone");
        document.getElementById("id3").classList.add("displayNone");
        document.getElementById("loader").classList.add("loading");
    }
    if (document.readyState === 'complete') {
            document.getElementById("bodyId").classList.add("body");
            document.getElementById("loader").classList.remove("loading");
            document.getElementById("loader").classList.add("displayNone");
            document.getElementById("id0").classList.remove("displayNone");
            document.getElementById("id0").classList.add("topnavAnimation");
            document.getElementById("id1").classList.remove("displayNone");   
            document.getElementById("id1").classList.add("thanks1Animation");
            document.getElementById("id2").classList.remove("displayNone");
            document.getElementById("id2").classList.add("thanks2Animation");
            document.getElementById("id3").classList.remove("displayNone");   
            document.getElementById("id3").classList.add("thanks3Animation");
        
            
            

            
         
    }
  };