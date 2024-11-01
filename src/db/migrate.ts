//devtool
import {db} from "./index";
import {migrate} from "drizzle-orm/neon-http/migrator"

const main = async ()=>{
    try {
        await migrate (db, {
            migrationsFolder: 'src/db/migrations'
        })
        console.log('migration is done')
    } catch(error){
        console.log(error)
        process.exit(1);
    }
}
main()