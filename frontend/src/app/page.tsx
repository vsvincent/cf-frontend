'use client'
import {Textarea} from '@nextui-org/react';
import DynamicNavbar from "./components/DynamicNavbar";
import {FacebookPage} from './components/FacebookPage';

export default function Home() {
  const activeNavItem = "home"
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
      defaultValue="Testing single page"
      className="max-w-xs"
    />
    </main>
  )
}
