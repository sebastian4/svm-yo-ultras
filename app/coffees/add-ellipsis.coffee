# jquery plugin in coffescript
do ($ = jQuery) ->

  $.fn.addEllipsis = (options) ->

    config =
      property: 'value'

    $.extend(config, options) if (options)

    debug = (x) -> console.debug(x)

    @each ->
      $(this).html $(this).html()+" ... "+config.property
      debug(this)
