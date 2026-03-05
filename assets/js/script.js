    const aPropos = document.getElementById("pageAPropos");
    const boutonAPropos = document.getElementById("boutonAPropos");
    const croixAPropos = document.getElementById("croixAPropos");

    const projet = document.getElementById("pageProjet");
    const boutonProjet = document.getElementById("boutonProjet");
    const croixProjet = document.getElementById("croixProjet");

    const contact = document.getElementById("pageContact");
    const boutonContact = document.getElementById("boutonContact");
    const croixContact = document.getElementById("croixContact")






boutonAPropos.onclick = function() {
    aPropos.classList.add("afficher");
}
croixAPropos.onclick = function() {
    aPropos.classList.remove("afficher");
}
boutonProjet.onclick = function() {
    projet.classList.add("afficher");
}
croixProjet.onclick = function() {
    projet.classList.remove("afficher");
}
boutonContact.onclick = function() {
    contact.classList.add("afficher");
}
croixContact.onclick = function() {
    contact.classList.remove("afficher");
}


