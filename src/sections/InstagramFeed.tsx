import React from 'react';
import { INSTAGRAM_POSTS } from '../data/toursData';
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from '../config/constants';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { Heart, MessageCircle, ExternalLink } from 'lucide-react';
import { InstagramIcon } from '../components/InstagramIcon';

export const InstagramFeed: React.FC = () => {
  return (
    <section className="py-24 bg-[#FAF7F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-amber-500/10 border border-pink-500/30 text-pink-700">
            <InstagramIcon className="w-4 h-4 text-pink-600" />
            <span className="text-xs uppercase tracking-widest font-bold">
              INSTAGRAM COMMUNITY
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#2C1810]">
            Follow Our Sacred Journeys
          </h2>

          <p className="text-sm sm:text-base text-[#2C1810]/75">
            More moments, destinations, and yatra experiences shared daily on Instagram.
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-64 rounded-2xl overflow-hidden shadow-md border border-[#D4AF37]/30 bg-[#2C1810]"
            >
              <ImageWithFallback
                src={post.image}
                alt={post.caption}
                fallbackTitle={post.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Instagram Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
                <div className="flex items-center justify-end">
                  <InstagramIcon className="w-5 h-5 text-pink-400" />
                </div>

                <p className="text-xs line-clamp-3 text-white/90 italic font-light">
                  {post.caption}
                </p>

                <div className="flex items-center justify-between text-xs font-semibold text-[#D4AF37]">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 fill-pink-500 stroke-none" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5 fill-white stroke-none" />
                    {post.comments}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Main Instagram CTA Button */}
        <div className="text-center pt-4">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:from-purple-700 hover:to-amber-600 text-white font-bold text-base shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <InstagramIcon className="w-5 h-5" />
            <span>Follow {INSTAGRAM_HANDLE}</span>
            <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>

      </div>
    </section>
  );
};
