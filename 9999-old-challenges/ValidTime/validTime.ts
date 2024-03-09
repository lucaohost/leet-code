function validTime(time: string): boolean {
    let timeSplitted: string[] = time.split(':');
    let hour: number = parseInt(timeSplitted[0]);
    let minutes: number = parseInt(timeSplitted[1]);
    return (hour >= 0 && hour <= 23) && (minutes >= 0 && minutes <= 59);
}

console.log(validTime("13:58"));