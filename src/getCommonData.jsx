import React, { useEffect } from 'react'
import { GET_LIST_API } from './endpoints';
import { setData } from './state/dataSlice';
import { useDispatch } from 'react-redux';

const GetCommonData = () => {
  useEffect(() => {
    fetchAllData();
  }, []);

  const dispatch = useDispatch();

  const fetchAllData = async () => {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/${GET_LIST_API}`, {
      method: 'GET'
    });

    const data = await response.json();
    dispatch(setData(data));
  }

  return (
    <div></div>
  )
}

export default GetCommonData