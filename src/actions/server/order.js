'use server'

import { connect } from "@/lib/dbConnect";
import { authOptions } from "@/lib/outhOption";
import { getServerSession } from "next-auth";
import { clear, getCardData } from "./cards";
import { invoiceTemplate } from "@/lib/invoiceTemplate";
import { transporter } from "@/lib/sendMail";

const collection = connect("orders");

export const createOrder = async (payload) => {

    const { user } = await getServerSession(authOptions) || {};

    if (!user) {
        return { success: false };
    }

    // Cart Data
    const cart = await getCardData();

    if (cart.length === 0) {
        return { success: false };
    }

    const newOrder = {
        createdAt: new Date().toISOString(),
        items: cart,
        ...payload,
    };

    const result = await (await collection).insertOne(newOrder);

    const orderId = result.insertedId.toString();

    // Total Price
    const totalAmount = cart.reduce(
        (sum, item) => sum + (item.cardPrice * item.quentity),
        0
    );

    // Send Invoice Email
    try {
        await transporter.sendMail({
            from: `"Hero Kidzz" <${process.env.EMAIL}>`,
            to: user.email,
            subject: `Invoice #HKZ-${orderId}`,
            html: invoiceTemplate({
                name: user.name || "Customer",
                email: user.email,
                orderId,
                totalAmount,
                items: cart,
            }),
        });
    } catch (error) {
        console.log("Email Error:", error);
    }

    // Clear Cart
    if (result.insertedId) {
        await clear();
    }

    return {
        success: true,
        orderId,
    };
};