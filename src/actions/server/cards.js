'use server'

import { connect } from "@/lib/dbConnect";
import { authOptions } from "@/lib/outhOption";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth"
import { revalidatePath } from "next/cache";
import { cache } from "react";
//? collection
const collection = await connect("cards")
//Todo funk add here.
export const handlerAdd = async ({ product, inc = true }) => {

    const { user } = await getServerSession(authOptions) || {};

    if (!user) return { success: false }

    //? Get item--> using user emial && product id.
    const query = { email: user?.email, cardId: product?._id };
    const isAdded = await collection.findOne(query);
    //? If item already exist then update item
    if (isAdded) {
        const updatedData = {
            $inc: {
                quentity: inc ? 1 : -1,
            },
        }
        const result = await collection.updateOne(query, updatedData);
        return { success: Boolean(result.modifiedCount) }
    }
    //? If item not exist then inserted item in db.
    else {
        const cardData = {
            cardId: product?._id,
            cardTitle: product?.title,
            cardImg: product?.image,
            cardPrice: product.price - (product.price * product.discount) / 100,
            quentity: 1,
            name: user?.name,
            email: user?.email,
        }
        const result = await collection.insertOne(cardData);
        return { success: result.acknowledged }
    }
}

//! Get added data in db.
export const getCardData = cache(
    async () => {
        const { user } = await getServerSession(authOptions);
        if (!user) return []
        const query = {
            email: user?.email
        }
        const result = await collection.find(query).toArray()
        return result

    }
)
//? funk Delete data.
export const deleteCardData = async (id) => {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
        return { success: false, message: "Unauthorized" };
    }

    if (!id || id.length !== 24) {
        return { success: false, message: "Invalid ID" };
    }

    const query = {
        _id: new ObjectId(id)
    };
    //Todo check email--->just my data delete.

    const result = await collection.deleteOne(query);
    revalidatePath("/cart")
    return {
        success: result.deletedCount > 0
    };

};