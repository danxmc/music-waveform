import { v4 as uuidv4 } from 'uuid';
import logger from '../modules/logger';

const audioBucket: Audio[] = [];

export const getAll: ExpressAsyncController = async (req, res) => {
  try {
    const response = audioBucket;

    res.json(response);
  } catch (error) {
    logger.error(error);
    res.json(error);
  }
};

export const getAudio: ExpressAsyncController = async (req, res) => {
  try {
    const { audioId } = req.params;

    const response = audioBucket.find((audio) => {
      return audio.id === audioId;
    });

    res.json(response);
  } catch (error) {
    logger.error(error);
    res.json(error);
  }
};

export const createAudio: ExpressAsyncController = async (req, res) => {
  try {
    const { name } = req.body;

    const newAudio: NewAudio = {
      name,
    };

    const response = await audioBucket.push({
      ...newAudio,
      id: uuidv4(),
    });

    res.json(audioBucket[audioBucket.length - 1]);
  } catch (error) {
    logger.error(error);
    res.json(error);
  }
};

export const updateAudio: ExpressAsyncController = async (req, res) => {
  try {
    const { audioId } = req.params;
    const { name } = req.body;

    let audioToUpdate = audioBucket.find((audio) => {
      return audio.id === audioId;
    });

    if (audioToUpdate) {
      audioToUpdate = {
        ...audioToUpdate,
        name,
      };
      const index = audioBucket.indexOf(audioToUpdate);
      if (index > -1) {
        audioBucket.splice(index, 1);
      }
      const response = audioBucket.push(audioToUpdate);
      res.json(audioBucket[audioBucket.length - 1]);
    } else {
      res.json(404);
    }
  } catch (error) {
    logger.error(error);
    res.json(error);
  }
};

export const deleteAudio: ExpressAsyncController = async (req, res) => {
  try {
    const { audioId } = req.params;

    const audioToDestroy = audioBucket.find((audio) => {
      return audio.id === audioId;
    });

    if (audioToDestroy) {
      const index = audioBucket.indexOf(audioToDestroy);
      if (index > -1) {
        audioBucket.splice(index, 1);
      }
    } else {
      res.json(404);
    }
    res.json(audioToDestroy);
  } catch (error) {
    logger.error(error);
    res.json(error);
  }
};
