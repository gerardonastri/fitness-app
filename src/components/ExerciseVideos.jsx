import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const ExerciseVideos = ({exerciseVideos, name}) => {

  if(!exerciseVideos.length) return 'Loading'
  return (
    <Box sx={{marginTop: {lg: '200px', xs: '20px'}}} p="20px">  
      <Typography variant='h3' mb="33px">
        Watch <span style={{color: '#ff2625', textTransform: 'capitalize'}}>{name}</span> exercise videos
      </Typography>
      <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px' } }} justifyContent="flex-start" flexWrap="wrap" alignItems="center">
      {exerciseVideos?.slice(0,3).map((item, index) => (
        <a href={`https://www.youtube.com/watch?w=${item.video.videoId}`} key={index} target="_black" rel="norefferrer">
          <img src={item.video.thumbnails[0].url} alt="" />
          <Box>
            <Typography variant="h5" color="#000">
              {item.video.title}
            </Typography>
            <Typography variant="h5" color="#000">
              {item.video.channelName}
            </Typography>
          </Box>
        </a>
      ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos