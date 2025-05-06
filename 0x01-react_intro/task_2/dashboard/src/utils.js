export function getLatestNotification() {
    return "<strong>Urgent requirement</strong> - complete by EOD";
}

export function getFullYear() {
    const date = new Date();
    return date.getFullYear();
}

export function getFooterCopy(isIndex) {
    return isIndex ? 'ALX':'ALX main dashboard'
}