class App {
    constructor() {
        this.displayStation = {}
        this.firstLocation = [45.767549, 4.832577]
        this.map = L.map('mapid').setView(this.firstLocation, 14.5)
        this.mapLayer = L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png', {
            attribution: '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>',
            minZoom: 1,
            maxZoom: 19
        }).addTo(this.map)
        this.markers = L.markerClusterGroup()
        this.bicycleIcon = L.icon({
            iconUrl: 'images/icon.png',
            iconSize: [70, 70]
        })
        this.ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=5586c25e1defc740aaaf613e0aad53b659be3165", (response) => {
            this.loopLyonJson(response)
            
        })
        this.reservation = new Reservation()
        $('#cancel').on('click', () => {
            this.reservation.deleteReservation()
            location.reload()
        })
        let newUser = new User()
    }

    loopLyonJson(response) {
        
        response.forEach((station) => {
            
            this.Marker = new L.Marker ([station.position.lat, station.position.lng],  {icon: this.bicycleIcon})
            this.markers.addLayer(this.Marker)
            this.Marker.on('click', (e) => {
                this.displayStation = station
                if(this.displayStation.status == "OPEN") 
                {
                    $('#first').html('Ouverte')
                }

                else 
                {
                    $('first').html('Fermée');
                }
            $('#second').html(this.displayStation.available_bikes)
            $('#third').html(this.displayStation.address)
            $('#fourth').html(this.displayStation.available_bike_stands)
            if (this.displayStation.available_bikes == 0) 
            {
                $('#reservation').css({'display' : 'none'})
            }
            else 
            {
                $('#reservation').css({'display' : 'block'})
            }
            
            })
        })
        this.map.addLayer(this.markers);


        // Informations sauvegardées lors du submit du formulaire
        $('.resaForm').on('submit', (e) => {
            e.preventDefault()
            $('#modalContactForm').modal('toggle')
            let firstname = $('#modalContactForm').find(':input')[1].value
            let lastname = $('#modalContactForm').find(':input')[2].value
            this.reservation.saveStation(this.displayStation, true)
            let newUser = new User(firstname, lastname)
            
            
            $('#adresse').html(this.displayStation.address)
            

        })
    }
    
    // Fonction Ajax
    ajaxGet(url, callback) {
        this.req = new XMLHttpRequest()
        this.req.open("GET", url)
        this.req.onloadend = () => {
            callback(JSON.parse(this.req.responseText))
        }
        this.req.addEventListener("error", () => {
            console.error(this.req.status + " " + this.req.statusText + " " + url)
        })
        this.req.send(null)
    }

}

var newUser = new User()

var newApp = new App()

var newCarousel = new Carousel()

var newModeNuit = new ModeNuit()

var newCanvas = new Canvas()



