import { getCustomer } from "@/app/lib/queries/getCustomers";
import { promises } from "dns";

export default async function CustomerFormPage({
    searchParams,}:{
        searchParams: Promise<{
            [key: string]: string | undefined}>
        }
){
try {

    const {customerId} = await searchParams
    if (customerId){
        const customer= await getCustomer(parseInt(customerId))
    
    }

    

} catch (e){
    if( e instanceof Error){
        throw e
    }
}
}