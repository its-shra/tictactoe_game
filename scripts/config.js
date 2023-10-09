function openPlayerConfig(event){
    editedPlayer=+event.target.dataset.playerid;  //+"1"=1
    playerConfigOverlayElement.style.display = "block";
    backdropElement.style.display = "block";
}

function closePlayerConfig(){
    playerConfigOverlayElement.style.display="none";
    backdropElement.style.display = "none";
    errorsOutputElement.textContent="";
    formElement.firstElementChild.lastElementChild.value="";
    const removeErrorElement=document.getElementById("form-control-id");
    removeErrorElement.classList.remove("error");
}

function savePlayerConfig(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayername=formData.get("playername").trim(); //"      Shra Patil      " => "Shra Patil"
    // console.log(enteredPlayername);

    //adding requirements
    if(!enteredPlayername){  //enteredPlayername === ""
        // alert("Enter A Player name");
        event.target.firstElementChild.classList.add("error");//firstElementChild => selects the first child of the element //classList.add("xyz") => adds a temporary class to that element // 
        errorsOutputElement.textContent="Please enter a valid name!"; //textContent helps in setting the text it the element to be displayed
        return; //we stop the execution
    }

    const updatedPlayerDataElement = document.getElementById("player-"+editedPlayer+"-data");
    updatedPlayerDataElement.children[1].textContent=enteredPlayername;

    // if(editedPlayer===1){
    //     players[0].namae=enteredPlayername;
    // }
    // else{
    //     players[1].namae=enteredPlayername;
    // }
    players[editedPlayer-1].name=enteredPlayername;

    closePlayerConfig();
}    