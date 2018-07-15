import { Singleton } from './Singleton/Singleton';

function main() {
    let singletonOne: Singleton;
    let singletonTwo: Singleton;

    singletonOne = Singleton.getInstance();

    singletonOne.propertyA = 'This is singleton one';
    singletonOne.propertyB = 1;

    console.log('Property A from Singleton One => ', singletonOne.propertyA);
    console.log('Property B from Singleton One => ', singletonOne.propertyB);

    singletonTwo = Singleton.getInstance();

    singletonTwo.propertyA = 'This is singleton two';
    singletonTwo.propertyB = 2;

    console.log('Property A from Singleton Two => ', singletonTwo.propertyA);
    console.log('Property B from Singleton Two => ', singletonTwo.propertyB);

    console.log('Property A from Singleton One overwritten by singletonTwo => ', singletonOne.propertyA);
    console.log('Property B from Singleton One overwritten by singletonTwo => ', singletonOne.propertyB);
}

main();
