import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';
import { Button } from '../Button';

import {Container,Title,Attention,ButtonArea} from './styles';

interface DeleteModalProps{
    isOpen:boolean;
    onRequestClose:()=>void;
    id:string|undefined;
}

export function DeleteModal({isOpen,onRequestClose,id}:DeleteModalProps){

    const[idDelete,SetIdDelete] = useState('');

    async function DeleteProduct(){
        try {
             const response = await api.delete('/Produto/'+ id);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        SetIdDelete(id!);
    },[])


    return(
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName='react-modal-overlay' className='react-modal-content'>
        
        <Container>
            <Title>Atenção</Title>
            <Attention>Confirmar a exclusão do produto?</Attention>
            <ButtonArea>
                <Link to={'/'}>
                    <input type='button' value='Confirmar' onClick={DeleteProduct}/>
                </Link>
                <input type='button' value='Cancelar' onClick={onRequestClose}/>
                
            </ButtonArea>
        </Container>
      </Modal>
    );
}