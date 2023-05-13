import React, { useEffect, useState } from 'react';
import Chart from './Chart';
import { Box, Card, Stack, Typography } from '@mui/material';
import { LIKELIHOOD_REGION_API } from '../endpoints';
import { useSelector } from 'react-redux';
import CustomizedMenus from '../utils/CustomizedMenus';
import Loader from './Loader';

const LikelihoodRegion = () => {
  const [data, setData] = useState([]);
  const [filterType, setFilterType] = useState('');
  const [filterValue, setFilterValue] = useState(null);
  const {endYears, countries, sectors, sources, topics} = useSelector(state => state.data);
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
    if(!filterValue && !filterType)fetchData(`${process.env.REACT_APP_BASE_URL}/${LIKELIHOOD_REGION_API}`);
    else fetchData(`${process.env.REACT_APP_BASE_URL}/${LIKELIHOOD_REGION_API}?filterType=${filterType}&filterValue=${filterValue}`);
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
        <Chart data={data} xLabel={'Region'} yLabel={'Likelihood'} type='bar' />
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
            <Typography style={{fontWeight: 'bold'}}>End Year</Typography>
            <CustomizedMenus list={endYears} setItem={setFilterValue} filter={'end_year'} setFilterType = {setFilterType} />
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
            <Typography style={{fontWeight: 'bold'}}>Source</Typography>
            <CustomizedMenus list={sources} setItem={setFilterValue} filter={'source'} setFilterType = {setFilterType} />
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
  );
};

export default LikelihoodRegion;