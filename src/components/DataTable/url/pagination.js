export default function pagination(query) {
    return 'page_size=' + query.pageSize +'&page=' + (query.page + 1)
}

