export interface Proveedor {
     nombreUsuario: string,
     nombreEmpresa: string,
     telefono: string,
     email: string,
     estatus: string,
     rfc: string,
     domicilio: string,
     img: string,
     publicidad: boolean,
     nombreProducto: string,
     precio: number,
     tipo: string,
     descuento: number,
     stock: number,
     _id: string,
     idProveedor: string,
     estrellasTotal: number,
     estrellasArray: Array<number> 
}

export let ProveedorCreate = {
     nombreUsuario: '',
     nombreEmpresa: '',
     telefono: '',
     email: '',
     password: '',
     rfc: '',
     domicilio: '',
     publicidad: true,
}