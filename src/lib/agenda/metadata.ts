import { LabeluEvent, type Status } from "./event"

const linkedDataFromEvent = (event: LabeluEvent) => {
  const [start, end] = event.date

  const ldStatus: Record<Status, string> = {
    'ongoing': 'https://schema.org/EventScheduled',
    'finished': 'https://schema.org/EventCancelled',
    'open': 'https://schema.org/EventScheduled',
  }  

  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.agenda,
    startDate: start,
    endDate: end,
    eventStatus: ldStatus[event.status],    
    location: {
      "@type": "Place",
      name: event.local ?? "",
    },
  }
}

export { linkedDataFromEvent }
