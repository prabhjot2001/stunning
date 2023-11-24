import express from "express";
import OpenAI from "openai";
import * as dotenv from 'dotenv'
// import {Configuration, OpenAIApi} from 'openai'


import Post from '../mongodb/models/post.js'

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

router.route('/').get((req, res) => {
    res.send('hello from prabhjoit singh')
})


router.route('/').post(async (req, res) => {
    try {
        const { prompt } = req.body;
        //    const aiResponse = await openai.createImage({
        //     prompt,
        //     n:  1,
        //     size : '1024x1024',
        //     response_format: 'b64_json',
        //    });
        const aiResponse = await openai.images.generate({
            prompt,
            n: 1,
            size: '512x512',
            response_format: 'b64_json'
        });
        // const url = aiResponse.data;
        // console.log(url)
        const image = aiResponse.data.data[0].b64_json;
        res.status(200).json({ photo: image });
        // res.status(200).json({url})

    } catch (error) {
        console.log(error);
        // res.status(500).send(error?.response.data.error.message)
        res.status(500).send(`error ${error.message}`)
    }
})

export default router;