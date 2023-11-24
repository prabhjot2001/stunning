import  {imageGenerationPrompts} from '../constants'

export function getRandomPrompts(prompt){
     const randomPrompt = imageGenerationPrompts[Math.floor(Math.random()*imageGenerationPrompts.length)]
     if(randomPrompt === prompt) return getRandomPrompt(prompt)
     return randomPrompt;
}