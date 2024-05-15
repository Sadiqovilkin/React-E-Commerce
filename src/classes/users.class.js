class Users {
    constructor(username,password,email,profileImg,balance){
        this.username=username;
        this.password=password;
        this.email=email;
        this.profileImg=profileImg;
        this.balance=balance;
        this.role="client";
        this.basketItems=[]
    }
}
export default Users