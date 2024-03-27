'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';

type Event = {
  summary: string;
  description: string;
};

export const FetchCalendarEvents = () => {
  const [events, setEvents] = useState<Event[] | null>(null);

  const fetchCalendarEvents = async () => {
    const response = await fetch('/api/fetch-calendar-events');
    const data: { events: Event[] } = await response.json();
    console.log('Events ', data);
    setEvents(data.events);
  };

  return (
    <>
      <Button onClick={fetchCalendarEvents}>Fetch Calendar Events</Button>
      {events && (
        <ul className="space-y-4">
          {events.map((event, index) => (
            <li key={index} className="p-4 border rounded shadow">
              <h2 className="text-xl font-bold">{event.summary}</h2>
              <p className="text-gray-600">{event.description}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
