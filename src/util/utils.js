import dayjs from 'dayjs';
import { POINT_TYPES } from '../const';

export const humanizeDate = (rawDate, dateFormat) => dayjs(rawDate).format(dateFormat);
export const getDuration = (startDate, endDate) => {
  const days = dayjs(endDate).diff(dayjs(startDate), 'd');
  const hours = dayjs(endDate).subtract(days, 'd').diff(dayjs(startDate), 'h');
  const minutes = dayjs(endDate).subtract(days, 'd').subtract(hours, 'h').diff(dayjs(startDate), 'm');

  if (days > 0) {
    return `${days}D ${hours}H ${minutes}M`;
  } else if (hours > 0) {
    return `${hours}H ${minutes}M`;
  } else {
    return `${minutes}M`;
  }
};

export const getDefaultPoint = () => ({
  'basePrice': 0,
  'dateFrom': new Date().getTime(),
  'dateTo': new Date().getTime(),
  'destination': 0,
  'isFavorite': false,
  'offers': [],
  'type': POINT_TYPES[0]
});
