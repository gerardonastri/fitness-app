import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
  return (
    <Box sx={{mt: {lg: '100px', xs: '0'}}}> 
      <Typography variant="h3" mb={4}>
        Exercises that target the same muscle group
      </Typography>
      <Stack direction='row' sx={{p: '2', position: 'relative'}} mb={5}>
        {targetMuscleExercises?.length 
          ? <HorizontalScrollbar data={targetMuscleExercises} />
          : <Loader />
        }
      </Stack>
      <Typography variant="h3" mb={4}>
        Exercises that use the same equipment
      </Typography>
      <Stack direction='row' sx={{p: '2', position: 'relative'}}>
        {equipmentExercises?.length 
          ? <HorizontalScrollbar data={targetMuscleExercises} />
          : <Loader />
        }
      </Stack>
    </Box>
  )
}

export default SimilarExercises