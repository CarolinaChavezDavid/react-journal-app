import { TurnedInNot } from '@mui/icons-material'
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const SideBar = ({drawerWidth = 240 }) => {
  return (
    <Box
        component='nav'
        sx={{width:{ sm: drawerWidth }, flexShrink: { sm: 0 }}}
    >

        <Drawer
            variant='permanent'
            open
            sx={{
                display: { xs: 'block' },
                '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth }
            }}
        >
            <Toolbar variant='h6' component='div'>
                <Typography>
                    Carolina
                </Typography>
            </Toolbar>
            <Divider />

            <List>
                {
                    ['January', 'February', 'March', 'April', 'May'].map(text =>(
                        <ListItem key={ text } disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                            </ListItemButton>
                            <Grid container>
                                <ListItemText primary={text}/>
                                <ListItemText secondary={'fadfagf'}/>
                            </Grid>

                        </ListItem>
                    ))
                }
            </List>

        </Drawer>
    </Box>
  )
}
