import { useState } from 'react';
import PageHeader from '../components/ui/PageHeader';
import SignInPrompt from '../components/ui/SignInPrompt';

export default function Subscriptions() {
  const [isSignedIn] = useState(false);

  if (!isSignedIn) {
    return (
      <div className="pt-4">
        <PageHeader title="Subscriptions" />
        <SignInPrompt message="Sign in to see updates from your favorite YouTube channels" />
      </div>
    );
  }

  return (
    <div className="pt-4">
      <PageHeader title="Subscriptions" />
      <div className="p-4">
        <p className="text-white">Your subscriptions will appear here</p>
      </div>
    </div>
  );
}