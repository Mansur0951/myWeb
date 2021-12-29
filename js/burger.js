// window.addEventListener('DOMContentLoaded', () => {
//   document.querySelector('.mobile-burger').addEventListener('click', function() {
//     document.querySelector('.mobile-burger').classList.toggle('active')
//   })
// })

$(document).ready(function() {
  $('.mobile-burger').click(function(event) {
      $('.mobile-burger, .mobile__nav').toggleClass('active')
  })
})
