export const sortDesc = (a, b) => {
    return a.size > b.size ? -1 : b.size > a.size ? 1 : 0;
};

export const sortAsc = (a, b) => {
    return a.size > b.size ? 1 : b.size > a.size ? -1 : 0;
};

export const search = (query) => {
    return (x) => {
        let normalizedAuthor = x.author.toLowerCase();
        let normalizedQuery = query.toLowerCase();
    
        return normalizedAuthor.includes(normalizedQuery);
    }
};