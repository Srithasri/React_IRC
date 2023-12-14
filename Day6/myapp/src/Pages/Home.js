
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';
import {Paper} from '@mui/material';


const Home=()=>
{
     const Item = styled(Paper)(() => ({   
        textAlign: 'center',
      }));

    return(
        <>
        <Box sx={{flexGrow:1}}>
        <Grid container spacing={2}>
  <Grid item xs={4}>
    <Item sx={{bgcolor:'orange', p:5}}>Hello</Item>
  </Grid>
  <Grid item xs={4}>
    <Item sx={{bgcolor:'blue', p:5}}>World!</Item>
  </Grid>
  <Grid item xs={4} >
    <Item sx={{bgcolor:'green', p:5}}>ok</Item>
  </Grid>
  <Grid item xs={3}>
    <Item sx={{bgcolor:'pink', p:5}}>hi</Item>
  </Grid>
  <Grid item xs={3}>
    <Item sx={{bgcolor:'light green', p:5}}>hi</Item>
  </Grid>
  <Grid item xs={3}>
    <Item sx={{bgcolor:'pink', p:5}}>hi</Item>
  </Grid>
  <Grid item xs={3}>
    <Item sx={{bgcolor:'blue', p:5}}>hi</Item>
  </Grid>
</Grid>
</Box>
</>
    )
}
export default Home;