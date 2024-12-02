import { useState } from 'react';
import PageHeader from '../components/ui/PageHeader';
import SignInPrompt from '../components/ui/SignInPrompt';

export default function Library() {
  const [isSignedIn] = useState(false);

  if (!isSignedIn) {
    return (
      <div className="pt-4">
        <PageHeader title="Library" />
        <SignInPrompt message="Sign in to access your personal library" />
      </div>
    );
  }

  return (
    <div className="pt-4">
      <PageHeader title="Library" />
      <div className="p-4">
        <p className="text-white">Your library content will appear here</p>
      </div>
    </div>
  );
}