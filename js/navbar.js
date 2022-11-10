function changeNavColor(a) {
  if (a == "design"){
      document.querySelectorAll('[wm-nav]').forEach(link => {
      link.classList.add("colornavbar");
      link.style.color = "#86cd60";
    })

    let mybutton = document.getElementById("nav-title");
    mybutton.innerHTML = "Avocado Production";
    mybutton.style.color = "#86cd60";
    mybutton.setAttribute("href", "#design")

    document.querySelectorAll("[nav-span]").forEach(link => {
      link.setAttribute("style", "border-top: 2px solid #86cd60;")
    })

    let mynavChangeDesign = document.getElementById("design")
    mynavChangeDesign.setAttribute("wm-nav", "src/projects.html")

    let mynavChangeProject = document.getElementById("project")
    mynavChangeProject.setAttribute("wm-nav", "src/design.html")  
    mynavChangeProject.style.color = "#fff"   

    mynavChangeDesign.id = "photography"
    mynavChangeDesign.innerHTML = "Photography"  

  }else if(a == "project"){ } 
  else if(a == "contact"){ } 
  else {
      document.querySelectorAll('[wm-nav]').forEach(link => {
      link.style.color = "#F89100";
    })
    
    let mybutton = document.getElementById("nav-title");
    mybutton.innerHTML = "Allandefranca";
    mybutton.style.color = "#F89100";
    mybutton.setAttribute("href", "index.html")

    document.querySelectorAll("[nav-span]").forEach(link => {
      link.setAttribute("style", "border-top: 2px solid #F89100;")
    })

    let mynavChangeDesign = document.getElementById("photography")
    mynavChangeDesign.setAttribute("wm-nav", "src/design.html")

    let mynavChangeProject = document.getElementById("project")
    mynavChangeProject.setAttribute("wm-nav", "src/projects.html")
    mynavChangeProject.style.color = "#fff" 

    mynavChangeDesign.id = "design"
    mynavChangeDesign.innerHTML = "Design"
  } 


}