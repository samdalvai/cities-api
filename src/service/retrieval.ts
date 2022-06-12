import { cities } from '../data/cities'

export interface City {
    name: string,
    cap: string,
    province: string,
    altitude: number
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