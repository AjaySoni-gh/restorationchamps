import {withAuth} from "@kinde-oss/kinde-auth-nextjs/middleware"   // learnt about protecti9ngb the rouytes after sign out
import { NextRequest } from "next/server"

export default withAuth(
    async function middleware(request:NextRequest) {
        // console.log(request);
        
    }, {
        isReturnedToCurrentPage: true,
    }
) 
export const config ={
    matcher:['/((?!api|_next/static|_next/image|auth|favicon.ico|robots.txt|images|login|$).*)',]
}
