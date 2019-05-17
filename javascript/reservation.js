
class Reservation {
    constructor() {
        
        this.completeTimer = 1200
        if (this.hasReservation()) {
            let myReservation = this.returnReservation()
            this.fixTimestamp = myReservation.timestamp
            this.saveStation(myReservation.station, false)
        }
    }
    startTimer() {
        this.fullTimer = setInterval(() => {
            this.timer()
            }, 1000)
        
    }
    saveStation(displayStation, deleteReservation) {
        
        if (deleteReservation) {
            this.deleteReservation()
        }

        this.station = displayStation
        this.fixTimestamp = (this.fixTimestamp)? this.fixTimestamp : Math.round(Date.now() / 1000)
        this.saveInformations()
        this.startTimer()
        $('#adresse').html(this.station.address)
        $('.jumbotron').css({
            "display" : "block"
        })
    }
    deleteReservation() {
        this.fixTimestamp = null
        this.station = null
        sessionStorage.removeItem("reservation")
        clearInterval(this.fullTimer)
    }

    hasReservation() {
        return(sessionStorage.getItem("reservation") !== null)
    }
    returnReservation() {
        return JSON.parse(sessionStorage.getItem("reservation"))
    }

    timer() {
        console.log("hey")
        this.currentTimestamp = Math.round((Date.now() / 1000))
        this.differenceTime = this.currentTimestamp - this.fixTimestamp
        this.printTimer = this.completeTimer - this.differenceTime
        if (this.currentTimestamp >= this.fixTimestamp + this.completeTimer) {
            $('.far').css({
                "display" : "inline"
            })
            $('#endtimer').html('Votre réservation a expiré...')
        this.deleteReservation()
        }
        else
        {
            $('.jumbotron').css({
                "display" : "block"
            })
            $('.jumbotron-container').addClass("swing")

            $('#minutes').html(Math.floor(this.printTimer / 60))
            $('#secondes').html(this.printTimer % 60)
            if(this.printTimer % 60 <= 1) 
            {
                $('#singleSec').html("seconde")
            }
            else
            {
                $('#singleSec').html("secondes")
            }
            if(Math.floor(this.printTimer / 60) <= 1)
            {
              $('#singleMin').html("minute")
            }
            else
            {
                $('#singleMin').html("minutes")
            }
        }
      }
  
      saveInformations() {
        sessionStorage.setItem("reservation", JSON.stringify({
            timestamp :  this.fixTimestamp,
            station : this.station
        }))
    }

    
}



