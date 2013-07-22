# Requires
moment = require('moment')
moment.lang('pt-br')  # set locale to brazilian portuguese

# DocPad Configuration
docpadConfig = {

    # =================================
    # Template Configuration

    # Template Data
    # Use to define your own template data and helpers that will be accessible to your templates
    # Complete listing of default values can be found here: http://docpad.org/docs/template-data
    templateData:  # example

        # Specify some site properties
        site:
            # The production url of our website
            url: "http://danielcardoso.com.br"

            # The default title of our website
            title: "Daniel Cardoso"

            # Author of website
            author: "Daniel Cardoso"

            # The website description (for SEO)
            description: """
                Daniel Cardoso, desenvolvedor front-end apaixonado por web
                """

            # The website keywords (for SEO) separated by commas
            keywords: """
                daniel cardoso, daniel, cardoso, front-end, web, desenvolvimento, html5, css3
                """

            # Styles
            styles: [
                "/vendor/font-awesome.css"
                "/styles/style.css"
            ]

            # Scripts
            scripts: [
                "/vendor/jquery.js"
                "/scripts/script.js"
            ]

            # Navigation
            nav: [
                    href: "/"
                    text: "Home"
                    title: "Ir para a página inicial"
                    excludeFrom: "index"
                ,
                    href: "//about.me/dcardosods/"
                    text: "Sobre"
                    title: "Sobre Daniel Cardoso"
                    external: true
            ]

            # Services
            services:
                googleAnalytics: 'UA-39634419-1'

        # Config from external services
        external:
            # Gravatar image url
            gravatar: "http://www.gravatar.com/avatar/671f2bfb88fb1f9d0d77b2d150dae533.png"

        # Environments
        environments:
            # Development environment
            development:
                templateData:
                    site:
                        services:
                            googleAnalytics: false

        # -----------------------------
        # Helper Functions

        # Get the prepared site/document title
        # Often we would like to specify particular formatting to our page's title
        # we can apply that formatting here
        getPreparedTitle: ->
            # if we have a document title, then we should use that and suffix the site's title onto it
            if @document.title
                "#{@document.title} | #{@site.title}"
            # if our document does not have it's own title, then we should just use the site's title
            else
                @site.title

        # Get the prepared site/document description
        getPreparedDescription: ->
            # if we have a document description, then we should use that, otherwise use the site's description
            @document.description or @site.description

        # Get the prepared site/document keywords
        getPreparedKeywords: ->
            # Merge the document keywords with the site keywords
            @site.keywords.concat(@document.keywords or []).join(', ')

        # Format the passed date, by default format like: Thursday, November 29 2012 3:53 PM
        formatDate: (date, format = 'DD/MM/YYYY') -> moment(date).format(format)

}

# Export the DocPad Configuration
module.exports = docpadConfig
