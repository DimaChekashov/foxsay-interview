class PeekingIterator {
    constructor(iterator) {
        this.iterator = iterator;
        this.buffer = iterator.hasNext() ? iterator.next() : null;
        this.hasBuffered = this.buffer !== null;
    }

    peek() {
        return this.buffer;
    }

    next() {
        const val = this.buffer;
        this.buffer = this.iterator.hasNext() ? this.iterator.next() : null;
        this.hasBuffered = this.buffer !== null;
        return val;
    }

    hasNext() {
        return this.hasBuffered;
    }
}