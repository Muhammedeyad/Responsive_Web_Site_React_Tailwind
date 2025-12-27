export interface ModalType {
    isModalOpen: boolean,
    handleClose: ()=> void
}

export interface productAddType{
    product_name: string
    branch_name: string
    address_line: string
}

export interface ModalSkeletonType {
    height: number,
    width: number
}