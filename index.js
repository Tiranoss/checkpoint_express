const express  = require('express');
const path = require('path');
const app = express();

app.use(addActiveTime = (req, res , next) => {
 let requestAt = new Date().getHours()
 if ((requestAt <= 9) || (requestAt >= 17))
 {
     res.send("no access")
 }
 else {
     next()
     app.use(express.static(path.join(__dirname + '/public')));
}
});

/*app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'public', 'home.html'));
});*/

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));