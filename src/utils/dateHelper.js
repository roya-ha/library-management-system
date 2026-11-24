function getToday() {
    return new Date();
}

function addDays(Date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function getDateDifference(startDate, endDate) {
    const start = new Date(StartDate);
    const end = new Date(endDate);

    const difference = end - start;

    return Math.floor(difference / (1000 * 60 * 60 * 24));
}

function isOverdue(dueDate) {
    const today = new Date();

    return new Date(dueDate) < today;
}

function getDaysOverdue(dueDate) {
    const today = new Date();
    const due = new Date(dueDate);

    const difference = today - due;
    
    return Math.max(
        0,
        Math.floor(difference / (1000 *60* 60 * 24))
    )
}

export {
    getToday,
    addDays,
    getDateDifference,
    isOverdue,
    getDaysOverdue
};