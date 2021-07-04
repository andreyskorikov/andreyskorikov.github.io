(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-197075322-1', 'auto');

ga('require', 'ecommerce');
ga('ecommerce:addTransaction', {
	  'id': localStorage.transaction,                   // Transaction ID. Required.
	  'affiliation': localStorage.affiliation, 			// Affiliation or store name.
	  'revenue': localStorage.revenue,              	// Grand Total.
		'shipping': localStorage.shipping,              // Shipping.
		'tax': localStorage.tax,                  	    // Tax.
	  'currency': localStorage.currency    				// local currency code.
	});
	
ga('ecommerce:addItem', {
	  'id': localStorage.transaction,                   // Transaction ID. Required.
	  'name': localStorage.product,    					// Product name. Required.
	  'sku': localStorage.sku,                			// SKU/code.
	  'category': localStorage.category,         		// Category or variation.
	  'price':  localStorage.price,            	        // Unit price.
	  'quantity': parseInt(localStorage.quantity),                // Quantity.						  
	  'currency': localStorage.currency  				// local currency code.
	});

ga('ecommerce:send');

ga('send', 'pageview');