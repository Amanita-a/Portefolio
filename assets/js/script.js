    const aPropos = document.getElementById("pageAPropos");
    const boutonAPropos = document.getElementById("boutonAPropos");
    const croixAPropos = document.getElementById("croixAPropos");

    const projet = document.getElementById("pageProjet");
    const boutonProjet = document.getElementById("boutonProjet");
    const croixProjet = document.getElementById("croixProjet");

    const contact = document.getElementById("pageContact");
    const boutonContact = document.getElementById("boutonContact");
    const croixContact = document.getElementById("croixContact")






boutonAPropos.addEventListener("click", () =>{
    aPropos.classList.add("afficher");
});
croixAPropos.addEventListener("click", () =>{
    aPropos.classList.remove("afficher");
});
document.addEventListener("click", (event) => {

    if (!aPropos.contains(event.target) && 
        !boutonAPropos.contains(event.target)) {

        aPropos.classList.remove("afficher");
    }

});

boutonProjet.onclick = function() {
    projet.classList.add("afficher");
}
croixProjet.onclick = function() {
    projet.classList.remove("afficher");
}
boutonContact.addEventListener("click", () =>{
    contact.classList.add("afficher");
});
croixContact.addEventListener("click", () =>{
    contact.classList.remove("afficher");
});


