import { useState } from 'react';
import PageHeader from '../components/ui/PageHeader';
import SignInPrompt from '../components/ui/SignInPrompt';

export default function LikedVideos() {
  const [isSignedIn] = useState(false);

  if (!isSignedIn) {
    return (
      <div className="pt-4">
        <PageHeader title="Liked Videos" />
        <SignInPrompt message="Sign in to view your liked videos" />
      </div>
    );
  }

  return (
    <div className="pt-4">
      <PageHeader title="Liked Videos" />
      <div className="p-4">
        <p className="text-white">Your liked videos will appear here</p>
      </div>
    </div>
  );
}