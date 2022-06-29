const unmodifiedTestArr = [1, 2, 3, 4]
const unmodifiedTestObj = {one: 1, two: 2, three: 3, four: 4}

function myEach(collection, callback){
    
    let collectionCopy = collection;
    if (!Array.isArray(collection)){
     collectionCopy = Object.values(collection);
    }

    for (const value of collectionCopy){
        callback(value);
    }
    
    return collection;
}

function myMap(collection, callback){

    let newArray = [];
    let collectionCopy = collection;

    if (!Array.isArray(collection)){
        collectionCopy = Object.values(collection);
    }

    for (const value of collectionCopy){
        newArray.push(callback(value));
    }

    return newArray

}

function myReduce(collection, callback, acc){
    
    let collectionCopy = collection;
    let result;
    
    if (!Array.isArray(collection)){
        collectionCopy = Object.values(collection);
    }

    if (!acc){
        acc = collectionCopy[0];
        result = acc;
    }
    else {
        result = acc;
    }

    for (const value of collectionCopy){
    
        if (value === result){
            continue;
        }
        
        result = callback(result, value, collectionCopy);
    }
    
    return result
}

function myFind(collection, predicate){
    
    let collectionCopy = collection;
    let result;

    if (!Array.isArray(collection)){
        collectionCopy = Object.values(collection);
    }

    for (const value of collectionCopy){
        result = predicate(value);
        if (result){
            return value;
        }
    }
    return;


}

function myFilter(collection, predicate){

    let collectionCopy = collection;
    let resultArray = [];
    let result;

    if (!Array.isArray(collection)){
        collectionCopy = Object.values(collection);
    }

    for (const value of collectionCopy){
        result = predicate(value);
        if (result){
        resultArray.push(value);
        }
    }

    return resultArray;

}

function mySize(collection){

    let collectionCopy = collection;
    if (!Array.isArray(collection)){
        collectionCopy = Object.keys(collection);
    }

    return collectionCopy.length;
}

function myFirst(array, int){

    let newArray =[];
    if (!int){
        let firstElement = array[0];
        return firstElement;
    }

    for (let i = 0; i < int; i++){
        newArray.push(array[i]);
    }
    return newArray;
}

function myLast(array, int){

    let length = array.length;
    let index = length - int;
    
    if (!int){
        let lastElement = array[length - 1];
        return lastElement;
    }
    
    return array.slice(index);

}

function myKeys (obj){
    const resultArray = [];

    for (const key in obj){
        resultArray.push(key);
    }

    return resultArray
}

function myValues(obj){
    const resultArray = [];

    for (const key in obj){
        resultArray.push(obj[key]);
    }
    return resultArray
}
