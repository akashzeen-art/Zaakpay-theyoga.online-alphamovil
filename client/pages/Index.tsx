import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import VideoBackground from "@/components/VideoBackground";
import VideoModal from "@/components/VideoModal";
import SubscriptionModal from "@/components/SubscriptionModal";
import Carousel from "@/components/Carousel";
import { useSubscription } from "@/contexts/SubscriptionContext";
import { usePreserveParams } from "@/hooks/usePreserveParams";
import { GraduationCap, Clock, Users, Star, ArrowRight, Leaf, Flame } from "lucide-react";
import { Link } from "react-router-dom";
import { videoUrls } from "@/data/videoUrls";

export default function Index() {
  const [showParticles, setShowParticles] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null);
  const { isPopupOpen, closePopup, checkAndPlayVideo, handleSubscribe } = useSubscription();
  const queryParams = usePreserveParams();

  const openVideo = (url: string, title: string) => {
    checkAndPlayVideo({ url, title });
  };

  useEffect(() => {
    const hasSeenPreloader = localStorage.getItem("The Yoga_preloader_shown");
    if (hasSeenPreloader) {
      setShowParticles(true);
    } else {
      const timer = setTimeout(() => {
        setShowParticles(true);
      }, 9000);
      return () => clearTimeout(timer);
    }
  }, []);

  const featuredClasses = [
    {
      id: 1,
      name: "Morning Hatha",
      time: "35 mins",
      image: "🧘",
      description: "Gentle flow focusing on breath and alignment",
      videoUrl: videoUrls[0],
    },
    {
      id: 2,
      name: "Power Vinyasa",
      time: "25 mins",
      image: "💪",
      description: "Dynamic sequences building strength and flexibility",
      videoUrl: videoUrls[1],
    },
    {
      id: 3,
      name: "Yin Relaxation",
      time: "20 mins",
      image: "☯️",
      description: "Deep stretches for stress relief and calm",
      videoUrl: videoUrls[2],
    },
    {
      id: 4,
      name: "Quick Meditation",
      time: "15 mins",
      image: "🙏",
      description: "Guided mindfulness for mental clarity",
      videoUrl: videoUrls[3],
    },
  ];

  const stats = [
    { number: "50K+", label: "Classes", icon: <GraduationCap className="w-6 h-6" /> },
    { number: "100K+", label: "Practice Enthusiasts", icon: <Users className="w-6 h-6" /> },
    { number: "4.9★", label: "Average Rating", icon: <Star className="w-6 h-6" /> },
    { number: "24/7", label: "Community Support", icon: <Flame className="w-6 h-6" /> },
  ];

  return (
    <div className="relative min-h-screen bg-yoga-cream">
      <VideoBackground />
      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoUrl={selectedVideo?.url || ""}
        title={selectedVideo?.title || ""}
      />
      <SubscriptionModal isOpen={isPopupOpen} onClose={closePopup} onSubscribe={handleSubscribe} />

      <div className="relative z-20">
        <Navbar />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="animate-slide-up">
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-yoga-beige/50 border border-yoga-olive/20">
                  <Leaf className="w-4 h-4 text-yoga-olive" />
                  <span className="text-sm text-white font-medium">Premium Classes</span>
                </div>
                <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
                  Discover
                  <span className="text-purple-500"> Yoga Excellence</span>
                </h1>
                <p className="text-lg text-white/90 mb-8 leading-relaxed">
                  Explore thousands of transformative classes from certified instructors worldwide. Learn authentic techniques, discover diverse yoga styles, and deepen your practice.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to={`/classes${queryParams}`}
                    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex items-center justify-center gap-2 group hover:scale-105 active:scale-95"
                  >
                    <span>Explore Classes</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Hero Image */}
              <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-yoga-beige to-yoga-olive/20 rounded-3xl blur-3xl opacity-40"></div>
                  <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl text-center border border-white/20">
                    <div className="text-8xl mb-4">🧘</div>
                    <h3 className="text-2xl font-bold text-white mb-2">Premium Yoga</h3>
                    <p className="text-white/80">Handcrafted classes & tutorials</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-md p-6 text-center group animate-bounce-in hover:border-white/40 hover:shadow-xl hover:shadow-white/10 transition-all duration-300"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <div className="flex justify-center mb-3 text-white group-hover:scale-125 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Classes Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Featured <span className="text-purple-500">Classes</span>
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Handpicked classes from our community of passionate home instructors and professionals
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredClasses.map((yogaClass, index) => (
                <div
                  key={yogaClass.id}
                  onClick={() => openVideo(yogaClass.videoUrl, yogaClass.name)}
                  className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-md overflow-hidden group cursor-pointer animate-bounce-in hover:border-white/40 hover:shadow-xl hover:shadow-white/10 transition-all duration-300"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                      <img src={`/thumbnails/F${index + 1}.png`} alt={yogaClass.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-yoga-brown/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-white mb-2">{yogaClass.name}</h3>
                    <p className="text-sm text-white/80 mb-4">{yogaClass.description}</p>
                    <div className="flex items-center gap-2 text-white/70 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{yogaClass.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to={`/classes${queryParams}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-purple-500 border-2 border-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 hover:border-purple-600 transition-all duration-300 group"
              >
                <span>View All Classes</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section A — 2×4 Grid */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-slide-up">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-3">
                Begin Your <span className="text-purple-500">Journey</span>
              </h2>
              <p className="text-white/70 text-lg">Foundational classes to start your practice with confidence</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { url: "https://vz-32907a33-0f1.b-cdn.net/067d7625-a886-4795-813b-4b2125fa0139/play_360p.mp4", thumb: "/YOGA_NEW_MAIN_THUMBNAIL/1.png", title: "Class 1" },
                { url: "https://vz-32907a33-0f1.b-cdn.net/c8e740df-eb6f-4c6f-8568-e4285c400570/play_360p.mp4", thumb: "/YOGA_NEW_MAIN_THUMBNAIL/2.png", title: "Class 2" },
                { url: "https://vz-32907a33-0f1.b-cdn.net/1ad7fd82-e2e2-49d5-8185-ff2444076a2a/play_360p.mp4", thumb: "/YOGA_NEW_MAIN_THUMBNAIL/3.png", title: "Class 3" },
                { url: "https://vz-32907a33-0f1.b-cdn.net/0b41c2ca-a771-4bd7-b9c6-8e233878d550/play_360p.mp4", thumb: "/YOGA_NEW_MAIN_THUMBNAIL/4.png", title: "Class 4" },
                { url: "https://vz-32907a33-0f1.b-cdn.net/7b2a0af2-6102-417a-8995-2bd66101ec63/play_360p.mp4", thumb: "/YOGA_NEW_MAIN_THUMBNAIL/5.png", title: "Class 5" },
                { url: "https://vz-32907a33-0f1.b-cdn.net/c03dd922-196d-43f6-845b-9461d7385c73/play_360p.mp4", thumb: "/YOGA_NEW_MAIN_THUMBNAIL/6.png", title: "Class 6" },
                { url: "https://vz-32907a33-0f1.b-cdn.net/a09450ca-2344-404b-8b1b-c3d3600199b8/play_360p.mp4", thumb: "/YOGA_NEW_MAIN_THUMBNAIL/7.png", title: "Class 7" },
                { url: "https://vz-32907a33-0f1.b-cdn.net/af3195d4-b0f8-4676-a3c9-10723aec8b6e/play_360p.mp4", thumb: "/YOGA_NEW_MAIN_THUMBNAIL/8.png", title: "Class 8" },
              ].map((item, i) => (
                <div
                  key={i}
                  onClick={() => openVideo(item.url, item.title)}
                  className="relative rounded-xl overflow-hidden cursor-pointer group border border-white/20 hover:border-purple-400/60 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
                >
                  <img src={item.thumb} alt={item.title} className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section B — Slider */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-slide-up">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-3">
                Flow &amp; <span className="text-purple-500">Breathe</span>
              </h2>
              <p className="text-white/70 text-lg">Mindful sequences to harmonise body and breath</p>
            </div>
            <Carousel slidesToShow={4}>
              {[
                { url: "https://vz-32907a33-0f1.b-cdn.net/f1166959-ea13-4a4b-869a-ee9c88ef965e/play_360p.mp4", thumb: "/YOGA_NEW_MAIN_THUMBNAIL/9.png", title: "Class 9" },
                { url: "https://vz-32907a33-0f1.b-cdn.net/70da4f79-0c59-41b1-b5d8-6084722d3821/play_360p.mp4", thumb: "/YOGA_NEW_MAIN_THUMBNAIL/10.png", title: "Class 10" },
                { url: "https://vz-32907a33-0f1.b-cdn.net/be6f9d59-f694-40bc-91a9-be08586afe7b/play_360p.mp4", thumb: "/YOGA_NEW_MAIN_THUMBNAIL/11.png", title: "Class 11" },
                { url: "https://vz-32907a33-0f1.b-cdn.net/a295a2c6-99fc-444a-b58c-46b1eb79e7c5/play_360p.mp4", thumb: "/YOGA_NEW_MAIN_THUMBNAIL/12.png", title: "Class 12" },
                { url: "https://vz-32907a33-0f1.b-cdn.net/7f838634-c073-4fec-9621-ddc1c57d5e5f/play_360p.mp4", thumb: "/YOGA_NEW_MAIN_THUMBNAIL/13.png", title: "Class 13" },
                { url: "https://vz-32907a33-0f1.b-cdn.net/5cb49639-04b7-4883-aa23-fec4f59bc1bb/play_360p.mp4", thumb: "/YOGA_NEW_MAIN_THUMBNAIL/14.png", title: "Class 14" },
              ].map((item, i) => (
                <div
                  key={i}
                  onClick={() => openVideo(item.url, item.title)}
                  className="relative rounded-xl overflow-hidden cursor-pointer group border border-white/20 hover:border-purple-400/60 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
                >
                  <img src={item.thumb} alt={item.title} className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </section>

        {/* Section C — Slider */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-slide-up">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-3">
                Strength &amp; <span className="text-purple-500">Restore</span>
              </h2>
              <p className="text-white/70 text-lg">Build inner strength and find deep restoration</p>
            </div>
            <Carousel slidesToShow={4}>
              {[
                { url: "https://vz-32907a33-0f1.b-cdn.net/c866cf98-6885-4008-afa1-853345827c27/play_360p.mp4", thumb: "/YOGA_NEW_MAIN_THUMBNAIL/15.png", title: "Class 15" },
                { url: "https://vz-32907a33-0f1.b-cdn.net/5381176d-c9aa-4a10-97db-52013133bb4b/play_360p.mp4", thumb: "/YOGA_NEW_MAIN_THUMBNAIL/16.png", title: "Class 16" },
                { url: "https://vz-32907a33-0f1.b-cdn.net/46a00fc4-a91d-49dd-b2db-1ee158490911/play_360p.mp4", thumb: "/YOGA_NEW_MAIN_THUMBNAIL/17.png", title: "Class 17" },
                { url: "https://vz-32907a33-0f1.b-cdn.net/f5a74585-c729-44e5-bc12-d82036e55c58/play_360p.mp4", thumb: "/YOGA_NEW_MAIN_THUMBNAIL/18.png", title: "Class 18" },
                { url: "https://vz-32907a33-0f1.b-cdn.net/f9d31dcb-acc6-49f3-a1e0-bf7f86d7458a/play_360p.mp4", thumb: "/YOGA_NEW_MAIN_THUMBNAIL/19.png", title: "Class 19" },
                { url: "https://vz-32907a33-0f1.b-cdn.net/bda29d2c-0bc2-4011-922b-0cc28af99ce6/play_360p.mp4", thumb: "/YOGA_NEW_MAIN_THUMBNAIL/20.png", title: "Class 20" },
              ].map((item, i) => (
                <div
                  key={i}
                  onClick={() => openVideo(item.url, item.title)}
                  className="relative rounded-xl overflow-hidden cursor-pointer group border border-white/20 hover:border-purple-400/60 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
                >
                  <img src={item.thumb} alt={item.title} className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Why Choose <span className="text-purple-500">The Yoga</span>?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🧘",
                  title: "Expert Guidance",
                  description: "Learn from professional instructors and yoga experts",
                },
                {
                  icon: "🌍",
                  title: "Global Classes",
                  description: "Discover styles from every corner of the world",
                },
                {
                  icon: "⭐",
                  title: "Premium Quality",
                  description: "Tested classes with high success rates",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-md p-8 group animate-bounce-in hover:border-white/40 hover:shadow-xl hover:shadow-white/10 transition-all duration-300"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-white/80">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative border-t border-white/20 bg-white/10 backdrop-blur-md py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center text-center space-y-6">
              <img src="/logo.png" alt="The Yoga" className="w-20 h-20 object-contain" />
              <p className="text-white/80 text-sm">Your gateway to yoga excellence</p>
              <div className="border-t border-white/20 pt-6 w-full">
                <p className="text-white/80 text-sm mb-2">&copy; 2025, Alphamovil All Rights Reserved</p>
                <div className="flex gap-2 justify-center text-white/80 text-sm">
                  <Link to={`/terms${queryParams}`} className="hover:text-white">Terms of Services</Link>
                  <span>|</span>
                  <Link to={`/refund${queryParams}`} className="hover:text-white">Refund Policy</Link>
                  <span>|</span>
                  <Link to={`/privacy${queryParams}`} className="hover:text-white">Privacy Policy</Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
