export function generateId (prefix, record) {
    return `${prefix}-${String(record.length + 1).padStart(4, "0")}`;
}