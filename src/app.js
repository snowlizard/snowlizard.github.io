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
    
  })