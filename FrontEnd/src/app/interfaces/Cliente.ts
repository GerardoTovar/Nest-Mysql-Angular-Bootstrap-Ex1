export interface Cliente {
    id?: string;
    nombre: string;
    apellido: string;
    edad?: number;
    sexo: string;
    fecha_registro?: Date;
    direccion: string;
    activo: boolean;
}
