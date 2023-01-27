import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import {Container,Title,InputsArea,ListProduct,CardProduct,ImageArea,ImageProduct,ProductDetails,ViewDescription,ViewDescriptionArea,Name,Value,Description} from './styles';
import {api} from '../../services/api';
import { ProductsDTO } from "../../dtos/ProductsDTO";


export function Produtos(){
    const [listProducts,setListProducts] = useState<ProductsDTO[]>([]);
    const [listagem,setListagem] = useState<ProductsDTO[]>([]);
    const [loading,setLoading] = useState<Boolean>(true);
    const [search,setSearch]=useState<string>('');

    async function fetchProducts(){
        try {
            const response = await api.get('/Produto');
            setListProducts(response.data);
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        setLoading(false);
        if(loading){
            fetchProducts();
            setLoading(true);
        }
        if(search === ''){
            fetchProducts();
            setListagem(listProducts);
        }else{
            setListagem(listProducts.filter((item)=>{
                if(item.nome.indexOf(search)>-1){
                    return true;
                }else{
                    return false;
                }
            }))
        }
    },[search,loading]);

    return(
        <Container>
            <Title> Produtos</Title>
            <InputsArea>
                <Link to={"/RegisterChangeProducts"}>
                    <Button title='Cadastrar novo Produto'/>
                </Link>
                <input type='search' value={search} placeholder="Pesquise seus produtos" onChange={(event) => setSearch(event.target.value)}></input>
            </InputsArea>
            <ListProduct>
                {listagem.map(product=>(
                    <CardProduct>
                        <ImageArea>
                            <ImageProduct src={"https://www.actbus.net/fleetwiki/images/8/84/Noimage.jpg"}/>
                        </ImageArea>
                        <ProductDetails>
                            <Name>{product.nome}</Name>
                            <Value>R$ {product.preco}</Value>
                            <Description>{product.descricao}</Description>
                        </ProductDetails>
                        <ViewDescriptionArea>
                            <Link to={`ProductDescription/${product.idProduto}`}>
                                <ViewDescription>Visualizar Descrição</ViewDescription>
                            </Link>
                        </ViewDescriptionArea>
                    </CardProduct>
                ))}
            </ListProduct>
        </Container>
    );
}