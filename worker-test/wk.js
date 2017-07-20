

self.addEventListener('message', function (event) {
    var data = event.data;

    console.log(data);
});



for (var i = 0; i < 1000000; i++) 
{
	console.log('hello from service worker...');	
}