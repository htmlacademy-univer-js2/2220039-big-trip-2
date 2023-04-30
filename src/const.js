export const POINT_TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

export const DateFormat = {
  MAIN: 'DD MMM', //число слева
  VIEW: 'hh:mm', //время часы  12:25 — 13:35
  EDIT: 'DD/MM/YY hh:mm', //19/03/19 00:00 в блоке редактирования точки
  SERVICE: 'YYYY-MM-DDThh:mm', //в разметке в тэге date-time event__date datetime = "" > 11 jul</time>
  SERVICE_MAIN: 'YYYY-MM-DD',
};
