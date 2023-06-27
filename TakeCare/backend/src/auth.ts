import express, { Request, Response } from 'express';
import axios, { AxiosResponse } from 'axios';
import {} from 'mysql2/promise';
import cors from 'cors';
import * as bcrypt from 'bcrypt';

const app = express();
app.use(cors());
app.use(express.json());

// Se establece la conexión con la base de datos MySQL
const pool = require('mysql2/promise').createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
  database: 'DB',
  connectionLimit: 10,
});

// ESto evita el error de "Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at..."
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3010');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Método de inicio de sesión que envía una solicitud HTML POST con una query SQL al
// Servidor Web Apache para luego éste redirigirla a la DB
app.post('/api/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const query = `SELECT * FROM Users WHERE email = ?`;
  try {
    const [rows] = await pool.query(query, [email]);
    if (rows.length > 0) {
      const storedPassword = rows[0].password;
      const match = await bcrypt.compare(password, storedPassword);
      if (match) {
        res.status(200).json({ message: 'Inicio de sesión exitoso' });
      } else {
        res.status(401).json({ error: 'Credenciales inválidas' });
      }
    } else {
      res.status(401).json({ error: 'Credenciales inválidas' });
    }
  } catch (error) {
    console.error('Error al realizar la consulta:', error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

// Método de registro que envía una solicitud HTML POST con una query SQL al
// Servidor Web Apache para luego éste redirigirla a la DB
app.post('/api/register', async (req: Request, res: Response) => {
  const { firstname, lastname, email, profession, password, isAdmin } = req.body;

  try {
    const [existingUserRows] = await pool.query('SELECT * FROM Users WHERE email = ?', [email]);

    if (existingUserRows.length > 0) {
      res.status(400).json({ message: 'El usuario ya está registrado' });
    } else {
      const encryptedPassword = await bcrypt.hash(password, 10);
      await pool.execute(
        'INSERT INTO Users (firstname, lastname, email, profession, password, isAdmin) VALUES (?, ?, ?, ?, ?, ?)',
        [firstname, lastname, email, profession, encryptedPassword, isAdmin]
      );
      res.status(200).json({ message: 'Registro exitoso' });
    }
  } catch (error) {
    console.error('Error al realizar la consulta:', error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

app.listen(3010, () => {
  console.log('Servidor funcionando en el puerto 3010');
});

// Conexión al server de apache (puerto 80)
const api = axios.create({
  baseURL: 'http://localhost:80',
});

// Función ednpoint del registro de usuarios
export async function registerUser(
  firstname: string,
  lastname: string,
  profession: string,
  email: string,
  password: string,
  isAdmin: boolean
): Promise<AxiosResponse> {
  try {
    const response = await api.post('/api/register', {
      firstname,
      lastname,
      profession,
      email,
      password,
      isAdmin,
    });
    return response;
  } catch (error) {
    throw new Error('No se pudo registrar el usuario.');
  }
}
// Función endpoint del login de usuarios
export async function loginUser(email: string, password: string): Promise<AxiosResponse> {
  try {
    const response = await api.post('/api/login', { email, password });
    return response;
  } catch (error) {
    throw new Error('No se logró iniciar sesión.');
  }
}
