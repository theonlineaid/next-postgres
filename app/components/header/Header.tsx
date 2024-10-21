import { Box, Typography } from '@mui/material'
import React from 'react'
import AccountMenu from '../nav/AccountMenu'

const SpaceBetween = {
    display: 'flex', alignItems: "center", justifyContent: "space-between"
}



export default function Header() {
    return (
        <header>
            <Box sx={SpaceBetween}>
                <Typography>Logo goes here</Typography>
                <Box>
                    <AccountMenu />
                </Box>
            </Box>
        </header>
    )
}