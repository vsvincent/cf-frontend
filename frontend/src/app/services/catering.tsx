'use client'
import DynamicNavbar from "../components/DynamicNavbar";
import React from "react";
import {RadioGroup, Radio} from "@nextui-org/react";



export default function Catering() {
  const activeNavItem = "catering"
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
    <DynamicNavbar activeNavItem={activeNavItem}/>
    <RadioGroup
      label="Select your favorite city"
    >
      <Radio value="buenos-aires">Catering</Radio>
      <Radio value="sydney">Meal PrepPrivChef</Radio>
      <Radio value="san-francisco">Meal Packages</Radio>
      <Radio value="london">Coaching</Radio>
      <Radio value="tokyo">Cooking Classes</Radio>
    </RadioGroup>
   
    </main>
  )
}
