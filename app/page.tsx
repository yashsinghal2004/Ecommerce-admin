"use client"

import { Modal } from '@/components/ui/modal'
import { useModalStore } from '@/hooks/use-store-modal'
import { useEffect } from 'react';


const page = () => {
  const isOpen=useModalStore((state)=>state.isOpen);
  const onOpen=useModalStore((state)=>state.onOpen);

  useEffect(()=>{
    if(!isOpen){
      onOpen();
    }
  },[isOpen,onOpen])

  return (
    <div className='p-4'>
    Root page
    </div>
  )
}

export default page
