import { getCustomer } from "@/app/lib/queries/getCustomers";
import { promises } from "dns";
import { BackButton } from "@/app/components/BackButton";
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
    
   
        if (!customer){
            return(
                <>
                <h3 className="text-2xl mb-2">customer ID: {customerId} not available</h3>
                <BackButton title="Go Back" variant="default" />
              
                </>
            )
        }

        //found customer
    }
    else{
        //create neew
    }

} catch (e){
    if( e instanceof Error){
        throw e
    }
}
}