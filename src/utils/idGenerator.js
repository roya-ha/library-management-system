export function generateId (prefix, records) {
    let highest = 0;
    for (const record of records) {
        const number = parseInt(record.id.split("-")[1], 10);
        if (number > highest) {
            highest = number;
        }
    }
    return `${prefix}-${String(highest + 1).padStart(4, "0")}`;
}
