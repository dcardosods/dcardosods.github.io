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
            {inExtension, outExtension, file} = opts

            # SUIT CSS
            if inExtension in ['suitcss'] and outExtension in ['css',null]
                # Require dependencies
                rework = require('rework')
                suit = require('rework-suit')
                inlinerOptions = {
                    root: './src/documents/styles'
                }

                # Add Reference Others if this document does
                # As lesscss concats imports
                file.setMetaDefaults('referencesOthers': true) if opts.content.indexOf('@import') isnt -1

                # Render synchronously
                opts.content = rework(opts.content).use(suit(inlinerOptions)).toString();

            # Done
            return