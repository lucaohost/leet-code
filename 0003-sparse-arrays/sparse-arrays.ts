function matchingStrings(stringList: string[], queries: string[]): number[] {
    let matchingTimes: number[] = Array(queries.length).fill(0);
    queries.forEach((query: string, iQuery: number) => {
        stringList.forEach((string: string, iString: number) => {
            if (query === string) {
                matchingTimes[iQuery]++;
            }
        });
    });
    return matchingTimes;
}