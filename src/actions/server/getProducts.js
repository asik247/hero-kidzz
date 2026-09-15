'use server'
import { connect } from "@/lib/dbConnect"
//? All Products get
export const getProducts = async () => {
    const collection = await connect("products");
    const result = await collection.find().toArray();
    return result
}
//? specifique products get using id.
export const getDetails = async (id)=>{
    return id
}