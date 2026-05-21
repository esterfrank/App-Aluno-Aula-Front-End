export async function buscarUsuario(username){
    const response = await fetch(
        `http://api.github.com/users/${username}`
    );

    if (!response.ok){
        throw new Error(
            `Usuário - ${username} - não encontrado!`
        );
    };

    return response.json();
};
