const toggleButton = document.getElementById("botonmenu");
const menuToggle = document.getElementById("menu-toggle");





/* Cada ves que se haga click en el boton agrega y quita
las clases necesarias para que el menu se muestre */ 

toggleButton.addEventListener("click", ()=> {
    document.getElementById("menu-toggle").style.visibility = "visible"
})

/* Cuando se haga click en un link se cierra el menu */

menuToggle.addEventListener("click", () => {
   
   document.getElementById("menu-toggle").style.visibility = "hidden"


  });


/* cuando se haga click fuera del menu tambien se cierra el menu */ 


  
