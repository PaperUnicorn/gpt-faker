import axios from "axios";
import { GPT_MODEL, MAX_TOKENS, OPEN_AI_BASE_URL, TEMPERATURE } from "../constant";

interface ChatCompletionChoices {
    text: string;
    index: number;
    logprobs: string;
    finish_reason: string;
}

interface ChatCompletionResponse {
    choices: ChatCompletionChoices[]
}

export const getRandomValueFromDescription = async (description: string, count: number = 1 ) => {
    console.log("clicked")
    const request = {
        model: GPT_MODEL,
        prompt: `list ${count} random ${description}`,
        max_tokens: MAX_TOKENS,
        temperature: TEMPERATURE
    }

    
    try{
        const { data : {choices} } = await axios.post<ChatCompletionResponse>(OPEN_AI_BASE_URL+"/completions",request, {
            headers:{
                Authorization: `Bearer ${process.env.REACT_APP_OPEN_AI_TOKEN}`
            }  
        })
       return choices[0].text
    } catch(err){
        console.log(err)
    }

}