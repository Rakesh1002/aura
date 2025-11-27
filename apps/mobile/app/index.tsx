import { Redirect } from 'expo-router';
import { useIdentityVault } from '@/store/identityVault';

export default function Index() {
  const { hasOnboarded } = useIdentityVault();

  if (!hasOnboarded) {
    return <Redirect href="/(onboarding)" />;
  }

  return <Redirect href="/(tabs)" />;
}

