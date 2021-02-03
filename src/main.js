//const dbConnection=require('./connections/dbConnection');

//console.log(dbConnection().then(con=>console.log(con)))
const ProductRepository=require('./repository/productRepository')
const productRepository=new ProductRepository();
const main=async()=>{
    /*let saveProduct=await productRepository.saveProduct({
        productId:3,
        productName:'Iphone12',
        price:84562.5,
        description:'Iphone12Mini'
    })
    console.log('Saved Product ----->',saveProduct)*/
    /*
    let updatedProduct=await productRepository.updateProduct({
        productId:2,
        productName:'Iphone12',
        price:39867.5,
        description:'Iphone12Mini'
    })
    console.log('Updated Product ----->',updatedProduct)
*/
    //let deletedProduct=await productRepository.deleteProduct(2)
    //console.log('deleted Product ----->',deletedProduct)

   // const products=await productRepository.findAllProduct()
   // console.log('Product list----->',products)

   const products=await productRepository.findAllProductByName('Iphone12')
   console.log('searhed list----->',products)
}
main();