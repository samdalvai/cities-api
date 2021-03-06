import { cities } from '../data/cities'

export  interface City {
    name: string,
    zip: string,
    province: string,
    altitude: number
}

export enum Comparison {
    equal,
    lower,
    lowerequal,
    greater,
    greaterequal
}

export const printCity = (index: number): void => {
    console.log(cities[index])
}

// Return an array of cities instead of one city, because there might be
// more than one city with the same name
export const retrieveCitiesByName = (name: string): City[] => {
    return cities.filter(city => city.name.toLowerCase() === name.toLowerCase())
}

// Same as above, but returns also partial results
export const retrieveCitiesByNameIncluded = (name: string): City[] => {
    return cities.filter(city => city.name.toLowerCase().includes(name.toLowerCase()))
}

export const retrieveCitiesByProvince = (province: string): City[] => {
    return cities.filter(city => city.province.toLowerCase() === province.toLowerCase())
}

export const retrieveCitiesByZipCode = (zip: string): City[] => {
    return cities.filter(city => city.zip === zip)
}

export const retrieveCitiesByAltitude = (altitude: number, comparison: Comparison): City[] => {
    

    return cities.filter(city => compareByComparisonType(city.altitude, altitude, comparison))
}

export const compareByComparisonType = (a: number, b: number, comparison: Comparison): Boolean => {
    switch(comparison){
        case Comparison.equal :
            return a === b;
        case Comparison.lower :
            return a < b;
        case Comparison.greater :
            return a > b;
        default:
            throw new Error("Undefined comparison type");
    }   
}

export const symbolToComparisonType = (comparisonSymbol: string): Comparison => {
    switch(comparisonSymbol){
        case  '=':
            return Comparison.equal;
        case '<' :
            return Comparison.lower;
        case '>' :
            return Comparison.greater;
        default:
            throw new Error("Undefined comparison symbol: " + comparisonSymbol);
    }   
}