import React from 'react'
import Dashboard from '..';
import MainVisual from '../../components/main_page/mianVirsual';
import  {Banner, Banner2 } from '../../components/main_page/banner';
import { Snack } from '../../components/main_page/snack';
import LunchBox from '../../components/main_page/lunchBox';

const MainPage = () => {
  return (
    <Dashboard
    virsual={
        <>
        <MainVisual/>
        </>
    }
    children={
        <>
        <Banner/>
        <Snack/>
        <Banner2/>
        <LunchBox/>
        </>
    }
    />
  )
}

export default MainPage;
