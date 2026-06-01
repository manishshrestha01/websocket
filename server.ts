import app from './src/app.ts'
import { envConfig } from './src/config/config.ts'
import connectDB from './src/config/db.ts'
async function startServer() {
   await connectDB()
    const port = envConfig.port || 4000
    app.listen(port,()=>{
        console.log('Server is running on port ' + port)
    })
}
startServer()