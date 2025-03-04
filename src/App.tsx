import React, { useState, useEffect } from 'react';
import { Check, X, Clock, ChevronDown, Zap, Award, Rocket, Sparkles, Calculator, ArrowRight, Percent, Star, Crown, Target, Search, Globe, Lightbulb, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const [activeTab, setActiveTab] = useState('seo');
  const [showCalculator, setShowCalculator] = useState(false);
  const [webDesignPlan, setWebDesignPlan] = useState('');
  const [seoPlan, setSeoPlan] = useState('');
  const [calculatedTotal, setCalculatedTotal] = useState<number | null>(null);
  const [discountedTotal, setDiscountedTotal] = useState<number | null>(null);
  const [webDesignPrice, setWebDesignPrice] = useState<number | null>(null);
  const [seoPrice, setSeoPrice] = useState<number | null>(null);
  const [discountAmount, setDiscountAmount] = useState<number | null>(null);
  const [showTotal, setShowTotal] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedWebDesignPackage, setSelectedWebDesignPackage] = useState<any>(null);
  const [selectedSeoPackage, setSelectedSeoPackage] = useState<any>(null);
  const [showBusinessFriendly, setShowBusinessFriendly] = useState(true);

  // Track mouse position for tooltip
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const getFeatureList = () => {
    return showBusinessFriendly ? businessFriendlyFeatures[selectedSeoPackage.name] : selectedSeoPackage.features;
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

  // Feature explanations - Technical
  const featureExplanations: Record<string, string> = {
    // Web Design Features
    "Custom/Responsive Web Design: Up to 5 pages": "A fully responsive website that looks great on all devices with up to 5 unique page designs.",
    "Custom/Responsive Web Design: Up to 10 pages": "A fully responsive website that looks great on all devices with up to 10 unique page designs.",
    "Custom/Responsive Web Design: Up to 15 pages": "A fully responsive website that looks great on all devices with up to 15 unique page designs.",
    "Basic On-page SEO": "Essential search engine optimization for your website's content and structure to improve visibility.",
    "Content Management System (CMS)": "A user-friendly system that allows you to update your website content without technical knowledge.",
    "Live Chat Integration": "Real-time chat functionality to engage with visitors directly on your website.",
    "Social Media/Email Integration": "Connect your website with your social media profiles and email marketing tools.",
    "Custom Forms": "Tailored forms for contact, subscriptions, or other data collection needs.",
    "Content Writing": "Professional copywriting for your website pages to engage visitors effectively.",
    "Google Analytics": "Integration of analytics to track visitor behavior and website performance.",
    "Domain and Hosting Subscriptions Support": "Assistance with setting up and managing your website's domain and hosting services.",
    "E-Commerce Integration": "Full online store functionality with product listings, cart, and checkout process.",
    "Custom Interactions and Animations": "Engaging visual effects and interactive elements to enhance user experience.",
    "Advanced Wix System and On-page SEO": "Comprehensive SEO setup using Wix's advanced tools for better search rankings.",
    "Native Appointment Tool": "Built-in scheduling system for clients to book appointments directly through your website.",
    "Online Payment Integration": "Secure payment processing capabilities for services or products.",
    "Professional Email Creation": "Setup of branded email addresses matching your domain name.",
    "Professional Terms of Services and Privacy Policy Page": "Legally compliant pages covering website usage terms and privacy practices.",
    "On-going Support Until the Final Payment": "Continuous technical assistance and updates until your payment plan is completed.",

    // SEO Features - Technical
    "Full Website Optimization": "Optimization of your homepage to rank higher in search results for relevant keywords.",
    "Google My Business Optimization": "Comprehensive search engine optimization for up to 5 pages of your website.",
    "Local Keyword Research": "Comprehensive search engine optimization for up to 10 pages of your website.",
    "Analytics Setup & Configuration": "Comprehensive search engine optimization for up to 20 pages of your website.",
    "Business Listings (20)": "Comprehensive search engine optimization for up to 30 pages of your website.",
    "Local Competitor Analysis": "In-depth analysis to identify the most valuable search terms for your business.",
    "Blog Posts (1)": "Refinement of page elements like titles, meta descriptions, and content for better rankings.",
    "Schema Markup Implementation": "One professionally written, SEO-optimized blog article each month.",
    "Support 24/7": "Two professionally written, SEO-optimized blog articles each month.",
    "Comprehensive Keyword Research": "Four professionally written, SEO-optimized blog articles each month.",
    "SEO Dedicated Page Creation Per City": "Eight professionally written, SEO-optimized blog articles each month.",
    "Blog Posts (2)": "Twelve professionally written, SEO-optimized blog articles each month.",
    "Business Listings (40)": "Refinement of your website text to improve both user engagement and search rankings.",
    "Backlink Implementation": "Your business information added to 60 local directories to improve local visibility.",
    "301 Redirect Management": "Your business information added to 200 local directories for extensive local visibility.",
    "Monthly Performance Reporting": "Your business information added to 350 local directories for maximum local visibility.",
    "Deep Competitor Analyses": "Your business information added to over 500 local directories for comprehensive local visibility.",
    "Content Strategy Development": "Creation of quality backlinks from other websites to improve your site's authority.",
    "Blog Posts (4)": "Strategic acquisition of high-authority backlinks from relevant industry websites.",
    "SEO Dedicated Page Creation Per State and City": "Round-the-clock assistance available via chat and phone whenever you need help.",
    "High Quality Link Building Management": "Enhancement of your Google Business Profile to improve local search visibility.",
    "Business Listings (80)": "A personal SEO expert assigned to your account who understands your business goals.",
    "Press Release (250+ Live Placements)": "Detailed monthly analytics showing your SEO progress and ROI.",
    "Multilingual Website Implementation": "In-depth research on your top competitors' SEO strategies to help you outrank them.",
    "250 Business Listings": "Regular updates on your SEO performance metrics to track progress.",
    "Press Release (300+ Live Placements)": "Tailored SEO plan designed specifically for your business goals and industry.",
    "Ultra High Quality Link Building Management": "Enhancement of your social profiles to improve search visibility and brand presence.",
    "Advanced Schema Markup Implementation": "Enhancement of your social profiles to improve search visibility and brand presence.",
    "SEO Dedicated Page Per Target Countries, States, and Cities": "Enhancement of your social profiles to improve search visibility and brand presence.",
    "International Competitor Analysis (1)": "testestes"
  };

  // Business-friendly explanations
  const businessFriendlyExplanations: Record<string, string> = {
    // Web Design Features - Business Friendly
    "Custom/Responsive Web Design: Up to 5 pages": "A website that looks great on phones, tablets, and computers with up to 5 pages designed just for your business.",
    "Custom/Responsive Web Design: Up to 10 pages": "A website that looks great on phones, tablets, and computers with up to 10 pages designed just for your business.",
    "Custom/Responsive Web Design: Up to 15 pages": "A website that looks great on phones, tablets, and computers with up to 15 pages designed just for your business.",
    "Basic On-page SEO": "We make sure Google can find your website by adding the right words and structure.",
    "Content Management System (CMS)": "An easy-to-use system that lets you update your website text and images without any technical skills.",
    "Live Chat Integration": "A chat box on your website so visitors can instantly message you with questions.",
    "Social Media/Email Integration": "Connect your website to Facebook, Instagram, and email newsletters to grow your audience.",
    "Custom Forms": "Custom-designed forms for your visitors to contact you, sign up, or request information.",
    "Content Writing": "Professional writers create compelling text for your website that speaks to your customers.",
    "Google Analytics": "See how many people visit your website, where they come from, and what they're interested in.",
    "Domain and Hosting Subscriptions Support": "We'll help you set up and manage your website address and hosting service.",
    "E-Commerce Integration": "Sell products directly from your website with shopping cart and payment features.",
    "Custom Interactions and Animations": "Eye-catching movements and effects that make your website more engaging and memorable.",
    "Advanced Wix System and On-page SEO": "Premium Wix features and search optimization to help customers find you online.",
    "Native Appointment Tool": "Let customers book appointments directly through your website's calendar.",
    "Online Payment Integration": "Accept credit cards and other payments directly through your website.",
    "Professional Email Creation": "Get email addresses with your business name (like you@yourbusiness.com).",
    "Professional Terms of Services and Privacy Policy Page": "Legal pages that protect your business and build customer trust.",
    "On-going Support Until the Final Payment": "We're here to help with any website issues until your payment plan is complete.",

    // SEO Features - Business Friendly
    "Optimizes your entire website to improve visibility": "We optimize your main page so potential customers can find you when they search online.",
    "Enhances your Google Business Profile for better local searches": "We make sure up to 5 pages of your website show up when potential customers search for your services.",
    "Researches the best keywords to attract local customers": "We make sure up to 10 pages of your website show up when potential customers search for your services.",
    "Sets up analytics to track website performance": "We make sure up to 20 pages of your website show up when potential customers search for your services.",
    "Lists your business on 20 online Business Listings to boost credibility": "We make sure up to 30 pages of your website show up when potential customers search for your services.",
    "Analyzes competitors to find opportunities for growth": "We find the exact words your customers use to search for businesses like yours.",
    "Writes 1 blog post to engage your audience and improve search rankings": "We adjust your website content so Google recognizes you as the answer to customer searches.",
    "Adds special coding (schema markup) to help search engines understand your site better": "We write one monthly article that attracts visitors and helps your Google ranking.",
    "24/7 support for any urgent issues": "We write two monthly articles that attract visitors and help your Google ranking.",
    "Fully optimizes your website for better ranking": "We write four monthly articles that attract visitors and help your Google ranking.",
    "Finds the best keywords for your target audience": "We write eight monthly articles that attract visitors and help your Google ranking.",
    "Creates dedicated web pages for different cities you serve": "We write twelve monthly articles that attract visitors and help your Google ranking.",
    "Writes 2 blog posts to improve search rankings and engage visitors": "We improve your website text to appeal to both customers and search engines.",
    "Lists your business on 40 online directories to increase trust": "We list your business in 60 online directories so local customers can find you.",
    "Adds high-quality backlinks to improve search authority": "We list your business in 200 online directories so local customers can find you.",
    "Implements special coding to help search engines understand your content": "We list your business in 350 online directories so local customers can find you.",
    "Fixes website link errors with 301 redirects": "We list your business in over 500 online directories so local customers can find you.",
    "Provides monthly reports on your SEO performance": "We get other reputable websites to link to yours, which boosts your credibility with Google.",
    "Fully optimizes your website to improve search rankings": "We secure links from high-quality industry websites that significantly boost your search rankings.",
    "Conducts in-depth research on the best keywords": "Get help anytime, day or night, through chat or phone.",
    "Analyzes top competitors to find areas where you can win": "We enhance your Google business listing so you appear in local searches and Google Maps.",
    "Develops a content strategy tailored to your business": "You get a personal SEO expert who knows your business and works to improve your online visibility.",
    "Writes 4 blog posts to keep your website fresh and engaging": "Each month, we show you exactly how our work is increasing your website visitors and leads.",
    "Creates SEO-focused pages for every state and city you target": "We study what your competitors are doing online and develop strategies to help you outperform them.",
    "Manages high-quality backlinks to boost your site’s reputation": "Get weekly reports showing how your website is performing in search results.",
    "Lists your business on 80 online directories for more credibility": "A personalized plan designed specifically for your business type and target customers.",
    "Publishes a press release with 250+ media placements": "We optimize your social media profiles to improve your overall online presence and search visibility.",
    "Uses special coding to help search engines read your website better": "You get a personal SEO expert who knows your business and works to improve your online visibility.",
    "Provides detailed monthly performance reports": "Each month, we show you exactly how our work is increasing your website visitors and leads.",
    "Fully optimizes your website for global visibility": "We study what your competitors are doing online and develop strategies to help you outperform them.",
    "Conducts deep research on the best keywords for different markets": "Get weekly reports showing how your website is performing in search results.",
    "Sets up your website in multiple languages to reach international customers": "A personalized plan designed specifically for your business type and target customers.",
    "Writes 4 blog posts to engage visitors and improve rankings": "We optimize your social media profiles to improve your overall online presence and search visibility.",
    "Lists your business in 250 online directories for worldwide credibility": "Get weekly reports showing how your website is performing in search results.",
    "Publishes a press release with 300+ media placements": "A personalized plan designed specifically for your business type and target customers.",
    "Builds the highest-quality backlinks to boost trust and authority": "We optimize your social media profiles to improve your overall online presence and search visibility.",
    "Implements advanced coding to improve search engine understanding": "You get a personal SEO expert who knows your business and works to improve your online visibility.",
    "Creates SEO-focused pages for every country, state, and city you target": "Each month, we show you exactly how our work is increasing your website visitors and leads.",
    "Analyzes international competitors to help you stay ahead": "We study what your competitors are doing online and develop strategies to help you outperform them.",
  };

  const webDesignPackages = [
    {
      name: "First Impressions Package",
      price: 250,
      period: "10x",
      description: "Great web package for new and small businesses aiming for a compelling online debut.",
      features: [
        "Custom/Responsive Web Design: Up to 5 pages",
        "Basic On-page SEO",
        "Content Management System (CMS)",
        "Live Chat Integration",
        "Social Media/Email Integration",
        "Custom Forms",
        "Content Writing",
        "Google Analytics",
        "Domain and Hosting Subscriptions Support"
      ],
      negativeFeatures: ["E-Commerce Integration"],
      delivery: "2 Weeks Delivery",
      icon: <Zap className="h-12 w-12 text-orange-500" />,
      bgGradient: "from-blue-500/10 to-purple-500/5"
    },
    {
      name: "Business Boost Package",
      price: 400,
      period: "10x",
      description: "For businesses on the rise. A blend of design and strategy to fuel your growth.",
      features: [
        "Custom/Responsive Web Design: Up to 10 pages",
        "Custom Interactions and Animations",
        "Advanced Wix System and On-page SEO",
        "Google Analytics",
        "Content Writing",
        "Content Management System (CMS)",
        "Native Appointment Tool",
        "Custom Forms",
        "Social Media/Email Integration",
        "Live Chat Integration",
        "Online Payment Integration",
        "Domain and Hosting Subscriptions Support",
        "On-going Support Until the Final Payment"
      ],
      negativeFeatures: ["E-Commerce Integration"],
      delivery: "2-3 Weeks Delivery",
      icon: <Award className="h-12 w-12 text-orange-500" />,
      bgGradient: "from-orange-500/10 to-red-500/5",
      popular: true
    },
    {
      name: "Legacy Launcher Package",
      price: 600,
      period: "10x",
      description: "The premier package for creating a distinguished and dominant online presence.",
      features: [
        "Custom/Responsive Web Design: Up to 15 pages",
        "Custom Interactions and Animations",
        "Content Writing",
        "Advanced Wix System and On-page SEO",
        "Google Analytics",
        "Content Management System (CMS)",
        "Online Payment Integration",
        "Social Media/Email Integration",
        "Live Chat Integration",
        "Custom Forms",
        "Native Appointment Tool",
        "Professional Email Creation",
        "E-Commerce Integration",
        "Domain and Hosting Subscriptions Support",
        "Professional Terms of Services and Privacy Policy Page",
        "On-going Support Until the Final Payment"
      ],
      negativeFeatures: [],
      delivery: "4-6 Weeks Delivery",
      icon: <Rocket className="h-12 w-12 text-orange-500" />,
      bgGradient: "from-teal-500/10 to-emerald-500/5"
    }
  ];

  const seoPackages = [
    {
      name: "City Start",
      price: 95,
      period: "/Mon",
      description: "Be the talk of the town and stand out in your local market. Perfect for the budget-conscious business ready to dip their toes into the SEO pool.",
      features: [
        "Full Website Optimization",
        "Google My Business Optimization",
        "Local Keyword Research",
        "Analytics Setup & Configuration",
        "Business Listings (20)",
        "Local Competitor Analysis",
        "Blog Posts (1)",
        "Schema Markup Implementation",
        "Support 24/7"
      ],
      icon: <Target className="h-12 w-12 text-orange-500" />,
      bgGradient: "from-blue-500/10 to-indigo-500/5"
    },
    {
      name: "State Leader",
      price: 180,
      period: "/Mon",
      description: "Ideal for businesses that are ready to break boundaries and attract a larger audience.",
      features: [
        "Full Website Optimization",
        "Comprehensive Keyword Research",
        "SEO Dedicated Page Creation Per City",
        "Blog Posts (2)",
        "Business Listings (40)",
        "Backlink Implementation",
        "Schema Markup Implementation",
        "301 Redirect Management",
        "Monthly Performance Reporting",
        "Support 24/7"
      ],
      icon: <Globe className="h-12 w-12 text-orange-500" />,
      bgGradient: "from-orange-500/10 to-amber-500/5",
      popular: true
    },
    {
      name: "National Empire",
      price: 499,
      period: "/Mon",
      description: "Tailored for businesses that are not just playing the game but are set to redefine it. Go big, go bold, and become the benchmark in your industry.",
      features: [
        "Full Website Optimization",
        "Comprehensive Keyword Research",
        "Deep Competitor Analyses",
        "Content Strategy Development",
        "Blog Posts (4)",
        "SEO Dedicated Page Creation Per State and City",
        "High Quality Link Building Management",
        "Business Listings (80)",
        "Press Release (250+ Live Placements)",
        "Schema Markup Implementation",
        "301 Redirect Management",
        "Monthly Performance Reporting",
        "Support 24/7"
      ],
      icon: <Crown className="h-12 w-12 text-orange-500" />,
      bgGradient: "from-purple-500/10 to-pink-500/5"
    },
    {
      name: "Elite Global",
      price: 1200,
      period: "/Mon",
      description: "The ultimate SEO solution for businesses aiming to dominate their market and crush the competition. Comprehensive coverage for maximum online visibility.",
      features: [
        "Full Website Optimization",
        "Comprehensive Keyword Research",
        "Multilingual Website Implementation ",
        "Blog Posts (4)",
        "250 Business Listings",
        "Press Release (300+ Live Placements)",
        "Ultra High Quality Link Building Management",
        "Advanced Schema Markup Implementation",
        "SEO Dedicated Page Per Target Countries, States, and Cities",
        "International Competitor Analysis (1)",
        "301 Redirect Management",
        "Monthly Performance Reporting",
        "Support 24/7"
      ],
      icon: <Trophy className="h-12 w-12 text-orange-500" />,
      bgGradient: "from-blue-600/10 to-indigo-600/5"
    },
    /*{
      name: "Global Expansion Package",
      price: 800,
      period: "/Mon",
      description: "For businesses ready to expand beyond borders and establish a commanding international presence. Our most comprehensive SEO solution for global reach.",
      features: [
        "SEO up to 30 pages",
        "Advanced keyword research",
        "Advanced Wix System and On-page SEO",
        "12 Blog posts per month + SEO",
        "Copy and content optimization",
        "Business Added to 500+ Local Business Listings",
        "Google My Business optimization",
        "Premium link building strategy",
        "Dedicated SEO specialist",
        "Weekly performance updates",
        "Monthly performance reports",
        "Competitor analysis",
        "Custom SEO strategy",
        "Social media optimization",
        "24/7 Chat and Phone Support"
      ],
      icon: <Globe className="h-12 w-12 text-orange-500" />,
      bgGradient: "from-emerald-600/10 to-teal-600/5"
    }*/
  ];

  const calculateTotal = () => {
    if (!webDesignPlan || !seoPlan) {
      return;
    }

    const webDesignPackage = webDesignPackages.find(pkg => pkg.name === webDesignPlan);
    const seoPackage = seoPackages.find(pkg => pkg.name === seoPlan);

    if (webDesignPackage && seoPackage) {
      const webPrice = webDesignPackage.price;
      const seoPrice = seoPackage.price;

      // Apply 15% discount only to web design price
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

  // Reset calculation when plans change
  useEffect(() => {
    setShowTotal(false);
  }, [webDesignPlan, seoPlan]);

  return (
    <div className="min-h-screen bg-transparent text-white py-8 md:py-16">
      {/* Main Content */}
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
              <Search className={`h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 ${activeTab === 'seo' ? 'text-white' : 'text-orange-500'}`} />
              <span className="hidden xs:inline">Wix SEO Packages</span>
            </button>
            <button
              onClick={() => setActiveTab('web-design')}
              className={`px-4 md:px-8 py-3 md:py-3.5 rounded-md text-xs sm:text-sm font-medium transition-all duration-300 flex items-center whitespace-nowrap ${activeTab === 'web-design'
                ? 'bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-md'
                : 'text-gray-300 hover:text-white hover:bg-gray-800/70'
                }`}
            >
              <Lightbulb className={`h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 ${activeTab === 'web-design' ? 'text-white' : 'text-orange-500'}`} />
              Web Design Packages
            </button>
            <button
              onClick={() => setShowCalculator(true)}
              className="px-4 md:px-8 py-3 md:py-3.5 rounded-md text-xs sm:text-sm font-medium text-white relative overflow-hidden group border border-orange-500 bg-transparent whitespace-nowrap"
            >
              {/* Laser border effect */}
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

        {/* Promo Banner */}
        <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 rounded-md p-4 sm:p-6 mb-6 md:mb-8 text-center shadow-xl transform hover:scale-[1.01] transition-transform duration-300 relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] opacity-10 bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/30 via-transparent to-orange-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <h2 className="text-sm sm:text-xl md:text-2xl font-bold relative z-10 flex flex-wrap items-center justify-center">
            <span className="text-center">GET 15% OFF YOUR WEBSITE'S PRICE SIGNING UP FOR A DESIGN AND SEO COMBO</span>
          </h2>
        </div>

        {/* SEO Understanding Toggle */}
        <div className="flex items-center mb-10 md:mb-16 px-4">
          <div className="flex items-center space-x-4">
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

        {/* Feature explanation tooltip */}
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

        {/* Calculator Modal */}
        {showCalculator && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
            <div className="bg-transparent rounded-xl p-4 sm:p-8 w-full max-w-5xl relative shadow-2xl border border-gray-700 overflow-hidden max-h-[90vh] overflow-y-auto">
              {/* Background pattern */}
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
                    <p className="text-gray-400 text-xs sm:text-sm mt-1">Calculate your perfect combo and save 15%</p>
                  </div>
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
                          onChange={(e) => setWebDesignPlan(e.target.value)}
                          className="block w-full bg-gray-800/70 border border-gray-600 rounded-md py-3 sm:py-3.5 px-3 sm:px-4 pr-8 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-sm"
                        >
                          <option value="">Select a Plan</option>
                          {webDesignPackages.map((pkg) => (
                            <option key={pkg.name} value={pkg.name}>{pkg.name} - ${pkg.price}</option>
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
                          onChange={(e) => setSeoPlan(e.target.value)}
                          className="block w-full bg-gray-800/70 border border-gray-600 rounded-md py-3 sm:py-3.5 px-3 sm:px-4 pr-8 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-sm"
                        >
                          <option value="">Select a Plan</option>
                          {seoPackages.map((pkg) => (
                            <option key={pkg.name} value={pkg.name}>{pkg.name} - ${pkg.price}/month</option>
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

                    {showTotal && calculatedTotal !== null && discountedTotal !== null && webDesignPrice !== null && seoPrice !== null && discountAmount !== null && (
                      <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-gray-800/50 rounded-md border border-gray-700 shadow-inner">
                        <div className="flex justify-between items-center pt-3 border-t border-gray-700">
                          <span className="text-base sm:text-lg font-bold text-white">Total Price:</span>
                          <span className="text-base sm:text-lg font-bold text-white flex items-center">
                            ${discountedTotal.toFixed(0)}
                            <span className="text-xs text-orange-400 ml-1">x12</span>
                          </span>
                        </div>
                        <button className="w-full mt-4 relative overflow-hidden group/btn bg-gradient-to-r from-green-700 to-blue-800 text-white font-medium py-3 px-4 rounded-md transition-all duration-300 shadow-md flex items-center justify-center text-sm">
                          {/* Wave effect */}
                          <div className="absolute inset-0 w-0 bg-gradient-to-r from-green-800 via-green-600 to-blue-900 group-hover/btn:w-full transition-[width] duration-700 ease-in-out wave-animation"></div>
                          <span className="relative z-10">Proceed with This Combo</span>
                          <Check className="h-4 w-4 sm:h-5 sm:w-5 ml-2 relative z-10" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Combo Features Box or Animation */}
                  {showTotal && selectedWebDesignPackage && selectedSeoPackage ? (
                    <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl border border-gray-700 p-4 sm:p-6 shadow-lg">
                      <h3 className="text-lg sm:text-xl font-bold mb-4 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        Features of {selectedWebDesignPackage.name} and {selectedSeoPackage.name} Combo:
                      </h3>

                      <div className="space-y-4 max-h-[300px] sm:max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                        {/* Web Design Features */}
                        <div className="mb-4">
                          <h4 className="text-xs sm:text-sm font-semibold text-orange-400 mb-2 flex items-center">
                            <Lightbulb className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                            Web Design Features:
                          </h4>
                          <ul className="space-y-2">
                            {selectedWebDesignPackage.features.map((feature: string, i: number) => (
                              <li
                                key={i}
                                className="flex items-start group/feature relative"
                                onMouseEnter={() => {
                                  setHoveredFeature(showBusinessFriendly ? businessFriendlyExplanations[feature] : featureExplanations[feature] || null);
                                }}
                                onMouseLeave={() => setHoveredFeature(null)}
                              >
                                <div className="bg-green-500/10 p-1 rounded-full mr-2 sm:mr-3 flex-shrink-0 mt-0.5 group-hover/feature:bg-green-500/20 transition-colors duration-200">
                                  <Check className="h-2 w-2 sm:h-3 sm:w-3 text-green-500" />
                                </div>
                                <span className="text-xs text-gray-300 group-hover/feature:text-white transition-colors duration-200 cursor-help border-b border-dashed border-gray-700 group-hover/feature:border-gray-500">{feature}</span>
                              </li>
                            ))}
                            <li className="flex items-start pt-1">
                              <div className="bg-orange-500/10 p-1 rounded-full mr-2 sm:mr-3 flex-shrink-0 mt-0.5">
                                <Clock className="h-2 w-2 sm:h-3 sm:w-3 text-orange-500" />
                              </div>
                              <span className="text-xs text-gray-300">{selectedWebDesignPackage.delivery}</span>
                            </li>
                          </ul>
                        </div>

                        {/* SEO Features */}
                        <div>
                          <h4 className="text-xs sm:text-sm font-semibold text-orange-400 mb-2 flex items-center">
                            <Search className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                            SEO Features:
                          </h4>
                          <ul className="space-y-2">
                            {selectedSeoPackage.features.map((feature: string, i: number) => (
                              <li
                                key={i}
                                className="flex items-start group/feature relative"
                                onMouseEnter={() => {
                                  setHoveredFeature(showBusinessFriendly ? businessFriendlyExplanations[feature] : featureExplanations[feature] || null);
                                }}
                                onMouseLeave={() => setHoveredFeature(null)}
                              >
                                <div className="bg-green-500/10 p-1 rounded-full mr-2 sm:mr-3 flex-shrink-0 mt-0.5 group-hover/feature:bg-green-500/20 transition-colors duration-200">
                                  <Check className="h-2 w-2 sm:h-3 sm:w-3 text-green-500" />
                                </div>
                                <span className="text-xs text-gray-300 group-hover/feature:text-white transition-colors duration-200 cursor-help border-b border-dashed border-gray-700 group-hover/feature:border-gray-500">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Combo Benefits */}
                        <div className="pt-4 mt-4 border-t border-gray-700">
                          <h4 className="text-xs sm:text-sm font-semibold text-orange-400 mb-2 flex items-center">
                            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                            Combo Benefits:
                          </h4>
                          <p className="text-xs text-gray-300 leading-relaxed">
                            This combo is perfect for businesses looking to establish a strong online presence quickly.
                            You'll benefit from professional web design and targeted SEO to attract customers in your area.
                            The 15% discount on your web design package provides excellent value while ensuring your
                            business stands out online with a cohesive digital strategy.
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl border border-gray-700 p-4 sm:p-6 shadow-lg overflow-hidden relative">
                      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] opacity-5 bg-cover bg-center"></div>

                      {/* Web Design + SEO Animation */}
                      <div className="relative h-full min-h-[300px] sm:min-h-[400px] flex flex-col items-center justify-center">
                        <div className="website-animation">
                          {/* Desktop Frame */}
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

                          {/* SEO Elements */}
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

                          {/* Connecting Lines */}
                          <div className="connecting-line line1"></div>
                          <div className="connecting-line line2"></div>
                          <div className="connecting-line line3"></div>

                          {/* Particles */}
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
                            Choose a Web Design package and an SEO package to see all the features included in your combo.
                            Get 15% off your web design package when you bundle with SEO!
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

        {/* Pricing Cards */}
        <div className="flex justify-center">
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 ${activeTab === "web-design"
              ? "lg:grid-cols-3"
              : "lg:grid-cols-3 xl:grid-cols-4"
              } gap-6 md:gap-8 max-w-8xl`}
          >
            {activeTab === 'web-design' ? (
              webDesignPackages.map((pkg, index) => (
                <div
                  key={index}
                  className={`group relative bg-transparent rounded-md overflow-hidden shadow-2xl border ${pkg.popular ? 'border-orange-500/30' : 'border-gray-700/50'} transform hover:scale-[1.02] transition-all duration-300 flex flex-col ${hoveredCard === index ? 'ring-2 ring-orange-500/50' : ''} shadow-[5px_5px_15px_rgba(0,0,0,0.3),-5px_-5px_15px_rgba(255,255,255,0.05)]`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Popular badge */}
                  {pkg.popular && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white text-[10px] xs:text-xs font-bold px-2 sm:px-4 py-1 rounded-bl-md shadow-lg flex items-center">
                        <Star className="h-2 w-2 sm:h-3 sm:w-3 mr-1" />
                        MOST POPULAR </div>
                    </div>
                  )}

                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-b ${pkg.bgGradient} opacity-50`}></div>

                  {/* Card content */}
                  <div className="p-6 sm:p-8 relative z-10 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-gray-800/50 p-3 rounded-lg shadow-inner">
                        {pkg.icon}
                      </div>
                      <div className="text-right">
                        <span className="block text-2xl sm:text-3xl font-bold text-white">${pkg.price}</span>
                        <span className="text-xs text-gray-400">{pkg.period}</span>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">{pkg.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-300 mb-6">{pkg.description}</p>

                    <div className="space-y-3 mb-6 flex-grow">
                      {pkg.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-start group/feature"
                          onMouseEnter={() => {
                            setHoveredFeature(showBusinessFriendly ? businessFriendlyExplanations[feature] : featureExplanations[feature] || null);
                          }}
                          onMouseLeave={() => setHoveredFeature(null)}
                        >
                          <div className="bg-green-500/10 p-1 rounded-full mr-2 flex-shrink-0 mt-0.5 group-hover/feature:bg-green-500/20 transition-colors duration-200">
                            <Check className="h-3 w-3 text-green-500" />
                          </div>
                          <span className="text-xs text-gray-300 group-hover/feature:text-white transition-colors duration-200 cursor-help border-b border-dashed border-gray-700 group-hover/feature:border-gray-500">{feature}</span>
                        </div>
                      ))}

                      {pkg.negativeFeatures && pkg.negativeFeatures.map((feature, i) => (
                        <div key={i} className="flex items-start opacity-50">
                          <div className="bg-red-500/10 p-1 rounded-full mr-2 flex-shrink-0 mt-0.5">
                            <X className="h-3 w-3 text-red-500" />
                          </div>
                          <span className="text-xs text-gray-400 line-through">{feature}</span>
                        </div>
                      ))}

                      <div className="flex items-start pt-2">
                        <div className="bg-orange-500/10 p-1 rounded-full mr-2 flex-shrink-0 mt-0.5">
                          <Clock className="h-3 w-3 text-orange-500" />
                        </div>
                        <span className="text-xs text-gray-300">{pkg.delivery}</span>
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-medium py-3 px-4 rounded-md transition-all duration-300 shadow-md flex items-center justify-center text-sm mt-auto">
                      Choose Plan
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              seoPackages.map((pkg, index) => (
                <div
                  key={index}
                  className={`group relative bg-transparent rounded-md overflow-hidden shadow-2xl border ${pkg.popular ? 'border-orange-500/30' : 'border-gray-700/50'} transform hover:scale-[1.02] transition-all duration-300 flex flex-col ${hoveredCard === index ? 'ring-2 ring-orange-500/50' : ''} shadow-[5px_5px_15px_rgba(0,0,0,0.3),-5px_-5px_15px_rgba(255,255,255,0.05)]`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Popular badge */}
                  {pkg.popular && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white text-[10px] xs:text-xs font-bold px-2 sm:px-4 py-1 rounded-bl-md shadow-lg flex items-center">
                        <Star className="h-2 w-2 sm:h-3 sm:w-3 mr-1" />
                        MOST POPULAR
                      </div>
                    </div>
                  )}

                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-b ${pkg.bgGradient} opacity-50`}></div>

                  {/* Card content */}
                  <div className="p-6 sm:p-8 relative z-10 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-gray-800/50 p-3 rounded-lg shadow-inner">
                        {pkg.icon}
                      </div>
                      <div className="text-right">
                        <span className="block text-2xl sm:text-3xl font-bold text-white">${pkg.price}</span>
                        <span className="text-xs text-gray-400">{pkg.period}</span>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">{pkg.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-300 mb-6">{pkg.description}</p>

                    <div className="space-y-3 mb-6 flex-grow">
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
                    <button className="w-full bg-orange-600 text-white font-medium py-3 sm:py-4 px-4 sm:px-6 rounded-md transition-all duration-300 shadow-[3px_3px_10px_rgba(0,0,0,0.2),-3px_-3px_10px_rgba(255,255,255,0.03)] group-hover:shadow-orange-500/20 flex items-center justify-center relative overflow-hidden group/btn text-xs sm:text-sm">
                      <div className="absolute inset-0 w-0 bg-gradient-to-r from-green-800 via-green-600 to-blue-900 group-hover/btn:w-full transition-[width] duration-700 ease-in-out wave-animation"></div>
                      <span className="relative z-10">Choose Plan</span>
                      <ArrowRight className="h-4 w-4 ml-2 relative z-10" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;