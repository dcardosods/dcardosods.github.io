moment = require('moment')
moment.lang('pt-br')

# DocPad Configuration
docpadConfig = {

    #
    # Site data

    templateData:

        #
        # Properties

        site:
            url: 'http://danielcardoso.com.br'
            title: 'Daniel Cardoso'
            author: 'Daniel Cardoso'
            description: """
                Daniel Cardoso, Front-end Developer
                """
            keywords: """
                daniel cardoso, daniel, cardoso, front-end, web, html5, css3, javascript
                """
            styles: ['/styles/style.css']
            scripts: []

            # Services plugin
            services:
                googleAnalytics: 'UA-44597517-1'
                disqus: 'danielcardoso-com-br'

        #
        # Helpers

        getPreparedTitle: ->
            if @document.title
                "#{@document.title} | #{@site.title}"
            else
                @site.title

        getPreparedDescription: ->
            @document.description or @site.description

        getPreparedKeywords: ->
            @site.keywords.concat(@document.keywords or []).join(', ')

        formatDate: (date, format = 'DD/MM/YYYY') -> moment(date).format(format)

    #
    # Collections

    collections:
        posts: ->
            @getCollection('html').findAllLive({relativeDirPath: 'posts'}, [{date: -1}]).on 'add', (model) ->
                model.setMetaDefaults({layout: 'post'})

    #
    # Environments

    environments:
        development:
            templateData:
                site:
                    services:
                        googleAnalytics: false
                        disqus: false

}

module.exports = docpadConfig
