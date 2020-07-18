import { useState, useEffect } from 'react';

export const useGeoLocation = (): {
  latitude: number;
  longitude: number;
  error: string;
} => {
  const [geolocation, setGeolocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [error, setError] = useState('');

  const onChange: PositionCallback = (position: Position): void => {
    const { coords } = position;
    setGeolocation({
      latitude: coords.latitude,
      longitude: coords.longitude,
    });
  };
  const onError: PositionErrorCallback = (error: PositionError): void => {
    setError(error.message);
  };
  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setError('Geolocation is not supported');
      return;
    }
    const watcher = geo.watchPosition(onChange, onError);
    return (): void => geo.clearWatch(watcher);
  }, []);
  return { ...geolocation, error };
};
