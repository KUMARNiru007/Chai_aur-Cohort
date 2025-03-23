const {customExpress} = require('./server.js')

const app = new customExpress();
const port =3000;

app.customGet('/' , (req, res) => {
    res.end('Custom get working');
});
app.customPost('/' , (req, res) => {
    res.end('Custom post working');
});
app.customPut('/' , (req, res) => {
    res.end('Custom put working');
});
app.customPatch('/' , (req, res) => {
    res.end('Custom patch working');
});
app.customDelete('/' , (req, res) => {
    res.end('Custom delete working');
});


app.customGet('/us' , (req, res) => {
    res.end('Custom get working of /us');
});
app.customPost('/us' , (req, res) => {
    res.end('Custom post working of /us');
});
app.customPut('/us' , (req, res) => {
    res.end('Custom put working of /us');
});
app.customPatch('/us' , (req, res) => {
    res.end('Custom patch working of /us');
});
app.customDelete('/us' , (req, res) => {
    res.end('Custom delete working of /us ');
});





app.customListen(port ,'0.0.0.0', (req,res) => {
    console.log("Server Started")
});