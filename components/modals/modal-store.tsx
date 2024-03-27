"use client"

import { useModalStore } from "@/hooks/use-store-modal"
import { Modal } from "@/components/ui/modal"

export const ModalStore=()=>{
    const modalStore=useModalStore();
    return(
        <Modal
        title="Create Store"
        desc="Add a new store to your collections"
        isOpen={modalStore.isOpen}
        onClose={modalStore.onClose}>Future Create store form</Modal>
    )
}