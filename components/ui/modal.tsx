"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

//used in case of big projects:
interface modalProps{
    title: string,
    desc: string,
    isOpen: boolean,
    onClose():void,
    children?:React.ReactNode
}

export const Modal: React.FC<modalProps>=({title,desc,isOpen,onClose,children})=>{
    const onChange=()=>{
        if(!isOpen)onClose();
    }
    return(
        <Dialog open={isOpen} onOpenChange={onChange}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>{title}</DialogTitle>
      <DialogDescription>
        {desc}
      </DialogDescription>
      <div>
        {children}
      </div>
    </DialogHeader>
  </DialogContent>
</Dialog>
    )
}