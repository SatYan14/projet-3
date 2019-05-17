class Carousel {
    constructor() {
        // Définition de différentes propriétés nécessaires à l'usage du carousel.
        this.slideIndex = 3;
        this.nextButton = $('#next')
        this.previousButton = $('#previous')
        this.pauseButton = $('#pause')
        this.playButton = $('#play')
        this.playButton.on('click', () => {
            this.autoPlaying = setInterval(() => {
                this.nextSlider()
                this.displayActive()
            }, 5000)
            this.displayMyPauseButton()
        })
        // Ecoute du clic sur le bouton "pause"
        this.pauseButton.on('click', () => {
            clearInterval(this.autoPlaying)
            this.displayMyPlayButton()
        })
        // Ecoute du clic sur le bouton "précédent"
        this.previousButton.on('click', () => {
            this.previousSlider()
            this.displayActive()
        })
        // Ecoute du clic sur le bouton "suivant"
        this.nextButton.on('click', () => {
            this.nextSlider()
            this.displayActive()
        })
        // SetInterval permettant la lecture automatique du carousel
        this.autoPlaying = setInterval(() => {
            this.nextSlider()
            this.displayActive()
        }, 5000)
        // Event listener des touches du clavier
        $(document).keydown(() => {
            this.keyBoard(event)
            this.displayActive()
        })
    }
    // Selon la class "active", permet d'afficher la bonne image du carousel.
    displayActive() 
    {
        $('.carousel-container img').css({
            "display" : "none"
        })
        $('.active').css({
            "display" : "block"
        })
        
    }
    // Fonction permettant d'avancer dans le carousel
    nextSlider() 
    {
        if(this.slideIndex === 3)
        {
            $('.carousel-container img').eq(this.slideIndex).removeClass("active")
            this.slideIndex = 0
            $('.carousel-container img').eq(this.slideIndex).addClass("active")
        }
        else
        {
            $('.carousel-container img').eq(this.slideIndex).removeClass("active")
            this.slideIndex++
            $('.carousel-container img').eq(this.slideIndex).addClass("active")
            
        }
    }
// Fonction permettant de reculer dans le carousel.
    previousSlider()
    {
        if(this.slideIndex === 0)
        {
            $('.carousel-container img').eq(this.slideIndex).removeClass("active")
            this.slideIndex = 3
            $('.carousel-container img').eq(this.slideIndex).addClass("active")
        }
        else
        {
            $('.carousel-container img').eq(this.slideIndex).removeClass("active")
            this.slideIndex--
            $('.carousel-container img').eq(this.slideIndex).addClass("active")
            
        }
    }

// Fonctions permettant de, selon le bouton présent, proposer le bouton play ou pause.

    displayMyPlayButton() {
        $('#pause').css({
            "display" : "none"
        })
        $('#play').css({
            "display" : "block"
        })
    }
    displayMyPauseButton() {
        $('#pause').css({
            "display" : "block"
        })
        $('#play').css({
            "display" : "none"
        })
    }

// Fonction keyBoard permettant de récupérer les touches flèches gauche et droite du clavier.

    keyBoard(event) {
        if(event.keyCode == 39) {
            this.nextSlider()
        }
        else if (event.keyCode == 37) {
            this.previousSlider()
        }
    }
}
