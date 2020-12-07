import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width:100vw; height:100vh;
  display:grid;
  justify-items:center;
   #lancheDoTopo{width:80vw; height:60vh;border:1px solid black;display:grid;
   grid-template-columns:repeat(12, 1fr); grid-template-rows:repeat(12, 1fr);}
   #lancheDoTopo > img{grid-area:1/4/9/10; width:100%;height:100%;}
   #lancheDoTopo > h1{grid-area:9/5/9/10;}
   #lancheDoTopo > div{grid-area:10/1/13/13;font-size:20px;}

   #principais{width:80vw; height:80vh;border:1px solid black; display:flex; justify-content:space-between;}
        #principais > div{border:1px solid black;height:100%;width:45%; } 
            .lanche{display:grid;
                grid-template-columns:repeat(12, 1fr);
                grid-template-rows:repeat(12, 1fr); 
                border:1px solid red; width:100%;height:25%;}
            .lanche > img {width:100%;height:100%; grid-column:1/6;grid-row:1/13; }
            .lanche > h1 {width:100%;height:100%; grid-column:6/12;grid-row:1/4; }
            .lanche > p {width:100%;height:100%; grid-column:7/12;grid-row:5/9; font-size:20px;}
            .lanche > span{grid-column:7/12;grid-row:11/13; font-size:32px;}
            .lanche > button{grid-column:10/13;grid-row:11/13; }
            
   #acompanhamentos{width:80vw; height:50vh;border:1px solid black;}
`
const Lanche = (props) => {
    return(           
                    <div className='lanche'>
                        <img src={props.link}/>
                        <h1>{props.name}</h1>  
                        <p>{props.igredientes}</p>
                        <span>{props.preco}</span>
                        <button>Adicionar</button>
                    </div>
    )
}

const Restaurante = e => {
    
    return(
        <Container>
            <div id='lancheDoTopo'>
               <img src = {'https://i.pinimg.com/originals/60/9f/82/609f8221a97a4f91c9bc7c1ae3c9728b.jpg'}/>
               <h1>Combo detona figado, inflama intestino</h1>
               <div>
                    <p>20 - 40 min</p>
                    <p>frete:R$10,00</p>
                    <p>planeta terra,america do sul, brasil</p>
               </div>
            </div>
               
            <div id='principais'>
                <div id='area1'>
                    <Lanche/>
                    <Lanche/>
                    <Lanche/>
                    <Lanche/>
                </div>

                <div id='area2'>
                    <Lanche/>
                    <Lanche/>
                    <Lanche/>
                    <Lanche/>
                </div>

                
                              
            </div>

            
        </Container>
        
    )
} 

export default Restaurante

               