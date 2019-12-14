import { darken, lighten } from 'polished'
const spacingBase = 1
const spacingUnit = 'rem'

const colorPrimary = '#edb058'
const colorSecondary = '#e7ede4'

export default {
  spacing: {
    xs: `${spacingBase * 0.5}${spacingUnit}`,
    s: `${spacingBase * 0.75}${spacingUnit}`,
    m: `${spacingBase}${spacingUnit}`,
    l: `${spacingBase * 1.25}${spacingUnit}`,
    xl: `${spacingBase * 1.5}${spacingUnit}`,
  },
  color: {
    primary: colorPrimary,
    primaryDark: darken(0.3, colorPrimary),
    primaryLight: lighten(0.3, colorPrimary),
    secondary: colorSecondary,
    secondaryDark: darken(0.3, colorSecondary),
    secondaryLight: lighten(0.3, colorSecondary),
  }
}