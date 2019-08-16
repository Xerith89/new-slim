const sortAscending = sort((a,b) => {
    const genreA = a.taskName.toUpperCase();
    const genreB = b.taskName.toUpperCase();

    let comparison = 0;
    if (genreA < genreB) {
    comparison = 1;
    } else if (genreA > genreB) {
    comparison = -1;
    }
    return comparison;
});

const sortDescending = sort((a,b) => {
    const genreA = a.taskName.toUpperCase();
    const genreB = b.taskName.toUpperCase();

    let comparison = 0;
    if (genreA > genreB) {
    comparison = 1;
    } else if (genreA < genreB) {
    comparison = -1;
    }
    return comparison;
});