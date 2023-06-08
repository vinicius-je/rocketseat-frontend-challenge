import { ProductsFetchResponse } from "@/types/products-respose";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import dotenv from 'dotenv';

dotenv.config({path: './.env'});

//gerante que será uma string
const API_URL = process.env["NEXT_PUBLIC_API_URL"] as string;

console.log("API: " + API_URL)
console.log("API: " + process.env.NEXT_PUBLIC_API_URL)

const fetcher = (): AxiosPromise<ProductsFetchResponse> => {
    return axios.post(
    API_URL, 
    {
        query: `query {
            allProducts{
              id
              name
              price_in_cents
            }
        }`
    }
    )
}

export function useProducts(){
    const { data } = useQuery({
        queryFn: fetcher,
        queryKey: ['products']
    })

    return{
        data: data?.data?.data?.allProducts
    }
}