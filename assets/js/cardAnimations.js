export function cardHoverIn() {
  $(this).find($('.overlay')).css({"opacity":"1","visibility":"visible"});
  $(this).find($('.overlay .title'))
      .removeClass('animate__fadeOutUp animate__fadeOutDown')
      .addClass('animate__fadeInUp animate__delay-0s animate__animated');
  $(this).find($('.overlay .desc'))
      .removeClass('animate__fadeOutLeft animate__fadeOutRight')
      .addClass('animate__fadeInLeft animate__delay-0s animate__animated');
  $(this).find($('.overlay .date'))
      .removeClass('animate__fadeOutLeft animate__fadeOutRight')
      .addClass('animate__fadeInRight animate__delay-0s animate__animated');
  $(this).find($('.overlay .rate'))
      .removeClass('animate__fadeOutUp animate__fadeOutDown')
      .addClass('animate__fadeInDown animate__delay-0s animate__animated');
  $(this).find($('.cardImage img'))
      .removeClass('animate__zoomOut animate__rotateOut')
      .addClass('animate__zoomIn animate__rotateIn animate__infinite animate__animated');
}

export function cardHoverOut() {
  $(this).find($('.overlay')).css({"opacity":"0","visibility":"hidden"});
  $(this).find($('.overlay .title'))
      .removeClass('animate__fadeInUp animate__fadeInDown')
      .addClass('animate__fadeOutUp animate__delay-0s animate__animated');
  $(this).find($('.overlay .desc'))
      .removeClass('animate__fadeInLeft animate__fadeInRight')
      .addClass('animate__fadeOutLeft animate__delay-0s animate__animated');
  $(this).find($('.overlay .date'))
      .removeClass('animate__fadeInRight animate__fadeInLeft')
      .addClass('animate__fadeOutRight animate__delay-0s animate__animated');
  $(this).find($('.overlay .rate'))
      .removeClass('animate__fadeInDown animate__fadeInUp')
      .addClass('animate__fadeOutDown animate__delay-0s animate__animated');
  $(this).find($('.cardImage img'))
      .removeClass('animate__zoomIn animate__rotateIn animate__infinite')
      .addClass('animate__zoomOut animate__rotateOut animate__animated');
}
