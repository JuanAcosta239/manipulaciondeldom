// JavaScript

// Función para cargar los tipos de Pokémon
function loadPokemonTypes() {
    // Realiza una solicitud a la API de PokeAPI para obtener los tipos
    // Llena el select con las opciones de tipos
}

// Función para cargar y mostrar los Pokémons filtrados
function loadFilteredPokemons(type) {
    // Realiza una solicitud a la API de PokeAPI para obtener los Pokémons del tipo seleccionado
    // Crea elementos HTML para mostrar los Pokémons en el grid
    // Maneja el clic en un Pokémon para redirigir a la página de detalles
}

// Maneja el evento de cambio en el tipo seleccionado
document.getElementById('type').addEventListener('change', function() {
    const selectedType = this.value;
    loadFilteredPokemons(selectedType);
});

// Llama a la función de carga de tipos al cargar la página
loadPokemonTypes();
