import express, { Request, Response } from 'express';
import axios, { AxiosResponse } from 'axios';
import mysql from 'mysql';
import cors from 'cors';
import * as bcrypt from 'bcrypt';
const app = express();
app.use(cors());
app.use(express.json());
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
  database: 'DB'
});
connection.connect((err: any) => {
  if (err) {
    console.error('Error al intentar conectar a la base de datos ' + err.stack);
    return;
  } else {
    console.log('Conexión establecida ' + connection.threadId);
  }
});
app.post('/api/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const query = `SELECT * FROM Users WHERE email = ?`;
  connection.query(query, [email], async (error: any, results: any) => {
    if (error) {
      res.status(500).json({ error: 'Error en la consulta' });
    } else {
      if (results.length > 0) {
        const storedPassword = results[0].password;
        // Comparar la contraseña ingresada con la contraseña almacenada utilizando bcrypt
        const match = await bcrypt.compare(password, storedPassword);
        if (match) {
          // Contraseña válida, inicio de sesión exitoso
          res.status(200).json({ message: 'Inicio de sesión exitoso' });
        } else {
          // Contraseña inválida
          res.status(401).json({ error: 'Credenciales inválidas' });
        }
      } else {
        // No se encontró el usuario en la base de datos
        res.status(401).json({ error: 'Credenciales inválidas' });
      }
    }
  });
});
app.listen(3010, () => {
  console.log('Servidor funcionando en el puerto 3010');
});
const api = axios.create({
  baseURL: 'http://localhost:80',
});
export async function registerUser(firstname: string, lastname: string, profession: string, email: string, password: string): Promise<AxiosResponse> {
  try {
    const response = await api.post('/api/register', { firstname, lastname, profession, email, password });
    return response;
  } catch (error) {
    throw new Error('No se logró registrar el usuario.');
  }
}
export async function loginUser(email: string, password: string): Promise<AxiosResponse> {
  try {
    const response = await api.post('/api/login', { email, password });
    return response;
  } catch (error) {
    throw new Error('No se logró iniciar sesión.');
  }
}