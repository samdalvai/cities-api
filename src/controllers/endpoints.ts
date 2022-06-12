import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
import { Comparison, retrieveCitiesByAltitude, retrieveCitiesByCap, retrieveCitiesByName, retrieveCitiesByNameIncluded, retrieveCitiesByProvince, symbolToComparisonType } from '../service/retrieval'

const getCitiesByName = async (req: Request, res: Response, next: NextFunction) => {
    const name = req.params.name;

    console.log('Getting cities by name: ' + name)

    const cities = retrieveCitiesByName(name)

    return res.status(200).json({
        cities: cities
    });
}

const getCitiesByNameIncluded = async (req: Request, res: Response, next: NextFunction) => {
    const name = req.params.name;

    console.log('Getting cities by name: ' + name)

    const cities = retrieveCitiesByNameIncluded(name)

    return res.status(200).json({
        cities: cities
    });
}

const getCitiesByProvince = async (req: Request, res: Response, next: NextFunction) => {
    const province = req.params.province;

    console.log('Getting cities by province: ' + province)

    const cities = retrieveCitiesByProvince(province)

    return res.status(200).json({
        cities: cities
    });
}

const getCitiesByCap = async (req: Request, res: Response, next: NextFunction) => {
    const cap = req.params.cap;

    console.log('Getting cities by cap: ' + cap)

    const cities = retrieveCitiesByCap(cap)

    return res.status(200).json({
        cities: cities
    });
}

const getCitiesByAltitude = async (req: Request, res: Response, next: NextFunction) => {
    console.log("Hello")

    const params = req.params.altitude;

    // If values of altitude and comparison are not found, 
    // set them to default values 0 and =
    const altitudeStr = params.match(/[0-9]+/)?.toString()
    const altitude = altitudeStr ? parseInt(altitudeStr) : 0

    const comparisonStr = params.match(/[<=>]+/)?.toString()
    const comparison: Comparison = comparisonStr ? symbolToComparisonType(comparisonStr) : Comparison.equal

    console.log('Getting cities by altitude ' + altitude)

    const cities = retrieveCitiesByAltitude(altitude, comparison)

    return res.status(200).json({
        cities: cities
    });
}

export default { getCitiesByName, getCitiesByNameIncluded, getCitiesByProvince, getCitiesByCap, getCitiesByAltitude };
