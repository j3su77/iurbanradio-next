import { createTheme } from '@mui/material/styles';
import { red,  } from '@mui/material/colors';


export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: red[500]
    },
    secondary: {
      main: '#3A64D8'
    },
    info: {
      main: '#fff'
    }
  
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
        color: "white"
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        position: 'fixed',
      },
      styleOverrides: {
        root: {
          height: 60,
          color:"white"
        },
      },
      
    },

    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: 30,
          fontWeight: 600,
          color: "white"
        },
        h2: {
          fontSize: 20,
          fontWeight: 400,
          color: "white"

        },
        subtitle1: {
          fontSize: 18,
          fontWeight: 600,
          color: "white"

        }
      }
    },


    MuiButton: {
      defaultProps: {
        variant: 'contained',
        size: 'small',
        disableElevation: true,
        
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          boxShadow: 'none',
          borderRadius: 10,
          color: 'white',
          ":hover": {
            backgroundColor: 'rgba(0,0,0,0.05)',
            transition: 'all 0.3s ease-in-out'
          }
        }
      }
    },


    MuiCard: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        root: {
          boxShadow: '0px 5px 5px rgba(0,0,0,0.05)',
          borderRadius: '10px',
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "white"
        }
      }
    }
   
    
  }
});