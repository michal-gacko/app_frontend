export default function filter(data) {
    let result = ""
    if (data) {
        data.forEach(element => {
                if (element.column.field !== "created") {
                    let value = element.value.id ? element.value.id : element.value
                    result += '&'
                        + element.column.field
                        + element.operator
                        + value
                } else {
                    let startDate = new Date(element.value.startDate)
                    let endDate = new Date(element.value.endDate)
                    endDate.setDate(endDate.getDate() + 1)
                    result += '&' + element.column.field + element.operator + startDate.getFullYear() + "-"
                        + (startDate.getMonth() + 1) + "-" +
                        +startDate.getDate() + "," + endDate.getFullYear() + "-" + (endDate.getMonth() + 1) + "-" +
                        +endDate.getDate()
                }
            }
        );
    }
    return result;
}

