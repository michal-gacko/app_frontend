export default function order(query) {
    let url = "";
if (query.orderBy) {
        url += "&ordering="
        url += query.orderDirection === "asc" ? query.orderBy.field : "-" + query.orderBy.field
    }
    return url;
}