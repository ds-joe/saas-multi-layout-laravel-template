import colors from "~tailwind/custom/colors"

export default {
  fixedColor: colors.primary.secondary,
  colors: [colors.primary.secondary, colors.success.secondary, colors.danger.secondary],
  gradient: [colors.primary.DEFAULT, colors.primary.secondary],
  light: {
    labels: {
      colors: '#616161'
    },
    grid: {
      borderColor: '#dddddd'
    }
  },
  dark: {
    labels: {
      colors: '#616161'
    },
    grid: {
      borderColor: '#dddddd'
    }
  }
}
