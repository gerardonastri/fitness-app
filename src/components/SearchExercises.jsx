import React, {useEffect, useState} from 'react';
import {Box, Button, Stack, TextField, Typography} from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar'

import {exercisesOptions, fetchData} from '../util/apiCalls'


const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([])

  

  useEffect(() => {
    const getExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exercisesOptions)
      setBodyParts(['all', ...bodyPartsData])
    }
    getExercisesData()
  }, [])

  const handleSearch = async () => {
    if(search.length > 0){
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exercisesOptions)
      const searchedExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      )
      setSearch('');
      setExercises(searchedExercises);
    }
  }

  

  return (
    <Stack alignItems={'center'} mt="37px" justifyContent={"center"} p="20px">
      <Typography fontWeight={700} sx={{fontSize: {lg: '43px', xs:"30px"}}} mb="50px" textAlign={'center'}>
        Awesome Exercises You <br /> 
        Should now
      </Typography>
      <Box position={'relative'} mb="72px">
        <TextField 
        sx={{
          input: {fontWeight: '700', border: 'none', borderRadius: '4px'},
          width: {lg: '800px', xs: '350px'},
          backgroundColor: '#fff',
          borderRadius: '40px'
        }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
          
        />
        <Button onClick={handleSearch} className='search-btn' sx={{backgroundColor: '#FF2625', color: '#fff', textTransform: 'none', width: {lg: '175px', xs: '80px'}, fontSize: {lg: '20px', sx: '14px'}, height: '56px', position: 'absolute', right: '0'}}>
          Search
        </Button>
      </Box>
      <Box sx={{position: 'relative', width: '100%', p: "20px"}}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts={true} />
      </Box>
    </Stack>
  )
}

export default SearchExercises