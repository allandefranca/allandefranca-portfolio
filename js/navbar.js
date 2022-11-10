function changeNavColor(a) {
    if (a == "design"){
        document.querySelectorAll('[wm-nav]').forEach(link => {
        link.classList.add("colornavbar");
      })
      
      let mybutton = document.getElementById("myLogo");
      mybutton.innerHTML = "Avocado Production";
      mybutton.classList.add("colornavbar")

      let projectmenu = document.getElementById("project");
      projectmenu.classList.remove("colornavbar")

      let mynavChangeContact = document.getElementById("contact")
      mynavChangeContact.setAttribute("wm-nav", "src/contact_design.html")

      let mynavChangeDesign = document.getElementById("design")
      mynavChangeDesign.setAttribute("wm-nav", "src/projects.html")

      let mynavChangeProject = document.getElementById("project")
      mynavChangeProject.setAttribute("wm-nav", "src/design.html")     

      mynavChangeDesign.id = "photography"
      mynavChangeDesign.innerHTML = "Photography"
    }else if(a == "project"){ } 
    else if(a == "contact"){ } 
    else {
        document.querySelectorAll('[wm-nav]').forEach(link => {
        link.classList.remove("colornavbar")
      })
      
      let mylogo = document.getElementById("myLogo");
      mylogo.classList.remove("colornavbar")
      mylogo.innerHTML = "Allandefranca";

      let mynavChange = document.getElementById("contact")
      mynavChange.setAttribute("wm-nav", "src/contact_photo.html")

      let mynavChangeDesign = document.getElementById("photography")
      mynavChangeDesign.setAttribute("wm-nav", "src/design.html")

      let mynavChangeProject = document.getElementById("project")
      mynavChangeProject.setAttribute("wm-nav", "src/projects.html")

      mynavChangeDesign.id = "design"
      mynavChangeDesign.innerHTML = "Design"
    } 


}