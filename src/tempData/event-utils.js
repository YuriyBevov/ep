let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'Какое то событие на целый день',
    start: todayStr
  },
  {
    id: createEventId(),
    title: 'Монтаж АМ улица Крыленко, 1к1с5',
    start: todayStr + 'T12:00:00',
  },


  {
    id: createEventId(),
    title: 'Монтаж АМ улица Крыленко, 1к1с5',
    start: todayStr + 'T34:30:00',
  },

  {
    id: createEventId(),
    title: 'Встреча с Некто Нектовым',
    start: todayStr + 'T14:00:00',
    eventType: 'meeting',
  },

  {
    id: createEventId(),
    title: 'Монтаж АМ улица Крыленко, 1к1с5',
    start: todayStr + 'T14:10:00',
  },

  {
    id: createEventId(),
    title: 'Монтаж АМ улица Крыленко, 1к1с5',
    start: todayStr + 'T14:30:00',
  },

  {
    id: createEventId(),
    title: 'Встреча с Некто Нектовым',
    start: todayStr + 'T15:00:00',
    eventType: 'meeting',
  },

  {
    id: createEventId(),
    title: 'Монтаж АМ улица Крыленко, 1к1с5',
    start: todayStr + 'T14:00:00',
    end: todayStr + 'T14:20:00'
  },
]

export function createEventId() {
  return String(eventGuid++)
}
