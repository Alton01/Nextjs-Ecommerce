import prisma from "@/libs/prismadb"
import { NextResponse } from "next/server";
import { getCurrentUser } from "@/actions/getCurrentUser";


//API ROUTE FOR CREATING PRODUCT

export async function POST (request: Request) {
    const currentUser = await getCurrentUser();

    if(!currentUser) return NextResponse.error();

    if ( currentUser.role !== 'ADMIN') {
        return NextResponse.error()
    }
    const body = await request.json()
    const {name, description, price, brand, category, inStock, images} = body


    const product = await prisma.product.create ({
     data: {
        name, 
        description, 
        price: parseFloat(price), 
        brand, 
        category, 
        inStock, 
        images }   
    })

    return NextResponse.json(product)
}



// API ROUTE FOR UPDATING INSTOCK VALUEFOR PRODUCT
export async function PUT(request: Request) {
    const currentUser = await getCurrentUser();

    if(!currentUser) return NextResponse.error();

    if ( currentUser.role !== 'ADMIN') {
        return NextResponse.error()
    }

    const body = await request.json()
    const {id, inStock} = body

    const product = await prisma.product.update({
        where: {id: id},
        data: {inStock}
    });

    return NextResponse.json(product);
}