
console.log "twenty.coffee"

class Banner
  div: ->
    #$('<div id="banner"></div>').appendTo('body')
    $('body').prepend('<div id="banner" class="twenty"></div>')

  head: ->
    $('<h2 id="title">Welcome</h2>').appendTo('#banner')

class Content
  div: ->
    $('<div id="content" class="twenty"></div>').appendTo('body')

  text: ->
    $('<p>This is some text.</p>').appendTo('#content')
    $('<p>This is some more text.</p>').appendTo('#content')

class Footer
  div: ->
    $('<div id="footer" class="twenty"></div>').appendTo('body')

  copyright: ->
    $('<p>&copy 2014 sebastian</p>').appendTo('#footer')

banner = new Banner
content = new Content
footer = new Footer

banner.div()
banner.head()

content.div()
content.text()

footer.div()
footer.copyright()
