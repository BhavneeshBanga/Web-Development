// "use client"
// import React from 'react'
// import { useState } from 'react';

import fs from "fs/promises"

export default function Home(){
  console.log('rendered...');
  let a = fs.readFile('.README.md')
  a.then(e=>{console.log(e.toString);
  })

  return (
    <>
    Hi this is Home
    </>
  )

  
}