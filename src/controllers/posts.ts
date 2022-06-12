import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
import { retrieveCitiesByAltitude, retrieveCitiesByCap, retrieveCitiesByName, retrieveCitiesByNameIncluded, retrieveCitiesByProvince } from '../service/retrieval'

interface Post {
    userId: Number;
    id: Number;
    title: String;
    body: String;
}

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
    const altitude = req.params.altitude;
    const comparison = req.params.comparison;

    console.log('Getting cities by altitude ' + comparison + " " + altitude)

    const cities = retrieveCitiesByAltitude(altitude,comparison)

    return res.status(200).json({
        cities: cities
    });
}


export default { getCitiesByName, getCitiesByNameIncluded, getCitiesByProvince, getCitiesByCap, getCitiesByAltitude };
