import React from 'react'
import { Box, Typography } from '@mui/material'

export default function Footer() {
    const thisYear = new Date().getFullYear()
    return (
       <footer>
         <Box sx={{ textAlign: "center" }}>
            <Typography variant='h6'>
                OnlineAid ltd {thisYear}
            </Typography>
        </Box>
       </footer>
    )
}