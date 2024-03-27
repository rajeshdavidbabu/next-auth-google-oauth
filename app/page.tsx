import { auth, EnrichedSession } from 'auth';
import { FetchCalendarEvents } from '@/components/calendar-component';

export default async function Index() {
  const session = (await auth()) as EnrichedSession;

  const accessTokenExpiryDate = new Date(
    session.accessTokenExpiresAt
  ).toLocaleString();
  const accessTokenIssueDate = new Date(
    session.accessTokenIssuedAt
  ).toLocaleString();

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">NextAuth.js Example</h1>
      <div className="flex flex-col rounded-md bg-neutral-100">
        <div className="p-4 font-bold rounded-t-md bg-neutral-200">
          Current Session
        </div>
        <pre className="py-6 px-4 whitespace-pre-wrap break-all">
          {JSON.stringify(
            { ...session, accessTokenIssueDate, accessTokenExpiryDate },
            null,
            2
          )}
        </pre>
        <FetchCalendarEvents />
      </div>
    </div>
  );
}
