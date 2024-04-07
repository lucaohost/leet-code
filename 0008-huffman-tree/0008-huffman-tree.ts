class Nodee {
    data: string;
    left: Nodee | null;
    right: Nodee | null;

    constructor(data: string) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Decoding {
    decode(s: string, root: Nodee): void {
        let decodedString = "";
        let digits = s.split("");
        let Nodee: Nodee | null = root;
        
        for (let i = 0; i < digits.length; i++) {
            let digit = digits[i];
            if (digit === "0") {
                if (Nodee !== null && Nodee.left !== null)
                    Nodee = Nodee.left;
            } else {
                if (Nodee !== null && Nodee.right !== null)
                    Nodee = Nodee.right;
            }
            if (Nodee !== null && Nodee.left === null && Nodee.right === null) {
                decodedString += Nodee.data;
                Nodee = root;
            }
        }
        console.log(decodedString);
    }
}

// Example usage
const rootNodee = new Nodee("root");
rootNodee.left = new Nodee("A");
rootNodee.right = new Nodee("B");
rootNodee.left.left = new Nodee("C");
rootNodee.left.right = new Nodee("D");
rootNodee.right.left = new Nodee("E");
rootNodee.right.right = new Nodee("F");

const decoder = new Decoding();
decoder.decode("0010111", rootNodee); // Output: CAF
