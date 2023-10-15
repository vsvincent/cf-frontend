'use client'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Grid, Cell, Col, Container} from "@nextui-org/react";
import {Text, Textarea} from '@nextui-org/react';
import {FacebookPage} from './components/FacebookPage';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar className="navbar">
      <NavbarContent justify="start">
      <div>
  <NavbarBrand>
    <img src="https://vectorified.com/image/pot-vector-3.png" width="50px"/>
  </NavbarBrand>
</div>
      <p className="text-inherit hidden sm:flex navbar-content">Cooking for Friends</p>
      </NavbarContent>
      
      <NavbarContent className="sm:flex gap-4 ml-auto" justify="end">
        <NavbarItem isActive>
          <Link underline="always" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/about">
            About
          </Link>
        </NavbarItem>
        
      </NavbarContent>
    
    </Navbar>
    <FacebookPage/>
    <Textarea
      isReadOnly
      label="Description"
      variant="bordered"
      labelPlacement="outside"
      placeholder="Enter your description"
      defaultValue="NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components."
      className="max-w-xs"
    />
    </main>
  )
}
