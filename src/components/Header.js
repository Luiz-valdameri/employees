import React from 'react'
import { AppBar, Box, Toolbar, Typography } from '@material-ui/core';

export default function Header() {
    return (
        <AppBar
            position="fixed"
            color="primary"
        >
            <Toolbar>
                <Box width="100%" display="flex" justifyContent="center">
                    <Typography variant="h4">
                        EMPLOYEE
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
