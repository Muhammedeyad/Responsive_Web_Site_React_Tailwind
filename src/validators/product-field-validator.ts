import * as Yup from "yup"


export const productFieldValidator =  Yup.object({
    product_name: Yup.string().required().min(3),
    branch_name: Yup.string().required(),
    address_line: Yup.string().required()
})