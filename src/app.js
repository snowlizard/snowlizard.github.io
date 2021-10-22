$(window).on('resize', () => {
    let win = $(this);
    if( win.width() <= 961 ){
      $('#git-icon').removeClass('fa-5x');
      $('#git-icon').addClass('fa-2x');
      $('#toggle').css('opacity', 1);
      //--------------- nav bar adjustment
      let navHeight = $('#navbar').height();
      $('ul').css('top', navHeight.toString() + 'px');
      $('.nav-link').click( () => {
        $('ul').slideToggle(200, "linear", () => {});
      })
    }
    
    if( win.width() > 961 ){
      $('#git-icon').removeClass('fa-2x');
      $('#git-icon').addClass('fa-5x');
      $('#toggle').css('opacity', 0);
    }
    
});

if( $(window).width() <= 800 ){
  $('#git-icon').removeClass('fa-5x');
  $('#git-icon').addClass('fa-2x');
}
// SET UL TO HEIGHT OF NAVBAR
if( $(window).width() <= 961 ){
  let navHeight = $('#navbar').height();
  $('ul').css('top', navHeight.toString() + 'px');
  $('.nav-link').click( () => {
    $('ul').slideToggle(200, "linear", () => {});
  })
}
// IF WINDOW IS >= 962 MAKE #TOGGLE NOT VISIBLE
if( $(window).width() >= 962 ){
  $("#toggle").css('opacity', 0);
}

// TOGGLE MOBILE MENU DROP DOWN
$('#toggle').click( () => {
  if( $(window).width() < 962){
    $('ul').slideToggle(200, "linear", () => {});
  }
  else{
    return false
  }
});
