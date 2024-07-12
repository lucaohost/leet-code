class RandomizedCollection {
    private vals: number[];
    private idxMap: Map<number, Set<number>>;

    constructor() {
        this.vals = [];
        this.idxMap = new Map();
    }

    insert(val: number): boolean {
        const idxSet = this.idxMap.get(val) || new Set();
        idxSet.add(this.vals.length);
        this.idxMap.set(val, idxSet);
        this.vals.push(val);
        return idxSet.size === 1;
    }

    remove(val: number): boolean {
        const idxSet = this.idxMap.get(val);
        if (!idxSet || idxSet.size === 0) {
            return false;
        }
        const removeIdx = idxSet.values().next().value;
        idxSet.delete(removeIdx);

        const lastVal = this.vals[this.vals.length - 1];
        this.vals[removeIdx] = lastVal;
        this.idxMap.get(lastVal)?.add(removeIdx);
        this.idxMap.get(lastVal)?.delete(this.vals.length - 1);

        this.vals.pop();
        if (idxSet.size === 0) {
            this.idxMap.delete(val);
        }
        return true;
    }

    getRandom(): number {
        const randomIdx = Math.floor(Math.random() * this.vals.length);
        return this.vals[randomIdx];
    }
}
