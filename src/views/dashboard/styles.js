export const styles = theme => ({
  butt: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  appBar: {
    position: 'relative',
  },
  main: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  content: {
    flexGrow: 1,
    overflow: 'auto',
    marginBottom: theme.spacing(2),
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: theme.spacing(1),
    backgroundColor: theme.palette.grey[100],
  },
  midcontainer: {
    paddingTop: theme.spacing(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  titlebox: {
    borderBottom: '1px solid',
    marginBottom: theme.spacing(2),
    borderBottomColor: theme.palette.grey[300]
  },
  txtcenter: {
    alignSelf: 'center'
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
//    backgroundColor:
//      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
  bold: {
    fontWeight: 600,
    color: 'black'
  },
  h2: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: 300,
    fontSize: "3.35rem",
    lineHeight: 1.2,
    letterSpacing: "-0.00833em"
  },
  h4: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: 400,
    fontSize: "1.125rem",
    lineHeight: 1.235,
    letterSpacing: "0.00735em"
  },
  h5: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: 400,
    fontSize: "1.4rem",
    lineHeight: 1.334,
    letterSpacing: "0em"
  },
  h6: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: 500,
    fontSize: "1.15rem",
    lineHeight: 1.6,
    letterSpacing: "0.0075em"
  },
  subtitle1: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: 400,
    fontSize: "0.95rem",
    lineHeight: 1.75,
    letterSpacing: "0.00938em"
  },
  subtitle2: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: 500,
    fontSize: "0.845rem",
    lineHeight: 1.57,
    letterSpacing: "0.00714em"
  },
  body1: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: 400,
    fontSize: "0.95rem",
    lineHeight: 1.5,
    letterSpacing: "0.00938em"
  },
  body2: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: 400,
    fontSize: "0.845rem",
    lineHeight: 1.43,
    letterSpacing: "0.01071em"
  },
  caption: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: 400,
    fontSize: "0.72rem",
    lineHeight: 1.66,
    letterSpacing: "0.03333em"
  }
})