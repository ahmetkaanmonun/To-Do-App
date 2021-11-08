const express = require('express'); 
const app = express();
const bodyParser = require('body-parser');
let items = ["Hello","Hi","Hallo"];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get('/', (req, res) => {


    let today = new Date()

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    var day = today.toLocaleDateString("en-US", options)

    res.render('list', {kindOfDay: day,newListItems:items});
});

app.post('/', (req, res) => {
    let item = req.body.newItem;
    items.push(item);
    res.redirect('/');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});