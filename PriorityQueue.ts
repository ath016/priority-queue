class PriorityQueue<T> {
    compare: (a: T, b: T) => boolean;
    tree: T[];

    constructor(compare: (a: T, b: T) => boolean) {
        this.compare = compare;
        this.tree= Array(1);
    } // end of constructor

    push(data: T): number{
        let currentData: T, nextData: T;
        let currentIndex: number = this.tree.length;
        let nextIndex: number = currentIndex >> 1;

        // insert new data;
        this.tree.push(data);
            
        // swap data to correct position;
        while(nextIndex) {
            currentData = this.tree[currentIndex];
            nextData = this.tree[nextIndex]
                
            // swap data
            if(this.compare(currentData, nextData)) {
                this.tree[currentIndex] = nextData;
                this.tree[nextIndex] = currentData;
            } // end of if

            // no more swap
            else {
                break;
            } // end of else
        
            currentIndex = nextIndex;
            nextIndex = currentIndex >> 1;
        } // end of while

        return this.tree.length - 1;
    } // end of push

    pop(): T {
        let currentData: T, nextData: T;
        let currentIndex: number = 1
        let nextIndex: number = 2;
        let topData: T = this.tree[1];
        
        // remove top data
        this.tree[1] = this.tree[this.tree.length - 1];
        this.tree.length--;
        
        // swap data to correct position
        while(this.tree[nextIndex] != undefined) {
            nextIndex += ((this.tree[nextIndex + 1] != undefined) &&
                this.compare(this.tree[nextIndex + 1], this.tree[nextIndex]))? 1: 0;
            
            nextData = this.tree[nextIndex];
            currentData = this.tree[currentIndex];	

            // swap
            if(this.compare(nextData, currentData)) {
                this.tree[currentIndex] = nextData;
                this.tree[nextIndex] = currentData;
            } // end of if
            
            // no more swap
            else {
                break;
            } // end of else
            
            currentIndex = nextIndex;
            nextIndex = currentIndex << 1;
        } // end of while

        return topData;
    } // end of pop

    top(): T {
        return this.tree[1];
    } // end of top

    size(): number {
        return this.tree.length - 1;
    } // end of size
} // end of class priority queue
