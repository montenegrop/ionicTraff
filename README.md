# env
1. NODE_ENV reservada, "production" y "development" estan creadas

2. variable de entorno deben empezar con REACT_APP_
https://create-react-app.dev/docs/adding-custom-environment-variables/

# comandos
1. npx ionic serve

# produccion
1. se compila la carpeta build
por ejemplo,  
serve -s Documents/GitHub/ionicTraffico/build/

# state
1. gracias a redux toolkit se puede asignar directamente una propiedad del state, por ejemplo,  
state.isLoading = false  
en lugar de  
¿ state = { ...state, isLoading: false } ?
