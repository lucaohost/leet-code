function matchingStrings(stringList, queries) {
    let matchingTimes = Array(queries.length).fill(0);
    queries.forEach((query, iQuery) => {
        stringList.forEach((string, iString) => {
            if(query === string) {
                matchingTimes[iQuery]++;
            }
        });
    });
    return matchingTimes;
}