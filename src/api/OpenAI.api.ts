import axios from "axios";
import { OPEN_AI_BASE_URL } from "../constant";


// const response = {
//     "warning": "This model version is deprecated. Migrate before January 4, 2024 to avoid disruption of service. Learn more https://platform.openai.com/docs/deprecations",
//     "id": "cmpl-7rRnFlBNgYA7iZB6rTdOfKlJ0mXi7",
//     "object": "text_completion",
//     "created": 1692972577,
//     "model": "text-davinci-003",
//     "choices": [
//         {
//             "text": " numbers\n\n1. 8400 6997 0526\n2. 6603 5587 6014\n3. 0644 8074 5300\n4. 5261 4474 5145\n5. 9062 4267 8494\n6. 1543 5800 5286\n7. 2513 4343 5359\n8. 3179 8449 5341\n9. 0103 9196 3846\n10. 1140 9502 3171",
//             "index": 0,
//             "logprobs": null,
//             "finish_reason": "stop"
//         }
//     ],
//     "usage": {
//         "prompt_tokens": 7,
//         "completion_tokens": 94,
//         "total_tokens": 101
//     }
// }

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
    const request = {
        "model": "text-davinci-003",
        "prompt": `list ${count} random ${description}`,
        "max_tokens": 250,
        "temperature": 0.7
    }

    const { data: { choices } } = await axios.post<ChatCompletionResponse>(OPEN_AI_BASE_URL+"/completions",request, {
        headers:{
            Authorization: `Bearer ${process.env.REACT_APP_OPEN_AI_TOKEN}`
        }
    })
    console.log(choices[0].text)
}