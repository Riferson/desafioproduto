import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import {Container,Title,InputsArea,ListProduct,CardProduct,ImageArea,ImageProduct,ProductDetails,ViewDescription,ViewDescriptionArea,Name,Value,Description} from './styles';
import {api} from '../../services/api';
import { ProductsDTO } from "../../dtos/ProductsDTO";

export function Produtos(){
    const [listProducts,setListProducts] = useState<ProductsDTO[]>([]);
    const [loading,setLoading] = useState<Boolean>(true);

    useEffect(()=>{
        async function fetchProducts(){
            try {
                const response = await api.get('/Produto');
                setListProducts(response.data);
                console.log('resposta',response);
            } catch (error) {
                console.log(error)
            }finally{
                setLoading(false);
            }
        }
        fetchProducts();
    },[]);

    return(
        <Container>
            <Title> Produtos</Title>
            <InputsArea>
                <Link to={"/RegisterChangeProducts"}>
                    <Button title='Cadastrar novo Produto'/>
                </Link>
                <input type='search' placeholder="Pesquise seus produtos"></input>
            </InputsArea>
            <ListProduct>
                {listProducts.map(product=>(
                    <CardProduct>
                        <ImageArea>
                            <ImageProduct src='#'/>
                        </ImageArea>
                        <ProductDetails>
                            <Name>{product.nome}</Name>
                            <Value>R$ {product.preco}</Value>
                            <Description>{product.descricao}</Description>
                        </ProductDetails>
                        <ViewDescriptionArea>
                            <Link to={`ProductDescription/`}>
                                <ViewDescription>Visualizar Descrição</ViewDescription>
                            </Link>
                        </ViewDescriptionArea>
                    </CardProduct>
                ))}
            </ListProduct>
        </Container>
    );
}