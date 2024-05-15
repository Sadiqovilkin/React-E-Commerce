class Products {
    constructor(name,salePrice,costPrice,imgSrc,discountPercentage,description,categoryId,stock){
        this.name=name;
        this.salePrice= salePrice
        // if (discountPercentage>0) {
        //     this.salePrice= salePrice - (salePrice*discountPercentage/100)
        //     }
        // else{
        //         this.salePrice= salePrice
        //     }
        this.costPrice=costPrice;
        this.imgSrc=imgSrc;
        this.discountPercentage=discountPercentage;
        this.description=description;
        this.categoryId=categoryId;
        this.stock=stock;
    }
}
export default Products