
app.get("/",function(req,res){
    var mydata = {
        title: "Things You Never Knew",
        date: "November 24, 2014",
        articleText: "Donec diam nibh, imperdiet ac lacus sit amet, accumsan tincidunt urna."
    }
    res.render("page",mydata);
});

app.get("/Me", function (req, res){
	var myDate = {
		name: 'Meg',
		city: 'Baltimore',
		state: 'Maryland',
	};
	res.render("page",mydata)
});