import { create } from "zustand";

interface usestoremodalstore{
    isOpen:boolean,
    onOpen: ()=>void,
    onClose:()=>void,
}

export const modalStore=create<usestoremodalstore>((set)=>({
    isOpen:false,
    onOpen:()=>set({isOpen:true}),
    onClose:()=>set({isOpen:false})

}))