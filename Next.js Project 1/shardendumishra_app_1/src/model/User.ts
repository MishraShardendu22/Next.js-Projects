import mongoose, {Schema, Model, Document} from "mongoose";

/*
Define an interface for the Message document that extends 
Mongoose's Document interface.
Extending Document ensures that our interface includes 
Mongoose's built-in document properties and methods.
*/
export interface Message extends Document {
    content: string;
    createdAt: Date;
}

/*
: Schema<Message> 
this only gives type safety and 
is a good practise to add this
*/
const MessageSchema : Schema<Message> = new Schema ({
    content : {
        
    }
})