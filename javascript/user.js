class User {
    constructor(firstname, lastname) {

        if(firstname) {
            this.firstname = firstname
            this.lastname = lastname
            this.saveInformations()
        }
        else if (this.hasInformation()) {
            let informations = this.returnInformations()
            this.firstname = informations.firstname
            this.lastname = informations.lastname
        }
        else {
            this.firstname = ""
            this.lastname = ""
        }
        document.getElementById("form34").value = this.firstname
        document.getElementById("form29").value = this.lastname
        
    }
    saveInformations() {
        localStorage.setItem("name", JSON.stringify({
            firstname : this.firstname,
            lastname : this.lastname
        }))
    }
    returnInformations() {
        return JSON.parse(localStorage.getItem("name"))     
    }
    hasInformation() {
        return (localStorage.getItem("name") !== null)
            
    }
}