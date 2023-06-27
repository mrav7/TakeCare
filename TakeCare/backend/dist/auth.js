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
const mysql_1 = __importDefault(require("mysql"));
const cors_1 = __importDefault(require("cors"));
const bcrypt = __importStar(require("bcrypt"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const connection = mysql_1.default.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'DB'
});
connection.connect((err) => {
    if (err) {
        console.error('Error al intentar conectar a la base de datos ' + err.stack);
        return;
    }
    else {
        console.log('Conexión establecida ' + connection.threadId);
    }
});
app.post('/api/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const query = `SELECT * FROM Users WHERE email = ?`;
    connection.query(query, [email], (error, results) => __awaiter(void 0, void 0, void 0, function* () {
        if (error) {
            res.status(500).json({ error: 'Error en la consulta' });
        }
        else {
            if (results.length > 0) {
                const storedPassword = results[0].password;
                // Comparar la contraseña ingresada con la contraseña almacenada utilizando bcrypt
                const match = yield bcrypt.compare(password, storedPassword);
                if (match) {
                    // Contraseña válida, inicio de sesión exitoso
                    res.status(200).json({ message: 'Inicio de sesión exitoso' });
                }
                else {
                    // Contraseña inválida
                    res.status(401).json({ error: 'Credenciales inválidas' });
                }
            }
            else {
                // No se encontró el usuario en la base de datos
                res.status(401).json({ error: 'Credenciales inválidas' });
            }
        }
    }));
}));
app.listen(3010, () => {
    console.log('Servidor funcionando en el puerto 3010');
});
const api = axios_1.default.create({
    baseURL: 'http://localhost:80',
});
function registerUser(firstname, lastname, profession, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield api.post('/api/register', { firstname, lastname, profession, email, password });
            return response;
        }
        catch (error) {
            throw new Error('No se logró registrar el usuario.');
        }
    });
}
exports.registerUser = registerUser;
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
