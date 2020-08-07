document.onreadystatechange = () => {
    if(document.readyState=="interactive"){
        document.getElementById("bodyId").classList.add("bodyLoading");
        document.getElementById("id1").classList.add("displayNone");
        document.getElementById("aboutWebsite").classList.add("displayNone");
        document.getElementById("aboutMe").classList.add("displayNone");

        document.getElementById("loader").classList.add("loading");
    }
    if (document.readyState === 'complete') {
            document.getElementById("bodyId").classList.remove("bodyLoading");

            document.getElementById("bodyId").classList.add("body");
        document.getElementById("loader").classList.remove("loading");
        document.getElementById("loader").classList.add("displayNone");
        document.getElementById("id1").classList.remove("displayNone");
        document.getElementById("id1").classList.add("topnavAnimation");
        document.getElementById("aboutWebsite").classList.remove("displayNone");   
        document.getElementById("aboutWebsite").classList.add("aboutWebsiteAnimation");
        document.getElementById("aboutMe").classList.remove("displayNone");

        document.getElementById("aboutMe").classList.add("aboutMeAnimation");
        document.getElementById("footerId").classList.add("footerAnimation");

         
    }
  };

