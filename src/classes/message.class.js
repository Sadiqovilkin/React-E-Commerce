class Messages {
    constructor(fullName,email,title,message){
        this.fullName=fullName;
        this.email=email;
        this.title=title;
        this.message=message;
        this.createdAt=new Date();
    }
}
export default Messages