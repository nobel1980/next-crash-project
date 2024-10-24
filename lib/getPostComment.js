
export default async function getPostComment(id) {
    const result = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );

    if(!result.ok){
        throw new console.error("There was an an error fetching post data");        
    }
    
    return result.json();
}