import { useState } from 'react';
import PageHeader from '../components/ui/PageHeader';
import SignInPrompt from '../components/ui/SignInPrompt';

export default function History() {
  const [isSignedIn] = useState(false);

  if (!isSignedIn) {
    return (
      <div className="pt-4">
        <PageHeader title="History" />
        <SignInPrompt message="Sign in to view your watch history" />
      </div>
    );
  }

  return (
    <div className="pt-4">
      <PageHeader title="History" />
      <div className="p-4">
        <p className="text-white">Your watch history will appear here</p>
      </div>
    </div>
  );
}