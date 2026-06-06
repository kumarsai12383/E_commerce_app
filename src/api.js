async function FetchProducts(){
    try{
        const response = await fetch('https://e-commerce-data-gf9q.onrender.com/products');
        const data = await response.json();
        console.log(data)
        return data;
    }
    catch(error){
        console.error('Error fetching products:', error);
        return [];
    }
}

export default FetchProducts;