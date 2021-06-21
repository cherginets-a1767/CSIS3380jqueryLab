

$(document).ready(() => {
    $('#cart').on('click', () => {
       $('#cartMenu').show();
    });
    $('#cartMenu').on('mouseleave', () => {
       $('.dropdown-menu').hide();
    // $('#cartMenu').hide();
    });

    $('#account').on('click', () => {
       $('#accountMenu').show();      
    });
    $('#accountMenu').on('mouseleave', () => {
        $('.dropdown-menu').hide();
        // $('#accountMenu').hide();
     });

    $('#help').on('click', () => {
       $('#helpMenu').show();
    });
    $('#helpMenu').on('mouseleave', () => {
        $('.dropdown-menu').hide();
        // $('#helpMenu').hide();
     });
})