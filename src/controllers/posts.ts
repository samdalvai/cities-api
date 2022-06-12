import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
import { retrieveCitiesByCap, retrieveCitiesByName, retrieveCitiesByNameIncluded, retrieveCitiesByProvince } from '../service/retrieval'

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

// getting all posts
const getPosts = async (req: Request, res: Response, next: NextFunction) => {
    // get some posts
    let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    let posts: [Post] = result.data;
    return res.status(200).json({
        message: posts
    });
};

// getting a single post
const getPost = async (req: Request, res: Response, next: NextFunction) => {
    // get the post id from the req
    let id: string = req.params.id;
    // get the post
    let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    let post: Post = result.data;
    return res.status(200).json({
        message: post
    });
};

// updating a post
const updatePost = async (req: Request, res: Response, next: NextFunction) => {
    // get the post id from the req.params
    let id: string = req.params.id;
    // get the data from req.body
    let title: string = req.body.title ?? null;
    let body: string = req.body.body ?? null;
    // update the post
    let response: AxiosResponse = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        ...(title && { title }),
        ...(body && { body })
    });
    // return response
    return res.status(200).json({
        message: response.data
    });
};

// deleting a post
const deletePost = async (req: Request, res: Response, next: NextFunction) => {
    // get the post id from req.params
    let id: string = req.params.id;
    // delete the post
    let response: AxiosResponse = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    // return response
    return res.status(200).json({
        message: 'post deleted successfully'
    });
};

// adding a post
const addPost = async (req: Request, res: Response, next: NextFunction) => {
    // get the data from req.body
    let title: string = req.body.title;
    let body: string = req.body.body;
    // add the post
    let response: AxiosResponse = await axios.post(`https://jsonplaceholder.typicode.com/posts`, {
        title,
        body
    });
    // return response
    return res.status(200).json({
        message: response.data
    });
};

export default { getPosts, getPost, updatePost, deletePost, addPost, getCitiesByName, getCitiesByNameIncluded, getCitiesByProvince, getCitiesByCap };
