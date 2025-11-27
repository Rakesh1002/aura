// Analytics utility for tracking user events
// TODO: Integrate with Firebase Analytics or your preferred service

interface AnalyticsEvent {
    name: string;
    params?: Record<string, any>;
}

class Analytics {
    private isEnabled: boolean = true;

    initialize() {
        // TODO: Initialize analytics SDK (e.g., Firebase Analytics)
        console.log('Analytics initialized');
    }

    setUserId(userId: string) {
        if (!this.isEnabled) return;
        // TODO: Set user ID in analytics
        console.log('Analytics: Set user ID:', userId);
    }

    logEvent(event: AnalyticsEvent) {
        if (!this.isEnabled) return;
        console.log('Analytics: Event logged:', event.name, event.params);
        // TODO: Send event to analytics service
    }

    logScreenView(screenName: string) {
        this.logEvent({
            name: 'screen_view',
            params: { screen_name: screenName },
        });
    }

    // App-specific events
    logGenerationStarted(vibeId?: string, aspectRatio?: string) {
        this.logEvent({
            name: 'generation_started',
            params: { vibe_id: vibeId, aspect_ratio: aspectRatio },
        });
    }

    logGenerationCompleted(vibeId?: string, duration?: number) {
        this.logEvent({
            name: 'generation_completed',
            params: { vibe_id: vibeId, duration_ms: duration },
        });
    }

    logShareInitiated(platform: string) {
        this.logEvent({
            name: 'share_initiated',
            params: { platform },
        });
    }

    logReferralCodeCopied() {
        this.logEvent({
            name: 'referral_code_copied',
        });
    }

    logVibeSelected(vibeId: string, category: string) {
        this.logEvent({
            name: 'vibe_selected',
            params: { vibe_id: vibeId, category },
        });
    }

    logPhotoUploaded(count: number) {
        this.logEvent({
            name: 'photo_uploaded',
            params: { count },
        });
    }

    setEnabled(enabled: boolean) {
        this.isEnabled = enabled;
    }
}

export const analytics = new Analytics();
