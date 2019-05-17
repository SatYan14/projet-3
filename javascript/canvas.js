
// Canvas orienté objet

class Canvas {
    constructor() {

        // Initialisation des variables nécessaires

        this.blankCanvas = document.getElementById("blank")
        this.canvas = document.getElementById("signature")
        this.ctx = this.canvas.getContext("2d")
        this.ctx.strokeStyle = "#000000"
        this.ctx.lineWidth = 3
        this.paint = false

        // Appel des fonctions nécessaires

        this.canvas.addEventListener("touchstart",() => {
            this.touchStart(event)
        } )
        this.canvas.addEventListener("touchend", () => {
            this.touchEnd()
        })
        this.canvas.addEventListener("touchmove", () => {
            this.touchMove(event)
        })
        this.canvas.addEventListener("touchleave", () => {
            this.touchLeave()
        })

        $(this.canvas).mousedown( () => {
            this.mouseDown()
            this.firstMousePosition(event)
            
        })

        $(this.canvas).mouseleave(() => {
            this.mouseLeave()
        })

        $(this.canvas).mouseup( () => {
            this.mouseUp()
        })

        $(this.canvas).mousemove( (event) => {
            this.currentMousePosition(event)
            this.isDrawing()
        })
        $("#clear, #accept").on('click', () => {
            this.clearCanvas()
        })
        $('#accept').on('click', () => {
            this.checkMyBlankCanvas()
        })

    }

    // Instanciation des fonctions nécessaires

    

    touchStart(event) {
        this.paint = true
        this.rect = this.canvas.getBoundingClientRect()
        this.clientX = event.touches[0].clientX - this.rect.left 
        this.clientY = event.touches[0].clientY - this.rect.top
    }

    touchEnd() {
        this.paint = false
    }

    touchLeave() {
        this.paint = false
    }

    touchMove(event) {
        this.rect = this.canvas.getBoundingClientRect()
        this.currentClientX = event.touches[0].clientX - this.rect.left 
        this.currentClientY = event.touches[0].clientY - this.rect.top
        if(this.paint)
        {
            
            this.ctx.beginPath()
            this.ctx.moveTo(this.clientX, this.clientY)
            this.ctx.lineTo(this.currentClientX, this.currentClientY)
            this.ctx.stroke()
            this.clientX = this.currentClientX
            this.clientY = this.currentClientY
            
        }
    }

    mouseLeave() {
        this.paint = false
    }

    mouseDown() 
    {
        this.paint = true
    }
    mouseUp() 
    {
        this.paint = false
    }

    // Fonction permettant de récupérer la première position de la souris

    firstMousePosition(event) 
    {
        this.rect = this.canvas.getBoundingClientRect()
        this.clientX = event.clientX - this.rect.left 
        this.clientY = event.clientY - this.rect.top  
    }

    // Fonction qui permet de récupérer la position actuelle de la souris

    currentMousePosition(event) 
    {
        this.rect = this.canvas.getBoundingClientRect()
        this.currentClientX = event.clientX - this.rect.left 
        this.currentClientY = event.clientY - this.rect.top 
    }

    // Fonction qui dessine en fonction des 2 positions récupérées
    
    isDrawing() 
    {
        if(this.paint)
        {
            this.ctx.beginPath();
            this.ctx.moveTo(this.clientX, this.clientY);
            this.ctx.lineTo(this.currentClientX, this.currentClientY);
            this.ctx.stroke();
            this.clientX = this.currentClientX
            this.clientY = this.currentClientY
            this.dataURL = this.canvas.toDataURL()
            this.blankDataURL = this.blankCanvas.toDataURL()
           
        }
    }

    checkMyBlankCanvas() {

        if(this.dataURL === this.blankDataURL) {
            alert("Une signature est nécessaire pour la réalisation d'une réservation...")
            $('.jumbotron').css({
                "display" : "none"
            })
        }
        else
        {

        }
    }
    // Fonction qui permet de réinitialiser le canvas.
    
    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height) 
     }
 
}


