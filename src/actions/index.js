export function selectBook(book){
//selectBook is an action creator, it needs to return action, an object with type property
    return{
        type: "BOOK_SELECTED",
        payload: book
    };
}