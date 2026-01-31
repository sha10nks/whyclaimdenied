import { Link } from 'react-router-dom';

const STATES = [
  {
    name: 'California',
    autoPath: '/auto-insurance-claims-denied-california',
    healthPath: '/health-insurance-claims-denied-california',
  },
  {
    name: 'Florida',
    autoPath: '/auto-insurance-claims-denied-florida',
    healthPath: '/health-insurance-claims-denied-florida',
  },
  {
    name: 'Texas',
    autoPath: '/auto-insurance-claims-denied-texas',
    healthPath: '/health-insurance-claims-denied-texas',
  },
];

export default function StateHubLinks({ currentState }) {
  const otherStates = STATES.filter((s) => s.name !== currentState);

  return (
    <section>
      <h2>Insurance Claim Denial Guides by State</h2>
      {otherStates.length === 0 ? (
        <p>No other state guides are published yet.</p>
      ) : (
        <ul>
          {otherStates.map((s) => (
            <li key={s.name}>
              <Link to={s.autoPath}>Auto Insurance Claims Denied in {s.name}</Link>
              {' · '}
              <Link to={s.healthPath}>Health Insurance Claims Denied in {s.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

