export const InitialValues = () => {
    return {
        username: '',
        password: '',
        computer: localStorage.getItem("computer") ? localStorage.getItem("computer") : ""
    }
}