import Appbar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { Typography, Box, Button } from '@mui/material'

export const AppLayout: React.FC = () => {
  const pages = ['Home', 'Collections', 'About us'];


  return (
    <Appbar>
      <Toolbar sx={{ backgroundColor: 'green', justifyContent: 'space-between' }}>
       
          <Typography >
            Economist
          </Typography>
     
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Button
              key={page}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              {page}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </Appbar>
  )
}
