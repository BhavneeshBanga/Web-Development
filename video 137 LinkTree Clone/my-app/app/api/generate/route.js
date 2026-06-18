import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { MongoClient } from "mongodb";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export async function POST(request) {
  try {
    const body = await request.json();


    const client = await clientPromise;
    const db = client.db('bittree')
    const collection = db.collection('links')


    // if the handle is already claimed , you cannot create the bittree
    const existingHandle  = await collection.findOne({ handle: body.handle })

    if (existingHandle ) {
      // to/ast.error("User already exists!");
      return Response.json({success : false, error : true, message: "This BitTree Already exists!!", result : null})
    }
    










    const result = await collection.insertOne(body);


    return NextResponse.json(
      {
        success: true,
        error: false,
        message: "Your BitTree Has been Generated...",
        result: result
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}