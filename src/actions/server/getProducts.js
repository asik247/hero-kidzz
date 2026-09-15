'use server'
import { connect } from "@/lib/dbConnect"
import { ObjectId } from "mongodb";
//? All Products get
export const getProducts = async () => {
    const collection = await connect("products");
    const result = await collection.find().toArray();
    return result
}
//? specifique products get using id.
export const getDetails = async (id) => {
    const collection = await connect("products");
    const query = {
        _id:new ObjectId(id)
    }
    const result = await collection.findOne(query)
    return result
    
}