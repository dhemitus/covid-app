export const styles = theme => ({
  title: {
    marginLeft: 4,
  },
  bold: {
    fontWeight: 800,
  },
  h4: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: 800,
    fontSize: "2.125rem",
    lineHeight: 1.235,
    letterSpacing: "0.00735em",
    [theme.breakpoints.down("xs")]: {
      fontSize: "3.35rem",
      lineHeight: 1.2,
      letterSpacing: "-0.00833em"
    }
  },
  body2: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: 400,
    fontSize: "0.845rem",
    lineHeight: 1.43,
    letterSpacing: "0.01071em"
  },
  overline: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: 400,
    fontSize: "0.75rem",
    lineHeight: 2.66,
    letterSpacing: "0.08333em"
  },
  newcase: {
    marginLeft: 7,
    marginTop: -13,
    color: '#FE6B8B',
    fontWeight: 800
  }
})