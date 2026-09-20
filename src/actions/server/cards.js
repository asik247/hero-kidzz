'use server'

import { connect } from "@/lib/dbConnect";
import { getServerSession } from "next-auth"
//? collection
const collection = await connect("cards")
export const handlerAdd = async ({ product }) => {
    // console.log('product',product);
    const user = await getServerSession();
    // console.log(user);
    //Todo just test save card data in db.
    //! create cardData.
    const cardData = {
        name:user?.name,
        email:user?.email,
        cardImg:product?.image,
        cardTitle:product?.title
    }
    //! post cards coll data.
    const result = await collection.insertOne(cardData);
    return {success:true,}
}