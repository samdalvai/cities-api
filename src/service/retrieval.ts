import { cities } from '../data/cities'

export  interface City {
    name: string,
    cap: string,
    province: string,
    altitude: number
}

export enum Comparison {
    equal,
    lower,
    greater
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

export const retrieveCitiesByCap = (cap: string): City[] => {
    return cities.filter(city => city.cap === cap)
}

export const retrieveCitiesByAltitude = (altitude: string, comparison: string): City[] => {
    const altitudeNum = parseInt(altitude);
    const comparisonCom = stringToComparison(comparison);

    return cities.filter(city => 
        comparisonCom === Comparison.equal ? city.altitude === altitudeNum :
        comparisonCom === Comparison.lower ? city.altitude <= altitudeNum :
        city.altitude >= altitudeNum);
}

export const stringToComparison = (comparison: string): Comparison => {
    switch(comparison){
        case "equal" :
            return Comparison.equal
        case "lower" :
            return Comparison.lower
        case "greater" :
            return Comparison.greater
    }

    throw new Error("Unsupported comparison type: " + comparison)
}