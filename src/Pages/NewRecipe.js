import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const NewRecipe = () => {
  const [Autor, setAutor] = useState('')
  const [Receita, setReceita] = useState('')
  const [Descrição, setDescrição] = useState('')
  const [Ingredientes, setIngredientes] = useState('')
  const [Preparo, setPreparo] = useState('')
  const [Imagem, setImagem] = useState('')
  const [Categoria, setCategoria] = useState('')
  const [Tempo, setTempo] = useState('')
  const [Dificuldade, setDificuldade] = useState('') 
  const [Avaliação, setAvaliação] = useState('')                                                                                    
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault () 
    let NewRecipe = {
      type: Categoria,
      name: Receita,
      description: Descrição,
      ingredients: Ingredientes.split(','),
      preparation: Preparo.split(','),
      time: Tempo,
      level: Dificuldade,
      rate: Avaliação,
      image: Imagem,
    }
    
    try {
      await axios.post(
        "https://ironrest.herokuapp.com/recipes4u" , NewRecipe
      );
      setCategoria('')
      setReceita('')
      setDescrição('')
      setIngredientes('')
      setPreparo('')
      setTempo('')
      setDificuldade('')
      setAvaliação('')
      setImagem('')
      navigate('/')

    } catch (error) {
    console.log(error);
  }}  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Autor: </label>
        <input type="text" value={Autor} onChange={(e) =>{setAutor(e.target.value)}}/>
      </div>
      <div>
        <label>Receita: </label>
        <input type="text" value={Receita} onChange={(e) =>{setReceita(e.target.value)}}/>
      </div>
      <div>
        <label>Descrição: </label>
        <input type="text" value={Descrição} onChange={(e) =>{setDescrição(e.target.value)}}/>
      </div>
      <div>
        <label>Ingredientes: </label>
        <input type="text" value={Ingredientes} onChange={(e) =>{setIngredientes(e.target.value)}}/>
      </div>
      <div>
        <label>Preparo: </label>
        <input type="text" value={Preparo} onChange={(e) =>{setPreparo(e.target.value)}}/>
      </div>
      <div>
        <label>Imagem: </label>
        <input type="text" value={Imagem} onChange={(e) =>{setImagem(e.target.value)}}/>
      </div>
      <div>
        <label>Categoria: </label>
        {/*<input type="text" value={Categoria} onChange={(e) =>{setCategoria(e.target.value)}}/>*/}
        <select value={Categoria} onChange={(e) =>{setCategoria(e.target.value)}}>
          <option>Prato Principal</option>
          <option>Drinks</option>
          <option>Acompanhamentos</option>
          <option>Massas</option>
          <option>Sobremesas</option>
        </select>
      </div>
      <div>
        <label>Tempo: </label>
        <input type="text" value={Tempo} onChange={(e) =>{setTempo(e.target.value)}}/>
      </div>
      <div>
        <label>Dificuldade: </label>
        {/*<input type="text" value={Dificuldade} onChange={(e) =>{setDificuldade(e.target.value)}}/>*/}
        <select value={Dificuldade} onChange={(e) =>{setDificuldade(e.target.value)}}>
          <option>😄 Fácil</option>
          <option>😅 Moderado</option>
          <option>😓 Difícil</option>
        </select>
      </div>
      <div>
        <label>Avaliação: </label>
        <input type="text" value={Avaliação} onChange={(e) =>{setAvaliação(e.target.value)}}/>
      </div>
      <button>
        Salvar
      </button>
    </form>

  )
  }

