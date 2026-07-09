import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface SubscriptionContextType {
  isPopupOpen: boolean;
  openPopup: () => void;
  closePopup: () => void;
  checkAndPlayVideo: (videoData: any, event?: any) => Promise<void>;
  handleSubscribe: () => void;
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

export const useSubscription = () => {
  const context = useContext(SubscriptionContext);
  if (!context) throw new Error('useSubscription must be used within SubscriptionProvider');
  return context;
};

export const SubscriptionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [pendingVideo, setPendingVideo] = useState<any>(null);

  const getVideoUrl = (videoData: any) => {
    const videoUrl = typeof videoData === 'object' && videoData?.url ? videoData.url : videoData;
    const videoTitle = typeof videoData === 'object' && videoData?.title ? videoData.title : '';
    const videoDescription = typeof videoData === 'object' && videoData?.description ? videoData.description : '';
    const params = new URLSearchParams({ url: videoUrl });
    if (videoTitle) params.append('title', videoTitle);
    if (videoDescription) params.append('description', videoDescription);
    return `/watch?${params.toString()}`;
  };

  const checkAndPlayVideo = async (videoData: any, event?: any) => {
    if (event) {
      const heroSection = event.target.closest('.hero-section, .home-slider, .bg-img-hero');
      if (heroSection) return;
    }
    const isSubscribed = localStorage.getItem('isSubscribed') === 'true';
    if (isSubscribed) {
      navigate(getVideoUrl(videoData));
    } else {
      setPendingVideo(videoData);
      setIsPopupOpen(true);
    }
  };

  const handleSubscribe = () => {
    setIsPopupOpen(false);
    if (pendingVideo) {
      navigate(getVideoUrl(pendingVideo));
      setPendingVideo(null);
    }
  };

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => {
    setIsPopupOpen(false);
    setPendingVideo(null);
  };

  return (
    <SubscriptionContext.Provider value={{ isPopupOpen, openPopup, closePopup, checkAndPlayVideo, handleSubscribe }}>
      {children}
    </SubscriptionContext.Provider>
  );
};
