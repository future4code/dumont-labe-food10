import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width:100vw; height:100vh;
  display:grid;
  justify-items:center;
   #lancheDoTopo{width:60vw; height:60vh;border:1px solid black;}
   #principais{width:80vw; height:70vh;border:1px solid black;position:relative;}
        #principais > div{border:1px solid black;position:absolute;height:100%;width:49%;} #area2{right:0px;}
            #lanche{display:flex; flex-direction:row;}
   #acompanhamentos{width:60vw; height:50vh;border:1px solid black;}
`
const Restaurante = e => {
    
    return(
        <Container>
            <div id='lancheDoTopo'>
               
            </div>
            
            <div id='principais'>
                
                <div id='area1'>
                    <div id='lanche'>
                    <img src={'http://www.emporiodenoticias.com/wp-content/uploads/2017/09/Xikos.jpg'} width='400px' height='300px'/    >
                    <h1>Xikos</h1>
                    </div>
                </div>

                <div id='area2'>

                </div>

            </div>
            <div id='acompanhamentos'>
          
            </div>
        </Container>
    )
} 

export default Restaurante