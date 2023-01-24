import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductsDTO } from '../../dtos/ProductsDTO';
import { api } from '../../services/api';
import {Container,Title,FormArea} from './styles';
import {v4 as uuidv4} from 'uuid';
export function RegisterChangeProducts(){
    const [name,SetName] = useState('');
    const [valor,SetValor] = useState(0);
    const [description,SetDescription] = useState('');
    const [image,SetImage] = useState('#');
    const {id} = useParams();
    const [produto,setProduto] = useState<ProductsDTO>();
  
  const data = {
    idProduto :uuidv4(),
    descricao: description,
    imagem:image,
    nome: name,
    preco:valor,
  }


  useEffect(()=>{
    async function fetchProduct() {
        try {
          console.log('entrou para alterar o role');
          const response = await api.get('Produto/'+id!);
          setProduto(response.data);
          SetName(produto?.nome!);
          SetValor(produto?.preco!);
          SetDescription(produto?.descricao!);

          console.log('nome',name,description,valor);
      } catch (error) {
          console.log(error);
      }
    }
    fetchProduct();
    
  },[]);



  async function atualizarDados() {
    if(id! > '0'){
      
     
    }else{
      try {
        await api.post('Produto/',data);

      } catch (error) {
        console.log(error);
      }

    }
  }

    

    return(
        <Container>
            <Title>Cadastro / Alteração</Title>
            <FormArea>
                <h4>Produto</h4>
                <input type='text' value={name} onChange={event =>SetName(event.target.value)}/>
                <h4>Valor</h4>
                <input type='number' value={valor} onChange={event => SetValor(Number(event.target.value))}/>
                <h4>Descrição</h4>
                <input type='text' value={description} onChange={event =>SetDescription(event.target.value)}/>
                <input type='file' accept="image/png, image/jpeg, image/jpg" onChange={event => {SetImage(event.target.value)}} />

                <img src={`../../Images/${image}`} alt='teste'/>

                <Link to={"/"}>
                    <input type='submit' value='Salvar' onClick={atualizarDados}/>
                </Link>
            </FormArea>
        </Container>
    );
}