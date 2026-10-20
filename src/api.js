async function FetchProducts(){
    try{
        const response = await fetch('https://ecom-backend-cphebqayekhwczfx.centralindia-01.azurewebsites.net/api/products');
        const data = await response.json();
        console.log(data)
        return data.data;
    }
    catch(error){
        console.error('Error fetching products:', error);
         console.log("new feature added");
        return [];
       
    }
}

export default FetchProducts;