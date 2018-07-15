class Singleton {
    private static uniqueInstance: Singleton;

    propertyA: string;
    propertyB: number;

    private constructor() {}

    static getInstance() {
        if (this.uniqueInstance === undefined) {
            this.uniqueInstance = new Singleton();
        }
        return this.uniqueInstance;
    }
}

export { Singleton };
