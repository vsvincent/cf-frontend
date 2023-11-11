'use client'
import {Textarea} from '@nextui-org/react';
import DynamicNavbar from "../components/DynamicNavbar";
import {FacebookPage} from '../components/FacebookPage';

export default function Services() {
  const activeNavItem = "services"
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
    <DynamicNavbar activeNavItem={activeNavItem}/>
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
