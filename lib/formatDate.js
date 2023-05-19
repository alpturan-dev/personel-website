export const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const formattedDate = date.toLocaleString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric"
    });

    return formattedDate // Output: 18 May 2023, 19:50
}