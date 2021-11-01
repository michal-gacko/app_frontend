export default function dictionaryToId(data) {
    if(data) {
        for (let key in data) {
            if (data[key] && data[key].id) {
                data[key] = data[key].id
            }
        }
    }
    return data;
}