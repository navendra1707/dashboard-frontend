import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { AVG_RELEVANCE_SOURCE } from '../endpoints';
import CustomizedMenus from '../utils/CustomizedMenus';
import { Box, Card, Stack, Typography } from '@mui/material';
import LineChart from './LineChart';
import Loader from './Loader';

const AvgRelevance = () => {
  const [data, setData] = useState([]);
  const [filterType, setFilterType] = useState('');
  const [filterValue, setFilterValue] = useState(null);
  const {countries, regions, sectors, endYears, topics} = useSelector(state => state.data);
  const [loading, setLoading] = useState(false);

  const fetchData = async (url) => {
    setLoading(true);
    const response = await fetch(url, {
      method: 'GET'
    });

    const data = await response.json();
    setData(data?.data);
    setLoading(false);
  };

  useEffect(() => {
    if(!filterValue && !filterType)fetchData(`${process.env.REACT_APP_BASE_URL}/${AVG_RELEVANCE_SOURCE}`);
    else fetchData(`${process.env.REACT_APP_BASE_URL}/${AVG_RELEVANCE_SOURCE}?filterType=${filterType}&filterValue=${filterValue}`);
  }, [filterType, filterValue]);

  if(loading)return <Loader />

  return (
    <Box
      sx={{ p: 2 }}
    >
      <Card
        sx={{
          width: '45rem',
          height: '60%'
        }}
      >
        <LineChart trace={data} title = {"Average Relevance Of Sources"} />
        <Stack
          direction={'row'}
          gap={2}
          alignItems={'center'}
          justifyContent={'center'}
          sx={{
            m: '1rem 0'
          }}
          flexWrap={'wrap'}
        >
          <Stack
            gap={0.5}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Typography style={{fontWeight: 'bold'}}>Regions</Typography>
            <CustomizedMenus list={regions} setItem={setFilterValue} filter={'region'} setFilterType = {setFilterType} />
          </Stack>
          <Stack
            gap={0.5}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Typography style={{fontWeight: 'bold'}}>Country</Typography>
            <CustomizedMenus list={countries} setItem={setFilterValue} filter={'country'} setFilterType = {setFilterType} />
          </Stack>
          <Stack
            gap={0.5}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Typography style={{fontWeight: 'bold'}}>End Year</Typography>
            <CustomizedMenus list={endYears} setItem={setFilterValue} filter={'end_year'} setFilterType = {setFilterType} />
          </Stack>
          <Stack
            gap={0.5}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Typography style={{fontWeight: 'bold'}}>Topic</Typography>
            <CustomizedMenus list={topics} setItem={setFilterValue} filter={'topic'} setFilterType = {setFilterType} />
          </Stack>
          <Stack
            gap={0.5}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Typography style={{fontWeight: 'bold'}}>Sector</Typography>
            <CustomizedMenus list={sectors} setItem={setFilterValue} filter={'sector'} setFilterType = {setFilterType} />
          </Stack>
        </Stack>
      </Card>
    </Box>
  )
}

export default AvgRelevance