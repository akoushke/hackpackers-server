"use strict";
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
const axios_1 = __importDefault(require("axios"));
const express_1 = __importDefault(require("express"));
const remoteHQRouter = express_1.default.Router();
const axiosInstance = axios_1.default.create({
    baseURL: 'https://api.remotehq.com/v1',
    timeout: 1000,
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer Xo40ruUVyTvFcz7fk5XnDYKaeDuQ5QffIGw3b+KHjr0=",
    }
});
remoteHQRouter.get('/', (req, res) => {
    res.render('remotehq');
});
remoteHQRouter.post('/cb', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { kioskMode, incognitoMode, browserURL } = req.params;
    try {
        const { data } = yield axiosInstance.post('/cb', JSON.stringify({
            "kioskModeEnabled": kioskMode,
            "incognitoModeEnabled": incognitoMode,
            "browserURL": browserURL
        }));
        res.json(data);
    }
    catch (error) {
        res.send(error);
    }
}));
remoteHQRouter.delete('/:instanceURN', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { instanceURN } = req.params;
    try {
        yield axiosInstance.delete(`/cb/${instanceURN}`);
    }
    catch (error) {
        res.send(error);
    }
}));
exports.default = remoteHQRouter;
//# sourceMappingURL=remoteHQ.js.map