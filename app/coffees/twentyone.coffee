
console.log "twentyone.coffee"

$('#ellip1').addEllipsis { property: 'uno' }

if jQuery.ui
  console.log "jquery ui is loaded, "+jQuery.ui.version

greeny =  $('.gtarget').green5()

$('#g-darker').click ->
  console.log "darker"
  greeny.green5 'darker'

$('#g-lighter').click ->
  console.log "lighter"
  greeny.green5 'lighter'
