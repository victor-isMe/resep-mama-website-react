export const formatDate = (timestamp) => {
    if (!timestamp) return "";

    const data = timestamp.seconds
        ? new Date(timestamp.seconds * 1000)
        : new Date(timestamp);

        return data.toLocaleDateString(
            "id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
            }
        );
};

export const formatDateInbox = (timestamp) => {
    if (!timestamp) return "";

    const data = timestamp.seconds
    ? new Date(timestamp.seconds * 1000)
    : new Date(timestamp);

    return data.toLocaleDateString(
        "id-ID", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
            day: "numeric",
            month: "short",
            year: "numeric",
        }
    )
}