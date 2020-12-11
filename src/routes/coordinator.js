//Login+SingUp

export const goToTelaInicial = (history) =>{
    history.push("/ltelaInicial")
  }
  export const goToLogin = (history) =>{
      history.push("/login")
  }
  export const goToSingUp = (history) =>{
    history.push("/singup")
  }
  export const goToCadastroEndereco = (history) =>{
    history.push("/cadastroEndereco")
  }
  
    //Home
  export const goToFeed = (history) =>{
    history.push("/feed")
  }
  export const goToSearchNoResults = (history) =>{
    history.push("/naoEncontrado")
  }
  export const goToSeachResults = (history) =>{
    history.push("/resultados")
  }
  
   //Carrinho
  export const goToCarrinho = (history) =>{
    history.push("/carrinho")
  }
  export const goToCarrinhoVazio = (history) =>{
    history.push("/carrinhoVazio")
  }
  
    //Perfil 
    export const goToEditProfile = (history) =>{
      history.push("/editarCadastro")
    }
    export const goToEditAddress = (history) =>{
      history.push("/editarEndereco")
    }
    export const goToProfile = (history) =>{
      history.push("/perfil")
    }
    export const goToPerfilHistoricoVazio = (history) =>{
      history.push("/perfilHistoricoVazio")
    }
  
  //Restaurante
  export const goToRestaurante= (history) =>{
      history.push("/restaurente")
    }
  
  export const goToBackPage = (history) =>{
      history.go(-1);
    }