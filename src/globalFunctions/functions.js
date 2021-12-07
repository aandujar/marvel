export function getImg(item) {
        return item.thumbnail
        ? `${item.thumbnail.path}.${item.thumbnail.extension}`
        : require('@/assets/no-image.svg'); 
}

export function isNotEmpty(item) {
        return Object.keys(item).length > 0;
 }

 export function getFirstElementOfArray(item) {
        return item.length > 0 ? item[0] : {};
 }