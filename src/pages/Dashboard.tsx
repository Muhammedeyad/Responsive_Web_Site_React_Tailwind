import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { AppLayout } from '../layouts/AppLayout'
import Image from './../assets/react.svg'
import Modal from './../components/modal/Modal'

export const Dashboard:React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  return (
<Stack>
<AppLayout/>
<Stack  sx={{display:'flex', flexWrap:'wrap', flexDirection: {xs:'col', sm:'row', lg:'row'}, mt:12}} justifyContent={'space-between'} gap={5} px={3}> 
  <Box onClick={()=> handleOpen()} flex={1} bgcolor={'green '} p={3} sx={{borderRadius:'1rem'}}>
    <img src={Image} alt="" width={100}/>
    <Typography color='lightgreen'>Extracted Content</Typography>
  </Box>
  <Box flex={1} bgcolor={'green '} p={3} sx={{borderRadius:'1rem'}}>
    <img src={Image} alt="" width={100}/>
    <Typography color='lightgreen'>Extracted Content</Typography>
  </Box>
  <Box flex={1} bgcolor={'green '} p={3} sx={{borderRadius:'1rem'}}>
    <img src={Image} alt="" width={100}/>
    <Typography color='lightgreen'>Extracted Content</Typography>
  </Box>
  <Box flex={1} bgcolor={'green '} p={3} sx={{borderRadius:'1rem'}}>
    <img src={Image} alt="" width={100}/>
    <Typography color='lightgreen'>Extracted Content</Typography>
  </Box>
  <Box flex={1} bgcolor={'green '} p={3} sx={{borderRadius:'1rem'}}>
    <img src={Image} alt="" width={100}/>
    <Typography color='lightgreen'>Extracted Content</Typography>
  </Box>
  <Box flex={1} bgcolor={'green '} p={3} sx={{borderRadius:'1rem'}}>
    <img src={Image} alt="" width={100}/>
    <Typography color='lightgreen'>Extracted Content</Typography>
  </Box>
</Stack>
<Modal handleClose={handleClose} open={open}/>
</Stack>
  )
}
