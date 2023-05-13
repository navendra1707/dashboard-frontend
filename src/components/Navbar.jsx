import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import TranslateIcon from '@mui/icons-material/Translate';
import { Avatar, Box, Button, Stack, Typography } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Brightness4Icon from '@mui/icons-material/Brightness4';

const Navbar = () => {
  return (
    <Box
      sx={{
        width: '80%',
        m: '1rem auto',
        p: 2,
        border: '2px solid gray',
        borderRadius: '1rem'
      }}
    >
      <Stack
        direction={'row'}
        gap={1}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Stack
          direction={'row'}
          gap={1}
          alignItems={'center'}
        >
          <Button>
            <SearchIcon />
          </Button>
          <Typography
            style={{color: 'gray'}}
          >Search...</Typography>
        </Stack>
        
        <Stack
          direction={'row'}
          gap={1}
          alignItems={'center'}
        >
          <Button>
            <TranslateIcon />
          </Button>
          <Button>
            <Brightness4Icon />
          </Button>
          <Button>
            <NotificationsNoneIcon />
          </Button>
          <Avatar src='https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F220453%2Fpexels-photo-220453.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-pixabay-220453.jpg%26fm%3Djpg&tbnid=QsatBu9zpFWl5M&vet=12ahUKEwj48cWwivL-AhUfALcAHVtnA5IQMygXegUIARCZAg..i&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fprofile%2F&docid=y7i4Swccn0rqpM&w=3476&h=5214&q=profile%20picture&ved=2ahUKEwj48cWwivL-AhUfALcAHVtnA5IQMygXegUIARCZAg'/>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Navbar