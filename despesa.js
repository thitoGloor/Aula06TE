//npm install consign
module.exports = app =>{
app.get('/despesas',(req, res) => res.send('você  está em /despesas via GET'))
app.post('/despesas', (req, res) => res.send('vc esta em despesas via POST'))
}