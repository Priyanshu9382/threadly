import 'dotenv/config'
import connectToDB  from './db/db.js'
import app from './app.js'

connectToDB().then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(`Server started on port ${process.env.PORT}`)
    })
}).catch((err)=>{
    console.log("DB connection failed!!", err)
})
