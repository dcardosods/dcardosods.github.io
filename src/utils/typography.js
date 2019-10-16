import Typography from 'typography'
import doelgerTheme from 'typography-theme-doelger'

doelgerTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  body: {
    // maxWidth: `960px`,
    // margin: `0 auto`,
    // marginTop: rhythm(1.5),
    // marginBottom: rhythm(0.5),
    // padding: `0 ${rhythm(1)}`,
  },
})

const typography = new Typography(doelgerTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
