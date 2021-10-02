export function getDate(date) {
    const hours = date.getHours();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    let minutes = date.getMinutes();
    minutes < 10 ?
    minutes = '0' + minutes : null

    return {
        time: hours + '.' + minutes,
        date: day + '.' + month + '.' + year
    }
}