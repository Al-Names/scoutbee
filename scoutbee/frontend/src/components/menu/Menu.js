import React, { Fragment } from "react";

import SearchBar from './SearchBar';
import Dishes from './Dishes';

export default function Menu() {
  return (
   <Fragment>
       <SearchBar />
       <Dishes />
   </Fragment>
  )
}

