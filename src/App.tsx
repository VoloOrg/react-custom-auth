import { Box } from '@mui/material'
import MuiThemeProvider from 'mui/Provider'
import Router from 'routes/RouterProvider'
import { StoreProvider } from 'store/Provider'

function App() {
  return (
    <StoreProvider>
      <MuiThemeProvider>
        <Box display="flex" height="100dvh" alignItems="center" justifyContent="center">
          <Box color="primary.main" width="100%" maxWidth={600}>
            <Router />
          </Box>
        </Box>
      </MuiThemeProvider>
    </StoreProvider>
  )
}

export default App
