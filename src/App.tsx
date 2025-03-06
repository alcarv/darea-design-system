import React, { useState, useEffect } from 'react';
import {
  Check,
  X,
  Clock,
  ChevronDown,
  Zap,
  Award,
  Rocket,
  Sparkles,
  Calculator,
  ArrowRight,
  Percent,
  Star,
  Crown,
  Target,
  Search,
  Monitor,
  Globe,
  Lightbulb,
  Trophy,
  Info
} from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const [activeTab, setActiveTab] = useState('seo');
  const [showCalculator, setShowCalculator] = useState(false);
  const [webDesignPlan, setWebDesignPlan] = useState('');
  const [seoPlan, setSeoPlan] = useState('');
  const [calculatedTotal, setCalculatedTotal] = useState(null);
  const [discountedTotal, setDiscountedTotal] = useState(null);
  const [webDesignPrice, setWebDesignPrice] = useState(null);
  const [seoPrice, setSeoPrice] = useState(null);
  const [discountAmount, setDiscountAmount] = useState(null);
  const [showTotal, setShowTotal] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedWebDesignPackage, setSelectedWebDesignPackage] = useState(null);
  const [selectedSeoPackage, setSelectedSeoPackage] = useState(null);
  const [showBusinessFriendly, setShowBusinessFriendly] = useState(true);
  const [comboTooltipVisible, setComboTooltipVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState('');

  const webDesignExampleLinks = {
    'Premium Business Kick-Off': 'https://example.com/premium-business-kickoff',
    'Business Elite': 'https://example.com/business-elite',
    'Premier Luxe': 'https://example.com/premier-luxe'
  };

  // Payment links for SEO plans
  const seoLinks = {
    'City Start': 'https://buy.stripe.com/bIY7w34Ui7nMfM46oK', // Note: Using 'City Start' from code, mapped to 'City Star' link
    'State Leader': 'https://buy.stripe.com/aEU3fNbiGfUidDW8wT',
    'National Empire': 'https://buy.stripe.com/bIY4jRcmKbE2arKbJ6',
    'Elite Global': 'https://buy.stripe.com/8wMdUr72qeQeeI0eVk'
  };

  // Payment links for Web Design plans
  const webDesignLinks = {
    'Premium Business Kick-Off': 'https://buy.stripe.com/dR6cQnaeCbE21VeeVl',
    'Business Elite': 'https://buy.stripe.com/8wM3fN9ay23sczS9B2',
    'Premier Luxe': 'https://buy.stripe.com/4gw03B9aybE20RadRj'
  };

  // Payment links for Combos
  const comboLinks = {
    'Premium Business Kick-Off': {
      'City Start': 'https://buy.stripe.com/9AQ9Eb86u37w6bu3cG',
      'State Leader': 'https://buy.stripe.com/28oeYvaeCazYdDW28D',
      'National Empire': 'https://buy.stripe.com/28odUr4Ui5fE6bu14A',
      'Elite Global': 'https://buy.stripe.com/cN2eYv0E20ZoczScNj'
    },
    'Business Elite': {
      'City Start': 'https://buy.stripe.com/fZe7w3fyWazY1Ve7t0',
      'State Leader': 'https://buy.stripe.com/fZeaIf1I68rQ8jCdRp',
      'National Empire': 'https://buy.stripe.com/7sIaIf4Ui4bA7fydRq',
      'Elite Global': 'https://buy.stripe.com/dR617FeuS8rQarK9Bb'
    },
    'Premier Luxe': {
      'City Start': 'https://buy.stripe.com/cN29Eb2Ma6jI7fy9Bc',
      'State Leader': 'https://buy.stripe.com/4gw17FgD0gYmarKeVx',
      'National Empire': 'https://buy.stripe.com/9AQg2z86u5fEbvO6p2',
      'Elite Global': 'https://buy.stripe.com/8wMg2zdqO23sgQ89Bf'
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  function getComboBenefitsDescription(webName, seoName) {
    return `The ${webName} + ${seoName} Combo is designed to propel your business forward. With the innovative design and functionality provided by ${webName}, your website will captivate and convert visitors. Paired with the advanced SEO strategies of ${seoName}, your online presence will soar, driving increased traffic and higher conversions. Invest in this combo to experience measurable growth and stand out from your competition—all while enjoying a 15% discount on your website design.`;
  }

  const businessFriendlyExplanations = {
    "Full Website Optimization": "We fine-tune your site so it's easier for people to find you online.",
    "Google My Business Optimization": "We update your Google profile so customers see the right info.",
    "Local Keyword Research": "We find common words your customers use so your site shows up in searches.",
    "Analytics Setup & Configuration": "We set up simple tracking so you know how many people visit your site.",
    "Business Listings (20)": "We list your business on 20 trusted sites so more people can discover you.",
    "Local Competitor Analysis": "We check out your local competitors to see how you can stand out.",
    "1 Blog Post Per Month": "We write one blog post each month to keep your site active.",
    "Schema Markup Implementation": "We add extra code to help search engines understand your site better.",
    "Support 24/7": "We’re here around the clock to help with any website issues.",
    "Comprehensive Keyword Research": "We thoroughly research keywords to attract more visitors.",
    "SEO Dedicated Page Creation Per City": "We create special pages for each city you serve.",
    "2 Blog Posts Per Month": "We write two blog posts per month to boost your online presence.",
    "Business Listings (40)": "We list your business on 40 top sites for even greater exposure.",
    "Backlink Implementation": "We build quality links from other sites to help your ranking.",
    "301 Redirect Management": "We manage website links so you don't lose any SEO value.",
    "Monthly Performance Reporting": "We provide simple monthly reports on how your site is doing.",
    "Deep Competitor Analyses": "We dig deep into your competitors to find ways for you to win.",
    "Content Strategy Development": "We plan content that makes your site more appealing and effective.",
    "4 Blog Posts Per Month": "We write four blog posts per month to keep your site fresh.",
    "SEO Dedicated Page Creation Per State and City": "We build pages optimized for each area you target.",
    "High Quality Link Building Management": "We focus on getting links from reputable sites to boost your authority.",
    "Business Listings (80)": "We list your business on 80 well-known sites to maximize visibility.",
    "Press Release (250+ Live Placements)": "We spread the word with press releases on over 250 media outlets.",
    "Multilingual Website Implementation": "We set up your site in multiple languages to reach international customers.",
    "250 Business Listings": "We list your business on 250 key directories for widespread recognition.",
    "Press Release (300+ Live Placements)": "We launch an extensive press release campaign for major coverage.",
    "Ultra High Quality Link Building Management": "We work on getting top-quality links from the best sites.",
    "Advanced Schema Markup Implementation": "We add advanced code to help search engines understand your site even better.",
    "SEO Dedicated Page Creation Per Target Countries, States, and Cities": "We create custom pages for every location you target.",
    "International Competitor Analysis (1)": "We analyze global competitors to give you a worldwide edge."
  };

  const featureExplanations = {
    '100% Original Design': 'A completely unique design custom made for your business.',
    'All Necessary Pages Development': 'Development of all essential pages required for your website.',
    'Responsive Design': 'Ensures your website works flawlessly on desktops, tablets, and mobiles.',
    'Custom Layout Design': 'Unique layout designs tailored to reflect your brand identity.',
    'Custom Typography': 'Custom typography that enhances the visual appeal of your content.',
    'Content Copywriting': 'Expertly written content that engages your visitors.',
    'Content and Copywriting': 'Expertly written content that engages your visitors.',
    'Logo Design': 'Professional custom logo design to elevate your brand image.',
    'Logo Design If Necessary': 'Optional professional logo design tailored to your brand.',
    'Custom Icon Set': 'A custom set of icons designed to match your brand’s style.',
    'Custom Illustrations': 'Custom illustrations to visually enhance your website.',
    'UI Animations': 'Interactive animations that improve user engagement.',
    'Contact Form': 'Customizable contact forms for seamless customer communication.',
    'Contact Forms': 'Customizable contact forms for seamless customer communication.',
    'Search Functionality': 'Robust search feature to help users find information quickly.',
    'Google Maps Integration': 'Embed interactive Google Maps to clearly display your business location.',
    'Blog Functionality': 'Integrated blog feature to keep your site updated with fresh content.',
    'Newsletter Signup': 'Allows visitors to subscribe to your newsletter.',
    'User Accounts/Login': 'Secure user account and login system for personalized experiences.',
    'Multilingual Support': 'Support for multiple languages to reach a wider audience.',
    'Product Catalog Design': 'Organized display of your products to showcase them effectively.',
    'Shopping Cart': 'A fully functional cart that lets customers add and review items.',
    'Checkout Process': 'A streamlined checkout process for a smooth purchasing experience.',
    'Payment Gateway Integration': 'Secure integration with payment systems for seamless transactions.',
    'Inventory Management': 'Tools to efficiently manage product inventory and stock levels.',
    'Wishlist Functionality': 'Enables customers to save products they are interested in for later.',
    'Product Filters/Search': 'Advanced filtering and search options to help customers find products quickly.',
    'Product Reviews System': 'System for customers to leave reviews and ratings on products.',
    'Domain & Hosting Setup': 'Comprehensive support for domain registration and hosting services.',
    'SSL Certificate': 'Secures your website with a high-quality SSL certificate.',
    'Third-Party API Integration': 'Integration with external APIs to extend your website’s functionality.',
    'Software Updates': 'Continuous updates to keep your website running at peak performance.',
    'CMS Training': 'Detailed training sessions to empower you in managing your website content.',
    'On-Going Technical Support': 'Round-the-clock technical support for any issues.',
    'Content Updates': 'Regular updates to keep your website content current.',
    'Full Website Optimization': 'Optimization of your homepage and key pages to rank higher in search results.',
    'Google My Business Optimization': 'Optimizing your Google Business Profile to enhance local visibility.',
    'Local Keyword Research': 'Researching keywords that drive local traffic to your website.',
    'Analytics Setup & Configuration': 'Configuring analytics to monitor and improve site performance.',
    'Business Listings (20)': 'Listing your business in 20 reputable directories to boost credibility.',
    'Local Competitor Analysis': 'Analyzing local competitors to refine your SEO strategy.',
    '1 Blog Post Per Month': 'Publishing one blog post per month to keep content fresh.',
    '2 Blog Posts Per Month': 'Publishing two blog posts per month to improve engagement and SEO.',
    '4 Blog Posts Per Month': 'Publishing four blog posts per month to drive consistent traffic.',
    'Schema Markup Implementation': 'Implementing structured data for better search engine understanding.',
    'Support 24/7': 'Providing around-the-clock support to keep your website running smoothly.',
    'Comprehensive Keyword Research': 'In-depth analysis to identify the most effective keywords for your business.',
    'SEO Dedicated Page Creation Per City': 'Creating optimized pages for each city to boost local SEO.',
    'Business Listings (40)': 'Listing your business in 40 quality directories for broader exposure.',
    'Backlink Implementation': 'Acquiring quality backlinks to enhance domain authority.',
    '301 Redirect Management': 'Managing URL redirects to preserve SEO equity.',
    'Monthly Performance Reporting': 'Providing detailed reports on your SEO progress every month.',
    'Deep Competitor Analyses': 'Conducting thorough analyses of competitors to inform your SEO strategy.',
    'Content Strategy Development': 'Developing a tailored content plan that supports your SEO goals.',
    'SEO Dedicated Page Creation Per State and City': 'Building optimized pages for each target location.',
    'High Quality Link Building Management': 'Focusing on acquiring high-quality backlinks for improved SEO.',
    'Business Listings (80)': 'Listing your business on 80 top directories to maximize online presence.',
    'Press Release (250+ Live Placements)': 'Distributing press releases to secure extensive media coverage.',
    'Multilingual Website Implementation': 'Setting up your website in multiple languages to reach international markets.',
    '250 Business Listings': 'Ensuring your business is featured in 250 key directories.',
    'Press Release (300+ Live Placements)': 'Executing an extensive press release campaign for maximum visibility.',
    'Ultra High Quality Link Building Management': 'Implementing an advanced strategy to secure top-tier backlinks.',
    'Advanced Schema Markup Implementation': 'Using advanced structured data techniques for better SEO performance.',
    'SEO Dedicated Page Creation Per Target Countries, States, and Cities': 'Creating tailored, optimized pages for each global target area.',
    'International Competitor Analysis (1)': 'Analyzing international competitors to help you gain a global edge.'
  };

  const businessFriendlyFeatures: Record<string, string[]> = {
    "City Start": [
      "Optimizes your entire website to improve visibility",
      "Enhances your Google Business Profile for better local searches",
      "Researches the best keywords to attract local customers",
      "Sets up analytics to track website performance",
      "Lists your business on 20 online Business Listings to boost credibility",
      "Analyzes competitors to find opportunities for growth",
      "Writes 1 blog post to engage your audience and improve search rankings",
      "Adds special coding (schema markup) to help search engines understand your site better",
      "24/7 support for any urgent issues"
    ],
    "State Leader": [
      "Fully optimizes your website for better ranking",
      "Finds the best keywords for your target audience",
      "Creates dedicated web pages for different cities you serve",
      "Writes 2 blog posts to improve search rankings and engage visitors",
      "Lists your business on 40 online directories to increase trust",
      "Adds high-quality backlinks to improve search authority",
      "Implements special coding to help search engines understand your content",
      "Fixes website link errors with 301 redirects",
      "Provides monthly reports on your SEO performance",
      "24/7 support for any urgent issues"
    ],
    "National Empire": [
      "Fully optimizes your website to improve search rankings",
      "Conducts in-depth research on the best keywords",
      "Analyzes top competitors to find areas where you can win",
      "Develops a content strategy tailored to your business",
      "Writes 4 blog posts to keep your website fresh and engaging",
      "Creates SEO-focused pages for every state and city you target",
      "Manages high-quality backlinks to boost your site’s reputation",
      "Lists your business on 80 online directories for more credibility",
      "Publishes a press release with 250+ media placements",
      "Uses special coding to help search engines read your website better",
      "Fixes website link errors with 301 redirects",
      "Provides detailed monthly performance reports",
      "24/7 support for any urgent issues"
    ],
    "Elite Global": [
      "Fully optimizes your website for global visibility",
      "Conducts deep research on the best keywords for different markets",
      "Sets up your website in multiple languages to reach international customers",
      "Writes 4 blog posts to engage visitors and improve rankings",
      "Lists your business in 250 online directories for worldwide credibility",
      "Publishes a press release with 300+ media placements",
      "Builds the highest-quality backlinks to boost trust and authority",
      "Implements advanced coding to improve search engine understanding",
      "Creates SEO-focused pages for every country, state, and city you target",
      "Analyzes international competitors to help you stay ahead",
      "Fixes website link errors with 301 redirects",
      "Provides detailed monthly performance reports",
      "24/7 support for any urgent issues"
    ]
  };

  const webDesignPackages = [
    {
      name: 'Premium Business Kick-Off',
      price: 250,
      period: 'x12',
      description:
        'An affordable package for businesses looking to kick off their online presence with a fully original design and essential functionalities.',
      features: [
        '100% Original Design',
        'All Necessary Pages Development',
        'Responsive Design',
        'Custom Layout Design',
        'Logo Design',
        'Content and Copywriting',
        'Blog Functionality',
        'Contact Form',
        'Social Media Integration',
        'Google Maps Integration',
        'Domain & Hosting Setup',
        'SSL Certificate',
        'Content Updates',
        'Software Updates',
        'CMS Training',
        'On-Going Technical Support'
      ],
      negativeFeatures: [],
      delivery: 'Setup in 2 Weeks',
      icon: <Zap className="h-12 w-12 text-orange-500" />,
      bgGradient: 'from-blue-500/10 to-purple-500/5'
    },
    {
      name: 'Business Elite',
      price: 400,
      period: 'x12',
      description:
        'A premium package tailored for growing businesses that require an elite online presence with enhanced design and functionality.',
      features: [
        '100% Original Design',
        'All Necessary Pages Development',
        'Responsive Design',
        'Custom Layout Design',
        'Content and Copywriting',
        'Custom Typography',
        'Logo Design If Necessary',
        'Custom Icon Set',
        'Custom Illustrations',
        'UI Animations',
        'Search Functionality',
        'Multilingual Support',
        'Blog Functionality',
        'Newsletter Signup',
        'User Accounts/Login',
        'Payment Gateway Integration',
        'Contact Forms',
        'Social Media Integration',
        'Google Maps Integration',
        'Domain & Hosting Setup',
        'SSL Certificate',
        'CMS Training',
        'On-Going Technical Support'
      ],
      negativeFeatures: [],
      delivery: 'Setup in 2-3 Weeks',
      icon: <Award className="h-12 w-12 text-orange-500" />,
      bgGradient: 'from-orange-500/10 to-red-500/5'
    },
    {
      name: 'Premier Luxe',
      price: 600,
      period: 'x12',
      description:
        'A comprehensive package designed for enterprises seeking robust web solutions with advanced e-commerce and design functionalities.',
      features: [
        '100% Original Design',
        'All Necessary Pages Development',
        'Responsive Design',
        'Custom Layout Design',
        'Custom Typography',
        'Content Copywriting',
        'Logo Design',
        'Custom Icon Set',
        'Custom Illustrations',
        'UI Animations',
        'Contact Form',
        'Search Functionality',
        'Google Maps Integration',
        'Blog Functionality',
        'Newsletter Signup',
        'User Accounts/Login',
        'Multilingual Support',
        'Product Catalog Design',
        'Shopping Cart',
        'Checkout Process',
        'Payment Gateway Integration',
        'Inventory Management',
        'Wishlist Functionality',
        'Product Filters/Search',
        'Product Reviews System',
        'Domain & Hosting Setup',
        'SSL Certificate',
        'Third-Party API Integration',
        'Software Updates',
        'On-Going Technical Support'
      ],
      negativeFeatures: [],
      delivery: 'Setup in 3-4 Weeks',
      icon: <Rocket className="h-12 w-12 text-orange-500" />,
      bgGradient: 'from-teal-500/10 to-emerald-500/5'
    }
  ];

  const seoPackages = [
    {
      name: 'City Start',
      price: 95,
      period: '/Mon',
      description:
        'Be the talk of the town and stand out in your local market. Perfect for the budget-conscious business ready to dip their toes into the SEO pool.',
      features: [
        'Full Website Optimization',
        'Google My Business Optimization',
        'Local Keyword Research',
        'Analytics Setup & Configuration',
        'Business Listings (20)',
        'Local Competitor Analysis',
        '1 Blog Post Per Month',
        'Schema Markup Implementation',
        'Support 24/7'
      ],
      icon: <Target className="h-12 w-12 text-orange-500" />,
      bgGradient: 'from-blue-500/10 to-indigo-500/5'
    },
    {
      name: 'State Leader',
      price: 180,
      period: '/Mon',
      description:
        'Ideal for businesses that are ready to break boundaries and attract a larger audience.',
      features: [
        'Full Website Optimization',
        'Comprehensive Keyword Research',
        'SEO Dedicated Page Creation Per City',
        '2 Blog Posts Per Month',
        'Business Listings (40)',
        'Backlink Implementation',
        'Schema Markup Implementation',
        '301 Redirect Management',
        'Monthly Performance Reporting',
        'Support 24/7'
      ],
      icon: <Globe className="h-12 w-12 text-orange-500" />,
      bgGradient: 'from-orange-500/10 to-amber-500/5'
    },
    {
      name: 'National Empire',
      price: 499,
      period: '/Mon',
      description:
        'Tailored for businesses that are not just playing the game but are set to redefine it. Go big, go bold, and become the benchmark in your industry.',
      features: [
        'Full Website Optimization',
        'Comprehensive Keyword Research',
        'Deep Competitor Analyses',
        'Content Strategy Development',
        '4 Blog Posts Per Month',
        'SEO Dedicated Page Creation Per State and City',
        'High Quality Link Building Management',
        'Business Listings (80)',
        'Press Release (250+ Live Placements)',
        'Schema Markup Implementation',
        '301 Redirect Management',
        'Monthly Performance Reporting',
        'Support 24/7'
      ],
      icon: <Crown className="h-12 w-12 text-orange-500" />,
      bgGradient: 'from-purple-500/10 to-pink-500/5',
      popular: true
    },
    {
      name: 'Elite Global',
      price: 1200,
      period: '/Mon',
      description:
        'The ultimate SEO solution for businesses aiming to dominate their market and crush the competition. Comprehensive coverage for maximum online visibility.',
      features: [
        'Full Website Optimization',
        'Comprehensive Keyword Research',
        'Multilingual Website Implementation',
        '4 Blog Posts Per Month',
        '250 Business Listings',
        'Press Release (300+ Live Placements)',
        'Ultra High Quality Link Building Management',
        'Advanced Schema Markup Implementation',
        'SEO Dedicated Page Creation Per Target Countries, States, and Cities',
        'International Competitor Analysis (1)',
        '301 Redirect Management',
        'Monthly Performance Reporting',
        'Support 24/7'
      ],
      icon: <Trophy className="h-12 w-12 text-orange-500" />,
      bgGradient: 'from-blue-600/10 to-indigo-600/5'
    }
  ];

  const calculateTotal = () => {
    if (!webDesignPlan || !seoPlan) return;
    const webDesignPackage = webDesignPackages.find(pkg => pkg.name === webDesignPlan);
    const seoPackage = seoPackages.find(pkg => pkg.name === seoPlan);
    if (webDesignPackage && seoPackage) {
      const webPrice = webDesignPackage.price;
      const seoPrice = seoPackage.price;
      const discount = webPrice * 0.15;
      const discountedWebPrice = webPrice - discount;
      const total = webPrice + seoPrice;
      const finalTotal = discountedWebPrice + seoPrice;
      setWebDesignPrice(webPrice);
      setSeoPrice(seoPrice);
      setDiscountAmount(discount);
      setCalculatedTotal(total);
      setDiscountedTotal(finalTotal);
      setSelectedWebDesignPackage(webDesignPackage);
      setSelectedSeoPackage(seoPackage);
      setShowTotal(true);
    }
  };

  useEffect(() => {
    setShowTotal(false);
  }, [webDesignPlan, seoPlan]);

  useEffect(() => {
    const offerExpiry = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000);
    const interval = setInterval(() => {
      const now = new Date();
      const diff = offerExpiry.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft("Offer expired");
        clearInterval(interval);
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#111111] text-white py-8 md:py-16">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="flex justify-center mb-10 md:mb-20 overflow-x-auto">
          <div className="bg-gray-900/70 backdrop-blur-sm rounded-md p-1.5 inline-flex shadow-lg border border-gray-800 gap-2 md:gap-8 flex-wrap justify-center">
            <button
              onClick={() => setActiveTab('seo')}
              className={`px-4 md:px-8 py-3 md:py-3.5 rounded-md text-xs sm:text-sm font-medium transition-all duration-300 flex items-center whitespace-nowrap ${activeTab === 'seo'
                ? 'bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-md'
                : 'text-gray-300 hover:text-white hover:bg-gray-800/70'
                }`}
            >
              <Search
                className={`h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 ${activeTab === 'seo' ? 'text-white' : 'text-orange-500'}`}
              />
              <span className="hidden xs:inline">Wix SEO Packages</span>
            </button>
            <button
              onClick={() => setActiveTab('web-design')}
              className={`px-4 md:px-8 py-3 md:py-3.5 rounded-md text-xs sm:text-sm font-medium transition-all duration-300 flex items-center whitespace-nowrap ${activeTab === 'web-design'
                ? 'bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-md'
                : 'text-gray-300 hover:text-white hover:bg-gray-800/70'
                }`}
            >
              <Lightbulb
                className={`h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 ${activeTab === 'web-design' ? 'text-white' : 'text-orange-500'}`}
              />
              Web Design Packages
            </button>
            <button
              onClick={() => setShowCalculator(true)}
              className="px-4 md:px-8 py-3 md:py-3.5 rounded-md text-xs sm:text-sm font-medium text-white relative overflow-hidden group border border-orange-500 bg-transparent whitespace-nowrap"
            >
              <div className="absolute inset-0 border border-orange-500 rounded-md opacity-50"></div>
              <div className="absolute inset-0 border-2 border-orange-500 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              <div className="flex items-center relative z-10">
                <Calculator className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 text-orange-500" />
                <span>Site + SEO Combo</span>
                <div className="ml-1 sm:ml-2 bg-orange-500/20 rounded-md px-1 py-0.5 text-[10px] sm:text-xs font-bold flex items-center">
                  <Percent className="h-2 w-2 sm:h-3 sm:w-3 mr-0.5 text-orange-500" />
                  15% Off
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Promo Banner with Tooltip */}
        <div
          className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 rounded-md p-4 sm:p-6 mb-6 md:mb-8 text-center shadow-xl transform hover:scale-[1.01] transition-transform duration-300 relative overflow-visible group"
          onMouseEnter={() => setComboTooltipVisible(true)}
          onMouseLeave={() => setComboTooltipVisible(false)}
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] opacity-10 bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/30 via-transparent to-orange-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Mobile version: button above text */}
          <div className="sm:hidden flex flex-col items-center space-y-2">
            <span
              className="relative flex items-center space-x-2 px-6 py-3 text-white text-sm font-medium tracking-wider shadow-xl transition-transform duration-300 hover:scale-105"
              style={{
                fontFamily: 'Tahoma',
                borderRadius: '5px', // Arredonda as bordas
                position: 'relative',
                backgroundColor: '#101111', // Fundo do conteúdo
                zIndex: 1, // Garante que o conteúdo fique sobre a borda
              }}
            >
              {/* Borda gradiente com arredondamento correto */}
              <span
                className="absolute inset-0"
                style={{
                  borderRadius: '5px', // Aplica bordas arredondadas corretamente
                  padding: '2px', // Define a espessura da borda
                  background: 'linear-gradient(to right, #065f46, #16a34a, #1e3a8a)', // Gradiente da borda
                  WebkitMask: 'linear-gradient(white, white) content-box, linear-gradient(white, white)', // Máscara para respeitar o border-radius
                  WebkitMaskComposite: 'destination-out',
                  maskComposite: 'exclude',
                  zIndex: 0, // Fica atrás do conteúdo
                }}
              />

              {/* Conteúdo real dentro da borda */}
              <span className="relative flex items-center z-10 px-4 py-2 bg-[#101111] rounded-[5px]">
                <Clock className="h-5 w-5 text-[#ee600c]" />
                <span>Offer expires in: {timeLeft}</span>
              </span>
            </span>

            <h2
              style={{ fontFamily: 'Tahoma', fontWeight: '500' }}
              className="text-[18px] font-bold relative z-10"
            >
              GET 15% OFF YOUR WEBSITE'S PRICE SIGNING UP FOR A DESIGN AND SEO COMBO
            </h2>
          </div>

          {/* Desktop version: text and button side by side */}
          <div className="hidden sm:flex flex-row items-center justify-between">
            <h2
              style={{ fontFamily: 'Tahoma', fontWeight: '500' }}
              className="text-[18px] sm:text-[20px] font-bold relative z-10"
            >
              GET 15% OFF YOUR WEBSITE'S PRICE SIGNING UP FOR A DESIGN AND SEO COMBO
            </h2>
            <span
              className="flex items-center space-x-2 px-8 py-4 rounded-[5px] bg-[#101111] bg-opacity-60 backdrop-blur-lg text-white text-base font-medium tracking-wider shadow-xl border-2 transition-transform duration-300 hover:scale-105"
              style={{
                fontFamily: 'Tahoma',
                borderImage: "linear-gradient(to right, #065f46, #16a34a, #1e3a8a) 1"
              }}
            >
              <Clock className="h-5 w-5 text-[#ee600c]" />
              <span>Offer expires in: {timeLeft}</span>
            </span>
          </div>

          {comboTooltipVisible && (
            <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 p-3 bg-gray-900 text-white text-sm rounded shadow-lg z-50"
              style={{ whiteSpace: 'normal' }}>
              By choosing our combo, you'll save 15% on a custom website design while receiving expert SEO optimization to boost your online visibility and attract more customers.
            </div>
          )}
        </div>

        {activeTab === 'seo' && (
          <div className="flex items-center mb-10 md:mb-16 px-4">
            <div className="flex items-center space-x-4">
              <div className="bg-gray-900/70 backdrop-blur-sm rounded-md p-1.5 inline-flex shadow-lg border border-gray-800 gap-2 md:gap-8 flex-wrap justify-center">
                <button
                  onClick={() => setShowBusinessFriendly(true)}
                  className={`px-4 py-2 rounded-md text-xs sm:text-sm transition-all duration-200 ${showBusinessFriendly
                    ? 'bg-gradient-to-r from-orange-600 to-orange-500 text-white font-medium shadow-md'
                    : 'border border-orange-500 hover:bg-orange-500/20'
                    }`}
                >
                  I don't understand SEO
                </button>
                <button
                  onClick={() => setShowBusinessFriendly(false)}
                  className={`px-4 py-2 rounded-md text-xs sm:text-sm transition-all duration-200 ${!showBusinessFriendly
                    ? 'bg-gradient-to-r from-orange-600 to-orange-500 text-white font-medium shadow-md'
                    : 'border border-orange-500 hover:bg-orange-500/20'
                    }`}
                >
                  I understand SEO
                </button>
              </div>
            </div>
          </div>
        )}

        {hoveredFeature && (
          <div
            className="fixed z-50 bg-gray-900/95 backdrop-blur-sm text-white p-4 rounded-md shadow-xl border border-gray-700 max-w-md animate-fade-in"
            style={{
              top: `${mousePosition.y + 10}px`,
              left: `${mousePosition.x + 10}px`,
              transform: 'translateY(-50%)'
            }}
          >
            <p className="text-sm">{hoveredFeature}</p>
          </div>
        )}

        {showCalculator && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-start justify-center z-50 p-4 overflow-y-auto">
            <div className="bg-transparent rounded-xl p-4 sm:p-8 w-full max-w-5xl relative shadow-2xl border border-gray-700 overflow-hidden max-h-[90vh] overflow-y-auto">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614850523296-d8c1af93d400?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] opacity-5 bg-cover bg-center"></div>
              <button
                onClick={() => setShowCalculator(false)}
                className="absolute top-2 sm:top-4 right-2 sm:right-4 text-gray-400 hover:text-white bg-gray-800/50 hover:bg-gray-700/50 rounded-full p-1.5 transition-all duration-200 z-20"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-center justify-center mb-6 sm:mb-10">
                  <div className="bg-gradient-to-r from-orange-600 to-orange-500 p-3 rounded-xl shadow-lg mb-3 sm:mb-0 sm:mr-4">
                    <Calculator className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h2 className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 bg-clip-text text-transparent">
                      Web Design + SEO Combo
                    </h2>
                    <p className="text-gray-400 text-xs sm:text-sm mt-1">
                      Calculate your perfect combo and save 15%
                    </p>
                  </div>
                </div>
                <div className="flex justify-end mb-4">
                  <span
                    className="flex items-center space-x-2 px-6 py-3 rounded-[5px] bg-[#101111] bg-opacity-60 backdrop-blur-lg text-white text-sm sm:text-base font-medium tracking-wider shadow-xl border-2 transition-transform duration-300 hover:scale-105"
                    style={{
                      fontFamily: 'Tahoma',
                      borderImage: "linear-gradient(to right, #065f46, #16a34a, #1e3a8a) 1"
                    }}
                  >
                    <Clock className="h-5 w-5 text-[#ee600c]" />
                    <span>Offer expires in: {timeLeft}</span>
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                        <Lightbulb className="h-4 w-4 mr-2 text-orange-500" />
                        Choose a Web Design Plan:
                      </label>
                      <div className="relative">
                        <select
                          value={webDesignPlan}
                          onChange={e => setWebDesignPlan(e.target.value)}
                          className="block w-full bg-gray-800/70 border border-gray-600 rounded-md py-3 sm:py-3.5 px-3 sm:px-4 pr-8 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-sm"
                        >
                          <option value="">Select a Plan</option>
                          {webDesignPackages.map(pkg => (
                            <option key={pkg.name} value={pkg.name}>
                              {pkg.name} - ${pkg.price}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                        <Search className="h-4 w-4 mr-2 text-orange-500" />
                        Choose a SEO Plan:
                      </label>
                      <div className="relative">
                        <select
                          value={seoPlan}
                          onChange={e => setSeoPlan(e.target.value)}
                          className="block w-full bg-gray-800/70 border border-gray-600 rounded-md py-3 sm:py-3.5 px-3 sm:px-4 pr-8 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-sm"
                        >
                          <option value="">Select a Plan</option>
                          {seoPackages.map(pkg => (
                            <option key={pkg.name} value={pkg.name}>
                              {pkg.name} - ${pkg.price}/month
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                    </div>
                    <button
                      onClick={calculateTotal}
                      className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-medium py-3 sm:py-3.5 px-4 rounded-md transition-all duration-300 shadow-md flex items-center justify-center text-sm"
                    >
                      <Calculator className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                      Calculate Total
                    </button>
                    {showTotal &&
                      calculatedTotal !== null &&
                      discountedTotal !== null &&
                      webDesignPrice !== null &&
                      seoPrice !== null &&
                      discountAmount !== null && (
                        <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-gray-800/50 rounded-md border border-gray-700 shadow-inner">
                          <div className="flex justify-between items-center pt-3 border-t border-gray-700">
                            <span className="text-base sm:text-lg font-bold text-white">
                              Total Price:
                            </span>
                            <span className="text-base sm:text-lg font-bold text-white flex items-center">
                              ${discountedTotal.toFixed(0)}
                              <span className="text-xs text-orange-400 ml-1">x12</span>
                            </span>
                          </div>
                          <a
                            href={comboLinks[selectedWebDesignPackage.name][selectedSeoPackage.name]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full mt-4 relative overflow-hidden group/btn bg-gradient-to-r from-green-700 to-blue-800 text-white font-medium py-3 px-4 rounded-md transition-all duration-300 shadow-md flex items-center justify-center text-sm"
                          >
                            <div className="absolute inset-0 w-0 bg-gradient-to-r from-green-800 via-green-600 to-blue-900 group-hover/btn:w-full transition-[width] duration-700 ease-in-out wave-animation"></div>
                            <span className="relative z-10">Proceed with This Combo</span>
                            <Check className="h-4 w-4 sm:h-5 sm:w-5 ml-2 relative z-10" />
                          </a>
                        </div>
                      )}
                  </div>
                  {showTotal && selectedWebDesignPackage && selectedSeoPackage ? (
                    <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl border border-gray-700 p-4 sm:p-6 shadow-lg">
                      <h3 className="text-lg sm:text-xl font-bold mb-4 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        Features of {selectedWebDesignPackage.name} and {selectedSeoPackage.name} Combo:
                      </h3>
                      <div className="space-y-4 max-h-[300px] sm:max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                        <div className="mb-4">
                          <h4 className="text-xs sm:text-sm font-semibold text-orange-400 mb-2 flex items-center">
                            <Lightbulb className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                            Web Design Features:
                          </h4>
                          <ul className="space-y-2">
                            {selectedWebDesignPackage.features.map((feature, i) => (
                              <li
                                key={i}
                                className="flex items-start group/feature relative"
                                onMouseEnter={() => {
                                  setHoveredFeature(featureExplanations[feature] || null);
                                }}
                                onMouseLeave={() => setHoveredFeature(null)}
                              >
                                <div className="bg-green-500/10 p-1 rounded-full mr-2 flex-shrink-0 mt-0.5 transition-colors duration-200">
                                  <Check className="h-3 w-3 text-green-500" />
                                </div>
                                <span className="text-xs text-gray-300 transition-colors duration-200 cursor-help border-b border-dashed border-gray-700">
                                  {feature}
                                </span>
                              </li>
                            ))}
                            <li className="flex items-start pt-1">
                              <div className="bg-orange-500/10 p-1 rounded-full mr-2 sm:mr-3 flex-shrink-0 mt-0.5">
                                <Clock className="h-2 w-2 sm:h-3 sm:w-3 text-orange-500" />
                              </div>
                              <span className="text-xs text-gray-300">
                                {selectedWebDesignPackage.delivery}
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-sm font-semibold text-orange-400 mb-2 flex items-center">
                            <Search className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                            SEO Features:
                          </h4>
                          <ul className="space-y-2">
                            {selectedSeoPackage.features.map((feature, i) => (
                              <li
                                key={i}
                                className="flex items-start group/feature relative"
                                onMouseEnter={() => {
                                  setHoveredFeature(
                                    showBusinessFriendly
                                      ? businessFriendlyExplanations[feature]
                                      : featureExplanations[feature] || null
                                  );
                                }}
                                onMouseLeave={() => setHoveredFeature(null)}
                              >
                                <div className="bg-green-500/10 p-1 rounded-full mr-2 flex-shrink-0 mt-0.5 transition-colors duration-200">
                                  <Check className="h-2 w-2 sm:h-3 sm:w-3 text-green-500" />
                                </div>
                                <span className="text-xs text-gray-300 transition-colors duration-200 cursor-help border-b border-dashed border-gray-700">
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="pt-4 mt-4 border-t border-gray-700">
                          <h4 className="text-xs sm:text-sm font-semibold text-orange-400 mb-2 flex items-center">
                            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                            Combo Benefits:
                          </h4>
                          <p className="text-xs text-gray-300 leading-relaxed">
                            {getComboBenefitsDescription(
                              selectedWebDesignPackage.name,
                              selectedSeoPackage.name
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl border border-gray-700 p-4 sm:p-6 shadow-lg overflow-hidden relative">
                      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] opacity-10 bg-cover bg-center"></div>
                      <div className="relative h-full min-h-[300px] sm:min-h-[400px] flex flex-col items-center justify-center">
                        <div className="website-animation">
                          <div className="desktop-frame">
                            <div className="website-header">
                              <div className="website-logo"></div>
                              <div className="website-nav">
                                <div className="nav-item"></div>
                                <div className="nav-item"></div>
                                <div className="nav-item"></div>
                              </div>
                            </div>
                            <div className="website-content">
                              <div className="website-hero"></div>
                              <div className="website-row"></div>
                              <div className="website-row"></div>
                              <div className="website-row"></div>
                            </div>
                          </div>
                          <div className="seo-elements">
                            <div className="search-icon">
                              <Search className="h-4 w-4 sm:h-6 sm:w-6 text-orange-500" />
                            </div>
                            <div className="ranking-bar">
                              <div className="ranking-fill"></div>
                            </div>
                            <div className="keyword-tag">Keywords</div>
                            <div className="keyword-tag">SEO</div>
                            <div className="keyword-tag">Rankings</div>
                          </div>
                          <div className="connecting-line line1"></div>
                          <div className="connecting-line line2"></div>
                          <div className="connecting-line line3"></div>
                          <div className="particles">
                            <div className="particle p1"></div>
                            <div className="particle p2"></div>
                            <div className="particle p3"></div>
                            <div className="particle p4"></div>
                            <div className="particle p5"></div>
                            <div className="particle p6"></div>
                          </div>
                        </div>
                        <div className="text-center mt-6 sm:mt-8">
                          <h3 className="text-lg sm:text-xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            Select Your Plans to See Combo Features
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-400 max-w-md mx-auto">
                            Choose a Web Design package and an SEO package to see all the features included in your combo. Get 15% off your web design package when you bundle with SEO!
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-center">
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 ${activeTab === 'web-design' ? 'lg:grid-cols-3' : 'lg:grid-cols-3 xl:grid-cols-4'} gap-6 md:gap-8 max-w-8xl`}
          >
            {activeTab === 'web-design'
              ? webDesignPackages.map((pkg, index) => (
                <div
                  key={index}
                  className={`group relative bg-[#1a1a1a] rounded-md overflow-hidden shadow-2xl border ${pkg.popular ? 'border-orange-500/30' : 'border-gray-700/50'} transform hover:scale-[1.02] transition-all duration-300 flex flex-col ${hoveredCard === index ? 'ring-2 ring-orange-500/50' : ''} shadow-[5px_5px_15px_rgba(0,0,0,0.3),-5px_-5px_15px_rgba(255,255,255,0.05)] lg:max-h-[900px]`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white text-[10px] xs:text-xs font-bold px-2 sm:px-4 py-1 rounded-bl-md shadow-lg flex items-center">
                        <Star className="h-2 w-2 sm:h-3 sm:w-3 mr-1" />
                        MOST POPULAR
                      </div>
                    </div>
                  )}
                  <div className="p-6 sm:p-8 relative z-10 flex flex-col flex-grow">
                    <a
                      href={webDesignExampleLinks[pkg.name] || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mb-4 inline-block border border-orange-500 bg-transparent text-white text-xs py-1 px-3 rounded-md transition-colors duration-300 flex items-center"
                    >
                      View Example
                      <Monitor className="ml-auto h-4 w-4 text-white" />
                    </a>
                    <div className="mb-4 flex items-center justify-between">
                      <div className="bg-gray-800/50 p-3 rounded-lg shadow-inner">
                        {pkg.icon}
                      </div>
                      <div className="text-right">
                        <span className="block text-3xl sm:text-4xl font-bold text-white">
                          ${pkg.price}
                        </span>
                        <span className="text-sm text-gray-400">{pkg.period}</span>
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-orange-500">
                      {pkg.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300">{pkg.description}</p>
                    <div className="border-t border-gray-700 my-4"></div>
                    <a
                      href={webDesignLinks[pkg.name]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold uppercase py-3 px-4 rounded-md transition-all duration-300 shadow-[3px_3px_10px_rgba(0,0,0,0.2),-3px_-3px_10px_rgba(255,255,255,0.03)] group-hover:shadow-orange-500/20 flex items-center justify-center relative overflow-hidden group/btn text-xs sm:text-sm tracking-wide"
                    >
                      <div className="absolute inset-0 w-0 bg-gradient-to-r from-green-800 via-green-600 to-blue-900 group-hover/btn:w-full transition-[width] duration-700 ease-in-out wave-animation"></div>
                      <span className="relative z-10">Choose Plan</span>
                      <ArrowRight className="h-4 w-4 ml-2 relative z-10" />
                    </a>
                    <div className="border-t border-gray-700 my-4"></div>
                    {/* Features - only the features section is scrollable */}
                    <div className="space-y-3 mb-6 flex-grow overflow-y-auto max-h-[300px] custom-scrollbar pr-2">
                      {pkg.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-start group/feature"
                          onMouseEnter={() => {
                            setHoveredFeature(featureExplanations[feature] || null);
                          }}
                          onMouseLeave={() => setHoveredFeature(null)}
                        >
                          <div className="bg-green-500/10 p-1 rounded-full mr-2 flex-shrink-0 mt-0.5 transition-colors duration-200">
                            <Check className="h-3 w-3 text-green-500" />
                          </div>
                          <span className="text-xs text-gray-300 transition-colors duration-200 cursor-help border-b border-dashed border-gray-700">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))
              : seoPackages.map((pkg, index) => (
                <div
                  key={index}
                  className={`group relative bg-[#1a1a1a] rounded-md overflow-hidden shadow-2xl border ${pkg.popular ? 'border-orange-500/30' : 'border-gray-700/50'} transform hover:scale-[1.02] transition-all duration-300 flex flex-col ${hoveredCard === index ? 'ring-2 ring-orange-500/50' : ''} shadow-[5px_5px_15px_rgba(0,0,0,0.3),-5px_-5px_15px_rgba(255,255,255,0.05)]`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white text-[10px] xs:text-xs font-bold px-2 sm:px-4 py-1 rounded-bl-md shadow-lg flex items-center">
                        <Star className="h-2 w-2 sm:h-3 sm:w-3 mr-1" />
                        MOST POPULAR
                      </div>
                    </div>
                  )}
                  <div className="p-6 sm:p-8 relative z-10 flex flex-col flex-grow">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="bg-gray-800/50 p-3 rounded-lg shadow-inner">
                        {pkg.icon}
                      </div>
                      <div className="text-right">
                        <span className="block text-3xl sm:text-4xl font-bold text-white">
                          ${pkg.price}
                        </span>
                        <span className="text-sm text-gray-400">{pkg.period}</span>
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-orange-500">
                      {pkg.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300">{pkg.description}</p>
                    <div className="border-t border-gray-700 my-4"></div>
                    <a
                      href={seoLinks[pkg.name]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold uppercase py-3 px-4 rounded-md transition-all duration-300 shadow-[3px_3px_10px_rgba(0,0,0,0.2),-3px_-3px_10px_rgba(255,255,255,0.03)] group-hover:shadow-orange-500/20 flex items-center justify-center relative overflow-hidden group/btn text-xs sm:text-sm tracking-wide"
                    >
                      <div className="absolute inset-0 w-0 bg-gradient-to-r from-green-800 via-green-600 to-blue-900 group-hover/btn:w-full transition-[width] duration-700 ease-in-out wave-animation"></div>
                      <span className="relative z-10">Choose Plan</span>
                      <ArrowRight className="h-4 w-4 ml-2 relative z-10" />
                    </a>
                    <div className="border-t border-gray-700 my-4"></div>
                    <div className="space-y-3 mb-6 flex-grow overflow-y-auto max-h-[300px] custom-scrollbar pr-2">
                      {(showBusinessFriendly ? businessFriendlyFeatures[pkg.name] : pkg.features)?.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-start group/feature"
                          onMouseEnter={() => {
                            setHoveredFeature(
                              showBusinessFriendly
                                ? businessFriendlyExplanations[feature]
                                : featureExplanations[feature] || null
                            );
                          }}
                          onMouseLeave={() => setHoveredFeature(null)}
                        >
                          <div className="bg-green-500/10 p-1 rounded-full mr-2 flex-shrink-0 mt-0.5 group-hover/feature:bg-green-500/20 transition-colors duration-200">
                            <Check className="h-3 w-3 text-green-500" />
                          </div>
                          <span className="text-xs text-gray-300 group-hover/feature:text-white transition-colors duration-200 cursor-help border-b border-dashed border-gray-700 group-hover/feature:border-gray-500">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.3);
          border-radius: 9999px;
        }
        .clay-morphism {
          box-shadow: inset 4px 4px 8px rgba(0, 0, 0, 0.2), inset -4px -4px 8px rgba(255, 255, 255, 0.7);
          border-radius: 5px;
          transition: box-shadow 0.3s ease;
        }
      `}</style>
    </div>
  );
}

export default App;