export function getImg(item) {
        return item.thumbnail
        ? `${item.thumbnail.path}.${item.thumbnail.extension}`
        : ""; 
 }