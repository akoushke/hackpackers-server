import axios from 'axios';
import express from 'express';

const remoteHQRouter = express.Router();

const axiosInstance = axios.create({
  baseURL: 'https://api.remotehq.com/v1',
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer Xo40ruUVyTvFcz7fk5XnDYKaeDuQ5QffIGw3b+KHjr0=",
  }
});

remoteHQRouter.get('/', (req, res) => {
  res.render('remotehq')
});

remoteHQRouter.post('/cb', async (req, res) => {
  const {kioskMode, incognitoMode, browserURL} :any = req.params;
  try {
    const {data} = await axiosInstance.post('/cb', JSON.stringify({
      "kioskModeEnabled": kioskMode,
      "incognitoModeEnabled": incognitoMode,
      "browserURL": browserURL
    }));

    res.json(data);


  } catch (error) {
    res.send(error);
  }
});

remoteHQRouter.delete('/:instanceURN', async (req, res) => {
  const {instanceURN} = req.params;
  try {
    await axiosInstance.delete(`/cb/${instanceURN}`);
  } catch (error) {
    res.send(error);
  }
});

export default remoteHQRouter;
