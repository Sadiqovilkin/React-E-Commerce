class Orders {
    constructor(userId,totalPrice){
        this.userId=userId;
        this.totalPrice=totalPrice;
        this.items=[];
        this.createdAt=new Date();
    }
}
export default Orders