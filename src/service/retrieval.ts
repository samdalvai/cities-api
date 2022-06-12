import { cities } from '../data/cities'

export interface City {
    name: string,
    cap: string,
    province: string,
    altitude: number
}


export const printCity = (): void => {
    console.log(cities[100])
}

