"use client"

import { Modal } from '@/components/ui/modal'


const page = () => {
  return (
    <div className='p-4'>
    <Modal title="test" desc="create your store" isOpen onClose={()=>{}}>children</Modal>
    </div>
  )
}

export default page
