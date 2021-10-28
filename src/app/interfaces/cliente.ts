export interface Cliente {
     nombreUsuario: string,
     nombreRestaurante: string,
     telefono: string,
     email: string,
     password: string,
     publicidad: boolean,
     img: string,
}

export let ClienteCreate = {
     nombreUsuario: '',
     nombreRestaurante: '',
     telefono: '',
     email: '',
     password: '',
     publicidad: true,
     img: ''
}