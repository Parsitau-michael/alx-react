export function getFullYear() {
    const date = new Date();
    return date.getFullYear();
}

export function getFooterCopy(isIndex) {
    return isIndex ? 'ALX':'ALX main dashboard'
}