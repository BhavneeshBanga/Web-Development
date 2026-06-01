// export default function Page({ params }) {
//   return <div>My Post: {params.slug}</div>
// }


export default async function Page({ params }) {
    throw new Error('Error thrown from page.js');
    let languages = ['python', 'javascript', 'java', 'c++'];
    

  const { slug } = await params;


  if(languages.includes(slug)) {    return (
      <div>
        My Post: {slug}
      </div>
    );
  }
  else {
    return (
      <div>
        Post Not Found
      </div>
    );
}}
  