import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductsDTO } from '../../dtos/ProductsDTO';
import { api } from '../../services/api';
import {Container,Title,FormArea} from './styles';

export function RegisterChangeProducts(){
    const [file,setFile] = useState('#');
    const {id} = useParams();
    const [produto,setProduto] = useState<ProductsDTO>();

    function handleChange(event:any){
        setFile('../../Images/' + event.target.files[0].name);
        console.log('file',file);
    }
  
    useEffect(()=>{
      async function fetchProduct() {
        try {
          const response = await api.get(`/Produto/${id}`);
          setProduto(response.data);
        } catch (error) {
          console.log(error);
        }
      }
      fetchProduct();
    },[]);

    return(
        <Container>
            <Title>Cadastro / Alteração</Title>
            <FormArea>
                <h4>Produto</h4>
                <input type='text'></input>
                <h4>Valor</h4>
                <input type='number'></input>
                <h4>Descrição</h4>
                <input type='text' value={temp?.descricao}></input>
                <input type='file' accept="image/png, image/jpeg, image/jpg" onChange={handleChange} />

                <img src={file} alt='teste'/>

                <Link to={"/"}>
                    <input type='submit' value='Salvar'></input>
                </Link>
            </FormArea>
        </Container>
    );
}