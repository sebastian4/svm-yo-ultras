$.widget "ui.green5",

  options: level: 15, greenlevels: ['#000','#010','#020','#030','#040','#050','#060','#070','#080','#090','#0a0','#0b0','#0c0','#0d0','#0e0','#0f0', '#fff']

  _init: -> @setLevel this.getLevel() # grab the default value and use it

  getLevel: -> @options.level

  setLevel: (x) ->
    greenlevels = @options.greenlevels;
    level = Math.floor Math.min greenlevels.length-1, Math.max 0,x
    @options.level = level
    @element.css background: greenlevels[level]
    @_trigger 'change', 0, level

  darker: -> @setLevel this.getLevel() - 1

  lighter: -> @setLevel this.getLevel() + 1

  off: ->
    @element.css background: 'none'
    @_trigger 'done'
    @destroy() # use the predefined function

