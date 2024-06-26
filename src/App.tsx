import { Box } from '@mui/material'
import MuiThemeProvider from 'mui/Provider'
import Router from 'routes/RouterProvider'
import { StoreProvider } from 'store/Provider'

function App() {
  return (
    <StoreProvider>
      <MuiThemeProvider>
        <Box display="flex" height="100dvh" alignItems="center" justifyContent="center">
          <Box color="primary.main" width="100%" boxSizing="border-box" padding="40px" maxWidth={700}>
            <Router />
          </Box>
        </Box>
      </MuiThemeProvider>
    </StoreProvider>
  )
}

export default App
