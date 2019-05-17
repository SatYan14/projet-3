class ModeNuit {
    constructor() {
        $('#myonoffswitch').on('click', () => {
            this.turnOnAndOff()
        })
    }
    turnOnAndOff() {
        if ($('#myonoffswitch').is(':checked')) {


            $('#myonoffswitch').attr('checked')
            $('body').css({'color' : 'black'})
            $('li span').css({'color' : 'black'})
            $('body').css({'backgroundColor' : 'white'})
            $('#logo2').css({'display' : 'none'})
            $('#logo').css({'display' : 'block'})
            $('.onoffswitch-label').css({'border' : '2px solid #E3E3E3'})
            $('.onoffswitch-switch').css({'border' : '2px solid #A1A1A1'})
            $('#signature').css({'border' : '1px solid black'})
            $('#content').css({'backgroundColor' : 'white'})
            $('#accept').css({'backgroundColor' : '#24ACDE'})
            $('#accept').css({'border' : '#24ACDE'})
            $('#clear').css({'backgroundColor' : '#24ACDE'})
            $('#clear').css({'border' : '#24ACDE'})
            $('#reservation').css({'backgroundColor' : '#24ACDE'})
            $('.btn').css({'backgroundColor' : '#24ACDE'})
            $('.btn-primary').css({'borderColor' : '#007bff'})
            
        }
        
        else
        
        {
            $('body').css({'backgroundColor' : '#141D26'})
            $('li span').css({'color' : 'white'})
            $('body').css({'color' : '#FF691F'})
            $('#myonoffswitch').removeAttr('checked')
            $('#logo').css({'display' : 'none'})
            $('#logo2').css({'display' : 'block'})
            $('.onoffswitch-label').css({'border' : '2px solid #141D26'})
            $('#content').css({'backgroundColor' : '#312E33'})
            $('#reservation').css({'backgroundColor' : '#243447'})
            $('#reservation').css({'border' : '#243447'})
            $('#accept').css({'backgroundColor' : '#243447'})
            $('#accept').css({'border' : '#243447'})
            $('#clear').css({'backgroundColor' : '#243447'})
            $('#clear').css({'border' : '#243447'})
            $('.btn').css({'backgroundColor' : '#243447'})
            $('.btn-primary').css({'borderColor' : 'rgb(36,52, 71)'})
        }
    }

}