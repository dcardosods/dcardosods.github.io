import Typography from 'typography'
import doelgerTheme from 'typography-theme-doelger'

doelgerTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  main: {
    maxWidth: `960px`,
    margin: `0 auto`,
    marginTop: rhythm(1.5),
    marginBottom: rhythm(0.5),
    padding: `0 ${rhythm(1)}`,
  },
})

const typography = new Typography(doelgerTheme)

export default typography
