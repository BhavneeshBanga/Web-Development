// export default function Page({ params }) {
//   return <div>My Post: {params.slug}</div>
// }

'use server'
export default async function Page({ params }) {

    let slug = await params;
    console.log(slug);
    return (
        <div>
i am about page         </div>
    )
}