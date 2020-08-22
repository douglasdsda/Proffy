export default interface ICreateUserDTO {
  name: string;
  sobrenome: string;
  email: string;
  password: string;
  bio?: string;
  whatsapp?: string;
}
