
var getAbout = (req,res) =>{
  res.render('about',{
    text: "Welcome to about us page...",
    title: "About us",
    page_name : 'about'
  });
};



module.exports = {
    getAbout
};