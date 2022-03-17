import './config'
import app from "./app"
import './database'



// app.listen(3000)
app.listen(process.env.PORT || 3000)

console.log('Server on port', 3000)
