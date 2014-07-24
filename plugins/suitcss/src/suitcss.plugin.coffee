# Export Plugin
module.exports = (BasePlugin) ->
    # Define Plugin
    class SuitCss extends BasePlugin
        # Plugin name
        name: 'suitcss'

        # Render
        # Called per document, for each extension conversion. Used to render one extension to another.
        render: (opts) ->
            # Prepare
            {inExtension, outExtension} = opts

            # SUIT CSS
            if inExtension in ['suitcss'] and outExtension in ['css',null]
                # Require dependencies
                rework = require('rework')
                suit = require('rework-suit')

                # Render synchronously
                opts.content = rework(opts.content).use(suit({})).toString();

            # Done
            return