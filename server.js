
const path = require('path');

const express = require('express'); 

const bodyParser = require('body-parser'); 

//uses mongoDb NOT mongoose 
const database = require('./src/Backend/routes/Articles'); 

const cors = require('cors'); 

//Categories 

// one
const micro = require('./src/Backend/routes/micro')
//two
const macro = require('./src/Backend/routes/macro')
//three
const company = require('./src/Backend/routes/company_activity')
//four
const reports = require('./src/Backend/routes/reports')
//five
const sustainability = require('./src/Backend/routes/sustainability')
//six
const Ukraine = require('./src/Backend/routes/Ukraine')
//seven
const Broad = require('./src/Backend/routes/Broad')
//eight 
const Gov = require('./src/Backend/routes/Gov')
//nine
const Pandemic = require('./src/Backend/routes/Pandemic')

//save note
const note = require('./src/Backend/routes/saveNote')

//recomendation system 
// const cluster = require('./routes/Cluster')


const findUser = require('./src/Backend/routes/user')

const updateuser = require('./src/Backend/routes/editProfile')

const app = express(); 

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use(bodyParser.json()); 




app.get('/articles/', database.getArticles); 

app.get('/micro_articles/', micro.Category); 

app.get('/macro_articles/', macro.Category);

app.get('/company_articles/', company.Category);

app.get('/reports_articles/', reports.Category); 

app.get('/sustainability_articles/', sustainability.Category); 

app.get('/Ukraine_articles/', Ukraine.Category); 

app.get('/broad_articles/', Broad.Category);

app.get('/gov_articles/', Gov.Category);

app.get('/pandemic_articles/', Pandemic.Category);


app.post('/user/', findUser.getUser); 


app.put('/save_note/', note.saveNote);

app.delete('/delete_note/', note.deleteNote);

app.post('/update_username/', updateuser.updateUser);


app.get('/logout', function(req, res) {
    // Perform any necessary cleanup or logout operations here
    res.redirect('/');
  });
  

//THIS IS NOT WORKING 
// app.get('/cluster/', database.Cluster); 
 
// start the server
const PORT = process.env.PORT || 5001;

// app.get("/", (req, res)=>{
//     res.send("is up");
// })


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

if (process.env.NODE_ENV === 'production') {

    app.use(express.static('build')); 


//renders build after refreshing page.

    app.get("*", function(request, response){
        response.sendFile(path.resolve(__dirname, "build", "index.html")); 
    });

}



