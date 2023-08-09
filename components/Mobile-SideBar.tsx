"use client"
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { Menu} from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import Sidebar from '../components/Sidebar'
interface MobileSideBarProps {
  apiLimitCount : number;
  isPro:boolean
}
const MobileSideBar = ({
  apiLimitCount = 0,
  isPro=false
}:MobileSideBarProps) => {

  // to remove hydration error follow this strategy of hooks
  const [isMounted,setIsMounted] =useState(false);
  useEffect(()=> {
    setIsMounted(true);
  }, []);

if(!isMounted){
  return null;
}


  return (
        <Sheet>
        <SheetTrigger>
            <Button variant={'ghost'} size={'icon'}
            className='md:hidden'>
                <Menu />
            </Button>
      </SheetTrigger>
      <SheetContent side={'left'} className='p-0'>
        <Sidebar apiLimitCount={apiLimitCount} isPro={isPro} />
      </SheetContent>
      </Sheet>
    
  )
}

export default MobileSideBar
