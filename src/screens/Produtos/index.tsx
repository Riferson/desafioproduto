import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import {Container,Title,InputsArea,ListProduct,CardProduct,ImageArea,ImageProduct,ProductDetails,ViewDescription,ViewDescriptionArea,Name,Value,Description} from './styles';

export function Produtos(){
    const id = 1;
    function handleExecutar(){
    }
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
                <CardProduct>
                    <ImageArea>
                        <ImageProduct src='#'/>
                    </ImageArea>
                    <ProductDetails>
                        <Name>Produto1</Name>
                        <Value>R$ 23,50</Value>
                        <Description>Começo da descrição do produto...</Description>
                    </ProductDetails>
                    <ViewDescriptionArea>
                        <Link to={`ProductDescription/${id}`}>
                            <ViewDescription>Visualizar Descrição</ViewDescription>
                        </Link>
                    </ViewDescriptionArea>
                </CardProduct>
                <CardProduct>
                    <ImageArea>
                        <ImageProduct src='#'/>
                    </ImageArea>
                    <ProductDetails>
                        <Name>Produto2</Name>
                        <Value>R$ 53,50</Value>
                        <Description>Começo da descrição do produto...</Description>
                    </ProductDetails>
                    <ViewDescriptionArea>
                        <ViewDescription>Visualizar Descrição</ViewDescription>
                    </ViewDescriptionArea>
                </CardProduct>
                <CardProduct>
                    <ImageArea>
                        <ImageProduct src='#'/>
                    </ImageArea>
                    <ProductDetails>
                        <Name>Produto3</Name>
                        <Value>R$ 23,50</Value>
                        <Description>Começo da descrição do produto...</Description>
                    </ProductDetails>
                    <ViewDescriptionArea>
                        <ViewDescription>Visualizar Descrição</ViewDescription>
                    </ViewDescriptionArea>
                </CardProduct>
            </ListProduct>
        </Container>
    );
}