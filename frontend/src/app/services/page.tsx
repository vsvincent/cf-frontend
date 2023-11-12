'use client'
import DynamicNavbar from "../components/DynamicNavbar";
import React from "react";
import {RadioGroup, Radio} from "@nextui-org/react";
import {Button} from "@nextui-org/react";




export default function Services() {
  const activeNavItem = "services"
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
    <DynamicNavbar activeNavItem={activeNavItem}/>
    <RadioGroup
      label="Select service:"
    >
      <Radio value="catering">Catering</Radio>
      <Radio value="meal-prepprivchef">Meal PrepPrivChef</Radio>
      <Radio value="meal-packagees">Meal Packages</Radio>
      <Radio value="coaching">Coaching</Radio>
      <Radio value="cooking-classes">Cooking Classes</Radio>
    </RadioGroup>
    <Button color="primary">
      Enter
    </Button>
  
   
    </main>
  )
}
