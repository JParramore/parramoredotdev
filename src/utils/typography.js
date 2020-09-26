import Typography from "typography"
import funstonTheme from 'typography-theme-funston'

funstonTheme.overrideThemeStyles = ({ rhythm }, options, styles) => ({
  'h1': {
    marginBottom: rhythm(1),
    marginTop: rhythm(2),
    color: "#6d94de",
  },
  'h2': {
    marginBottom: rhythm(1/2),
    marginTop: rhythm(2),
    color: "#6d94de",
  },
  'h3': {
    marginBottom: rhythm(1/2),
    marginTop: rhythm(1.5),
    color: "#99b4e8",
  }
})

funstonTheme.headerFontFamily = ['Roboto', 'sans-serif']
funstonTheme.bodyFontFamily = ['Roboto', 'sans-serif']
funstonTheme.headerWeight = '600'
funstonTheme.baseFontSize = '16px'
funstonTheme.scaleRatio = 1.8
funstonTheme.googleFonts = [
  {
    name: 'Roboto',
    styles: [
      '300',
      '400',
      '500',
      '600',
      '700'
    ],
  },
  {
    name: 'Roboto Mono',
    styles: [
      '300',
      '400',
      '500',
      '600',
      '700'
    ],
  },
]


const typography = new Typography(funstonTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
