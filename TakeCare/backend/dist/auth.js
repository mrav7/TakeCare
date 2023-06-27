"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const cors_1 = __importDefault(require("cors"));
const bcrypt = __importStar(require("bcrypt"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
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
app.post('/api/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const query = `SELECT * FROM Users WHERE email = ?`;
    try {
        const [rows] = yield pool.query(query, [email]);
        if (rows.length > 0) {
            const storedPassword = rows[0].password;
            const match = yield bcrypt.compare(password, storedPassword);
            if (match) {
                res.status(200).json({ message: 'Inicio de sesión exitoso' });
            }
            else {
                res.status(401).json({ error: 'Credenciales inválidas' });
            }
        }
        else {
            res.status(401).json({ error: 'Credenciales inválidas' });
        }
    }
    catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}));
// Método de registro que envía una solicitud HTML POST con una query SQL al
// Servidor Web Apache para luego éste redirigirla a la DB
app.post('/api/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstname, lastname, email, profession, password, isAdmin } = req.body;
    try {
        const [existingUserRows] = yield pool.query('SELECT * FROM Users WHERE email = ?', [email]);
        if (existingUserRows.length > 0) {
            res.status(400).json({ message: 'El usuario ya está registrado' });
        }
        else {
            const encryptedPassword = yield bcrypt.hash(password, 10);
            yield pool.execute('INSERT INTO Users (firstname, lastname, email, profession, password, isAdmin) VALUES (?, ?, ?, ?, ?, ?)', [firstname, lastname, email, profession, encryptedPassword, isAdmin]);
            res.status(200).json({ message: 'Registro exitoso' });
        }
    }
    catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}));
app.listen(3010, () => {
    console.log('Servidor funcionando en el puerto 3010');
});
// Conexión al server de apache (puerto 80)
const api = axios_1.default.create({
    baseURL: 'http://localhost:80',
});
// Función ednpoint del registro de usuarios
function registerUser(firstname, lastname, profession, email, password, isAdmin) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield api.post('/api/register', {
                firstname,
                lastname,
                profession,
                email,
                password,
                isAdmin,
            });
            return response;
        }
        catch (error) {
            throw new Error('No se pudo registrar el usuario.');
        }
    });
}
exports.registerUser = registerUser;
// Función endpoint del login de usuarios
function loginUser(email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield api.post('/api/login', { email, password });
            return response;
        }
        catch (error) {
            throw new Error('No se logró iniciar sesión.');
        }
    });
}
exports.loginUser = loginUser;
