import { connect } from "@/lib/dbConnect";

export async function GET(req) {
    const collection = await connect("products");
    const result = await collection.find().toArray();
    return Response.json({
        result
    })
}
//? Post some info in db collection products.
export async function POST(req) {
    const payload = await req.json();
    const collection = await connect("products");
    const result = await collection.insertOne(payload);
    return Response.json({
        success:true,
        message:"data inserted",
        insertedId:result.insertedId
    })
}