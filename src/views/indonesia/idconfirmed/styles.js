export const styles = theme => ({
  title: {
    marginLeft: 1,
  },
  bold: {
    fontWeight: 800,
  },
  box: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  h2: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: 300,
    fontSize: "3.35rem",
    lineHeight: 1.2,
    letterSpacing: "-0.00833em",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.125rem",
      lineHeight: 1.2,
      letterSpacing: "-0.00833em"
    }
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
  h6: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: 800,
    fontSize: "1.15rem",
    lineHeight: 1.6,
    letterSpacing: "0.0075em"
  },
  body2: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: 400,
    fontSize: "0.845rem",
    lineHeight: 1.43,
    letterSpacing: "0.01071em",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.72rem",
      lineHeight: 1.66,
      letterSpacing: "0.03333em"
    }
  },
  overline: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: 400,
    fontSize: "0.72rem",
    lineHeight: 2.23,
    letterSpacing: "0.08333em"
  },
  newcase: {
    marginLeft: 7,
    marginTop: -13,
    color: '#FF8E53',
    fontWeight: 800
  },
  mark: {
    marginLeft: 10,
  },
  mark1: {
    width: 4,
    height: 20,
    marginLeft: 1,
//    backgroundColor: '#ffe4e1'
    backgroundColor: theme.palette.grey[200]
  },
  mark2: {
    width: 3,
    height: 20,
    marginLeft: 1,
    backgroundColor: '#eebfbf'
  },
  mark3: {
    width: 3,
    height: 20,
    marginLeft: 1,
    backgroundColor: '#cc9bb3'
  },
  mark4: {
    width: 3,
    height: 20,
    marginLeft: 1,
    backgroundColor: '#a3739a'
  },
  mark5: {
    width: 3,
    height: 20,
    marginLeft: 1,
    backgroundColor: '#7c4c7a'
  }
})