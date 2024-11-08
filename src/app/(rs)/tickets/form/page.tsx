import { getCustomer } from "@/app/lib/queries/getCustomers";
import { getTicket } from "@/app/lib/queries/getTicket";
import { BackButton } from "@/app/components/BackButton";

export default async function TicketFormPage({
    searchParams,
}:
{
    searchParams: Promise<{ [key:string]: string | undefined}>

}){
    try {
            const { customerId, ticketId}= await searchParams

            if (!customerId && !ticketId){
                return(
                    <>
                    <h3 className="text-2xl mb-2">customer ID or ticket id is required</h3>
                    <BackButton title="Go Back" variant="default" />
                  </>
                )
            }

            if(customerId) {
                const customer = await getCustomer(parseInt(customerId))

                if (!customer){
                    return(
                        <>
                        <h3 className="text-2xl mb-2">customer ID: {customerId} not available</h3>
                        <BackButton title="Go Back" variant="default" />
                      
                        </>
                    )
                }
                if (!customer.active){
                    return(
                        <>
                        <h3 className="text-2xl mb-2">customer ID: {customerId} is not active</h3>
                        <BackButton title="Go Back" variant="default" />
                      
                        </>
                    )

                }
                console.log(customer)
            }
            if(ticketId){
                const ticket =await getTicket(parseInt(ticketId))

                if (!ticket){
                    return(
                        <>
                        <h3 className="text-2xl mb-2">ticket id not found</h3>
                        <BackButton title="Go Back" variant="default" />
                      </>
                    )
                }
                    const customer= await getCustomer(ticket.customerId)
                    console.log('ticket: ', ticket)
                    console.log("customer: " ,customer)
            }
    }catch (e){
        if( e instanceof Error){
            throw e
}}}