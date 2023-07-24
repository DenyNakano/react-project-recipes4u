import axios from 'axios'
class Api {
    constructor() {
        this.api = axios.create({
            baseURL: 'https://server-recipes.cyclic.app/'
        })
    }
    bestRecipes = async () => {
        try {
            const { data } = await this.api.get('/recipe/best')
            return data
        } catch (error) {
            throw error
        }
    }
    getRecipe = async (idRecipe) => {
        try {
            const { data } = await this.api.get(`/recipe/${idRecipe}`)
            return data
        } catch (error) {
            throw error
        }
    }
    getSearchRecipe = async (search) => {
        try {
            const { data } = await this.api.get(`/recipe/search?recipe=${search}`)
            return data
        } catch (error) {
            throw error
        }
    }
    postComment = async (idRecipe, comment) => {
        try {
            await this.api.post(`/comment/${idRecipe}`, comment)
        } catch (error) {
            throw error
        }
    }
}
export default new Api()