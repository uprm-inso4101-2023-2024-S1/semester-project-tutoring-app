import React, { useState } from "react";

import MySearchBar from "../atoms/my-search-bar";



import allDepartments from "../atoms/listDepartments";

const Services = () => {


  return (
    <>
      <MySearchBar allTutors={allDepartments} />
    </>
  );
};
export default Services;
