"use client"
import { useProducts } from "@/hooks/userProducts"

interface ProductsListProps {

}
export function ProductsList(props : ProductsListProps){
    const { data } = useProducts();
    console.log(data)
    return(
        <></>
    )
}