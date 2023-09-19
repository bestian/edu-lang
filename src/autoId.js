

// add Error case ....
function autoId(name) {
    if (!name) {
        throw new Error('name is required');
    }
    const date = new Date();
    const formattedDate = date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0') + 'T' + String(date.getHours()).padStart(2, '0') + ':' + String(date.getMinutes()).padStart(2, '0');
    return name + formattedDate;
    
}

module.exports = { 
    autoId
}