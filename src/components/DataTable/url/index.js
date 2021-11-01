import filter from "./filter";
import order from "./order";
import pagination from './pagination';

export default function url(query, path) {
    return path + "?"
    + pagination(query)
    + order(query)
    + filter(query.filters);
}

