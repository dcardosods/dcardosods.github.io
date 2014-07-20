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
                Daniel Cardoso, desenvolvedor front-end apaixonado por web
                """
            keywords: """
                daniel cardoso, daniel, cardoso, front-end, web, desenvolvimento, html5, css3
                """
            styles: [
                '/vendor/font-awesome.css'
                '/styles/style.css'
            ]
            scripts: []
            nav: [
                    href: '/'
                    text: 'Home'
                    title: 'Ir para a página inicial / Go to home page'
                    excludeFrom: 'index'
                ,
                    href: '/sobre'
                    text: 'Sobre / About'
                    title: 'Sobre Daniel Cardoso / About Daniel Cardoso'
                    excludeFrom: 'page'
            ]
            services:
                googleAnalytics: 'UA-44597517-1'
                disqus: 'danielcardoso-com-br'

        external:
            gravatar: 'http://www.gravatar.com/avatar/671f2bfb88fb1f9d0d77b2d150dae533.png'

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
                        disqus: 'danielcardoso-com-br-development'

}

module.exports = docpadConfig
