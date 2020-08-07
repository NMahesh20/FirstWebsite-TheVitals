document.onreadystatechange = () => {
    if(document.readyState=="interactive"){
        document.getElementById("bodyId").classList.add("bodyLoading");
        document.getElementById("aligner").classList.add("displayNone");
        document.getElementById("loader").classList.add("loading");
    }
    if (document.readyState === 'complete') {
        document.getElementById("loader").classList.remove("loading");
        document.getElementById("loader").classList.add("displayNone");
        document.getElementById("aligner").classList.remove("displayNone");    
        document.getElementById("bodyId").classList.add("body");
        document.getElementById("aligner").classList.add("alignerAnimate");    }
  };

