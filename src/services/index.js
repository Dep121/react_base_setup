async function getRestaurant(cb) {
    const url = `http://starlord.hackerearth.com/TopRamen`;
    const res = await fetch(url);
    const data = await res.json();
    cb(data);
}

export {
    getRestaurant,
};