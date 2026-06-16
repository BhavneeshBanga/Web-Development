import clientPromise from "@/lib/mongodb"

export async function POST(request) {

    const body = await request.json()
    console.log(body);
    
    const client = await clientPromise;
    const db = client.db('bitlinks')
    const collection = db.collection('url')

    const doc = await collection.findOne({shorturl : body.shorturl})
    if(doc) {
         return Response.json({Success : false, error : true,  message : 'Url Alreadty Exists'})
    }

    const result = await collection.insertOne({
        url : body.url,
        shorturl : body.shorturl
    })
    

    return Response.json({Success : true, error : false,  message : 'Url Generated Successfullly'})
}