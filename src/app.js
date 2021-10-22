$(window).on('resize', () => {
    let win = $(this);
    if( win.width() <= 800 ){
      $('#git-icon').removeClass('fa-5x');
      $('#git-icon').addClass('fa-2x')
    }
    
    if( win.width() > 800 ){
      $('#git-icon').removeClass('fa-2x')
      $('#git-icon').addClass('fa-5x');
    }
    
});

if( $(window).width() <= 800 ){
  $('#git-icon').removeClass('fa-5x');
  $('#git-icon').addClass('fa-2x');
}
if( $(window).width() <= 961 ){
  let navHeight = $('#navbar').height();
  $('ul').css('top', navHeight.toString() + 'px');
  $('.nav-link').click( () => {
    $('ul').slideToggle(200, "linear", () => {});
  })
}

$('#toggle').click( () => {
  if( $(window).width() < 962){
    $('ul').slideToggle(200, "linear", () => {});
  }
  else{
    return false
  }
});
