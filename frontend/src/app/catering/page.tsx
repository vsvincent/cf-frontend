'use client'
import DynamicNavbar from "../components/DynamicNavbar";
import React from "react";




export default function Catering() {
  const activeNavItem = "catering"
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
    <DynamicNavbar activeNavItem={activeNavItem}/>
    
   
    </main>
  )
}
