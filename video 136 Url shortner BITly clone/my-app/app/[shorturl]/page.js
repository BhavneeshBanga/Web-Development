import clientPromise from "@/lib/mongodb";
import { redirect } from "next/navigation";

export default async function Page({ params }) {
    const {shorturl} = await params;
    const client = await clientPromise;
    const db = client.db("bitlinks");

    const doc = await db.collection("url").findOne({
        shorturl: shorturl
    });

    console.log("doc", doc);
    

    if (doc) {
        console.log(doc);
        redirect(doc.url);
    }
    return <h1>URL not found</h1>;
}