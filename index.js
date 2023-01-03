const allNote = document.querySelector("#right-all-notification-box");
const newNote = document.querySelectorAll(".action-notify-red");
const actionNote = document.querySelectorAll(".action-place");
const profileName = document.querySelectorAll(".action-profile");
const noteBox = document.querySelectorAll(".notification-box");


  
 
      
      
document.addEventListener('DOMContentLoaded', ()=>{
        
       allNote.addEventListener("click", ()=>{
       newNote.forEach((element) => {
       element.style.display = "none";
       });
       profileName.forEach((element) => {
         element.style.color="black";
       });
       actionNote.forEach((element)=>{
         element.style.color = "var(--Dark-grayish-blue)";
       });
       noteBox.forEach((element)=>{
         element.style.backgroundColor = "white";
       });
      });
      
      /*   end of select all properties */
      /* profile-name hover property*/
      
  const toggleName = document.querySelectorAll(".toggle-1");
      toggleName.forEach((element)=>{
       element.addEventListener("click",()=>{
         element.style.color="black";
       })
});
/*  action place */
    const togglePlace = document.querySelectorAll(".toggle-2");
      togglePlace.forEach((element)=>{
       element.addEventListener("click", () => {
        element.style.color="var(--Dark-grayish-blue)";
      })
});
/* action-place -end*/

    const toggleContainer = document.querySelectorAll(".notification-box");
      toggleContainer.forEach((element)=>{
       element.addEventListener("click", () => {
        element.style.backgroundColor="white";
      })
});

})