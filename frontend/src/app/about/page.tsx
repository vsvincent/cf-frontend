'use client'
import React, { Component } from 'react';
import DynamicNavbar from '../components/DynamicNavbar';

export default function About() {
  const activeNavItem = 'about'
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <DynamicNavbar activeNavItem={activeNavItem}/>
    </main>
  )
}